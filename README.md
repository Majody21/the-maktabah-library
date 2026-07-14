# The Maktabah Library

A full-stack Islamic education platform for English speakers: structured, proof-based courses in the aqeedah of the Salaf. Users pick departments and daily study hours, get a personalized ilm schedule, work through lessons (proof-backed text → scholar's video → module quiz), and track progress across the curriculum.

**Design:** clean white with a restrained green accent, Lora + Crimson Pro + Amiri (Arabic), real photography throughout, bismillah header on every page, opt-in grey dark mode, mobile-first.

**Photography:** all photos are hotlinked from Unsplash's CDN (Unsplash License — free to use) and registered in `lib/images.ts` with verified URLs and alt text. Swap an entry there to change a photo site-wide; `next.config.ts` allowlists `images.unsplash.com` for `next/image`.

## Tech stack

- **Next.js 15** (App Router, SSR content pages) + **Tailwind CSS v4**
- **Supabase** (PostgreSQL + email/password auth, RLS on all user tables)
- **Vercel** for deployment

## What's inside (Phase 1)

- **Aqeedah department, fully seeded:** 5 modules / 19 lessons — Five Pillars, Six Pillars of Iman, Usul al-Thalathah, Categories of Tawheed, al-Qawa'id al-Arba'. Every claim carries its daleel: 53 Quran/hadith proofs with Arabic text, translation and reference.
- **5 module quizzes (80 questions)** with anti-tell authoring rules (balanced option lengths/positions, plausible distractors, ~20/60/20 recall/application/analysis), shuffled per load, one attempt per quiz (DB-enforced), full review mode with explanations and per-topic scores.
- **Ilm Roadmap Builder** — departments → hours/day → study days → flexible schedule (missed days shift forward; gentle welcome-back message).
- **Dashboard** — today's plan, continue-where-you-left-off, per-department progress, streak, recent quiz scores.
- **Glossary** (123 terms), **Resources** (39 entries + where-to-buy), **Fatawa library** (23 curated verdict summaries, searchable).
- **7 Phase-2 departments** scaffolded with coming-soon states; Refutations is prerequisite-locked behind Usul al-Thalathah.

## Running it

```bash
npm install
npm run dev
```

### Demo mode (zero config)

With no environment variables, the app runs fully from the bundled seed content: auth pages offer a **"Continue as Guest"** identity and all progress/schedules/quiz attempts persist in `localStorage`. Useful for local dev and demos.

### Full mode (Supabase)

1. Create a project at [database.new](https://database.new).
2. In the SQL editor, run `supabase/migrations/00001_initial_schema.sql`, then `supabase/seed.sql`.
   (Or with the CLI: `supabase link && supabase db push && supabase db seed`.)
3. Copy `.env.example` → `.env.local` and fill in from **Project Settings → API**:
   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```
4. Restart the dev server. Signup/login now use real accounts; user data lives behind RLS; content is read from Postgres.

### Deploying to Vercel

1. Push this folder to a Git repo and import it in Vercel.
2. Add the two `NEXT_PUBLIC_SUPABASE_*` env vars.
3. Deploy. (Set your Supabase project's Auth → URL configuration to the Vercel domain for email confirmations.)

## Content architecture

`lib/content/**` is the **single source of truth** — typed TypeScript content the app serves directly in demo mode. `npm run seed:generate` materializes the same data into `supabase/seed.sql`. Edit content in TS, regenerate, re-run the seed.

Lesson video metadata lives in the `videos` table (one row per lesson) so broken YouTube links can be swapped in the Supabase dashboard **without redeploying**. Video URLs currently ship as `NULL` (lesson pages show a graceful fallback message); fill them with subtitled lectures from the scholars' archives — e.g. update `videos.youtube_url` for the relevant `lesson_id`.

## Structure

```
app/                    # routes (landing, about, auth, dashboard, roadmap,
                        #  departments/[slug]/[module]/[lesson], glossary, resources, fatawa)
components/             # layout, lesson, quiz, roadmap, dashboard, arabic, ui
lib/content/            # canonical content: departments, lessons, quizzes, glossary, resources, fatawa
lib/data/               # content repository (Supabase or bundled) + user store (Supabase or guest localStorage)
lib/quiz/  lib/schedule/  lib/progress.ts   # engines: shuffle/scoring, schedule generation, locking/streaks
supabase/migrations/    # schema + RLS policies
supabase/seed.sql       # generated — do not edit by hand
scripts/generate-seed.ts
```

## Notes

- **RLS:** content tables are public-read; `users`, `user_progress`, `user_quiz_attempts`, `user_schedules` are scoped to `auth.uid()`. Quiz attempts have no update/delete policy — one attempt, ever, at the database level.
- **Prerequisites:** modules unlock sequentially by quiz completion (any score); the Refutations department requires the Usul al-Thalathah module.
- **Tone guardrails:** refutations content (Phase 2) is specified as educational and evidence-based — groups and historical positions only, no contemporary individuals.
