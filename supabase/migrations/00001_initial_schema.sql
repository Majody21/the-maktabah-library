-- The Maktabah Library — initial schema
-- Content tables use human-readable text ids (slugs) so seed data stays
-- diffable and FKs stay legible. User tables use uuid.

-- ————————————————— content —————————————————

create table public.departments (
  id text primary key,
  slug text unique not null,
  name text not null,
  arabic_name text,
  description text,
  icon text,
  display_order integer not null default 0,
  is_active boolean not null default false,
  -- No FK: modules are created after departments, and the prerequisite
  -- chain is validated in the app layer.
  prerequisite_module_id text,
  prerequisite_note text
);

create table public.modules (
  id text primary key,
  department_id text not null references public.departments(id) on delete cascade,
  slug text not null,
  name text not null,
  description text,
  display_order integer not null default 0,
  prerequisite_module_id text references public.modules(id),
  estimated_minutes integer not null default 0,
  unique (department_id, slug)
);

create table public.lessons (
  id text primary key,
  module_id text not null references public.modules(id) on delete cascade,
  slug text not null,
  title text not null,
  -- Paragraphs separated by blank lines; [[proof:N]] tokens mark where the
  -- proof with display_order = N renders.
  content_html text not null,
  display_order integer not null default 0,
  video_youtube_url text,
  video_scholar text,
  video_title text,
  book_recommendations jsonb not null default '[]'::jsonb,
  based_on text,
  unique (module_id, slug)
);

create table public.proofs (
  id text primary key,
  lesson_id text not null references public.lessons(id) on delete cascade,
  type text not null check (type in ('quran', 'hadith')),
  arabic_text text not null,
  english_translation text not null,
  reference text not null,
  display_order integer not null default 0
);

-- Video metadata lives in its own table so broken links can be swapped
-- without touching lesson content or redeploying.
create table public.videos (
  id text primary key,
  lesson_id text not null references public.lessons(id) on delete cascade unique,
  youtube_url text,
  title text,
  scholar text,
  topic text
);

create table public.quizzes (
  id text primary key,
  module_id text not null references public.modules(id) on delete cascade unique
);

create table public.quiz_questions (
  id text primary key,
  quiz_id text not null references public.quizzes(id) on delete cascade,
  question_text text not null,
  options jsonb not null,
  correct_answer_index integer not null,
  explanation text not null,
  topic_tag text not null default 'general',
  difficulty text not null default 'application'
    check (difficulty in ('recall', 'application', 'analysis'))
);

create table public.glossary_terms (
  id text primary key,
  arabic_term text not null,
  transliteration text not null,
  definition text not null,
  category text not null default 'General'
);

create table public.resources (
  id text primary key,
  department_id text references public.departments(id) on delete set null,
  title text not null,
  author text,
  type text not null check (type in ('book', 'video', 'website')),
  url text not null,
  description text,
  -- direct link to a legitimately free PDF (preferred over url when set)
  pdf_url text,
  -- book cover image; a styled placeholder renders when absent
  cover_url text
);

create table public.fatawa (
  id text primary key,
  topic text not null,
  question text not null,
  answer_text text not null,
  scholar text not null,
  source_reference text,
  source_url text,
  translation_credit text,
  translation_url text,
  category text not null default 'General'
);

-- ————————————————— users —————————————————

create table public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  name text,
  created_at timestamptz not null default now(),
  study_hours_per_day integer,
  study_days integer[] not null default '{}',
  streak_count integer not null default 0,
  last_study_date date
);

-- Mirror auth.users into public.users on signup.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.users (id, email, name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'name', split_part(new.email, '@', 1))
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create table public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  lesson_id text not null references public.lessons(id) on delete cascade,
  completed_at timestamptz not null default now(),
  unique (user_id, lesson_id)
);

create table public.user_quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  quiz_id text not null references public.quizzes(id) on delete cascade,
  score_percentage integer not null check (score_percentage between 0 and 100),
  answers jsonb not null default '{}'::jsonb,
  completed_at timestamptz not null default now(),
  -- one attempt per quiz, enforced at the database level
  unique (user_id, quiz_id)
);

create table public.user_schedules (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade unique,
  schedule_data jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ————————————————— row level security —————————————————

-- Content: readable by everyone, writable by no client role.
alter table public.departments enable row level security;
alter table public.modules enable row level security;
alter table public.lessons enable row level security;
alter table public.proofs enable row level security;
alter table public.videos enable row level security;
alter table public.quizzes enable row level security;
alter table public.quiz_questions enable row level security;
alter table public.glossary_terms enable row level security;
alter table public.resources enable row level security;
alter table public.fatawa enable row level security;

create policy "Public read" on public.departments for select using (true);
create policy "Public read" on public.modules for select using (true);
create policy "Public read" on public.lessons for select using (true);
create policy "Public read" on public.proofs for select using (true);
create policy "Public read" on public.videos for select using (true);
create policy "Public read" on public.quizzes for select using (true);
create policy "Public read" on public.quiz_questions for select using (true);
create policy "Public read" on public.glossary_terms for select using (true);
create policy "Public read" on public.resources for select using (true);
create policy "Public read" on public.fatawa for select using (true);

-- Users: each person sees and edits only their own rows.
alter table public.users enable row level security;
create policy "Own profile read" on public.users
  for select using (auth.uid() = id);
create policy "Own profile update" on public.users
  for update using (auth.uid() = id) with check (auth.uid() = id);

alter table public.user_progress enable row level security;
create policy "Own progress read" on public.user_progress
  for select using (auth.uid() = user_id);
create policy "Own progress insert" on public.user_progress
  for insert with check (auth.uid() = user_id);
create policy "Own progress delete" on public.user_progress
  for delete using (auth.uid() = user_id);

alter table public.user_quiz_attempts enable row level security;
create policy "Own attempts read" on public.user_quiz_attempts
  for select using (auth.uid() = user_id);
create policy "Own attempts insert" on public.user_quiz_attempts
  for insert with check (auth.uid() = user_id);
-- Deliberately no update/delete policies: one attempt per quiz, no retakes.

alter table public.user_schedules enable row level security;
create policy "Own schedule read" on public.user_schedules
  for select using (auth.uid() = user_id);
create policy "Own schedule insert" on public.user_schedules
  for insert with check (auth.uid() = user_id);
create policy "Own schedule update" on public.user_schedules
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
