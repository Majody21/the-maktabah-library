import Link from "next/link";
import { getDepartments } from "@/lib/data/content";
import DeptIcon from "@/components/ui/DeptIcon";
import Photo from "@/components/ui/Photo";
import ArabicText from "@/components/arabic/ArabicText";
import { heroPhoto, departmentPhoto } from "@/lib/images";

export const revalidate = 3600;

const STEPS = [
  { title: "Sign up", body: "Your progress and schedule are saved as you learn." },
  { title: "Pick your path", body: "Choose what to study and how much time you have." },
  { title: "Start learning", body: "Read, watch the scholars, and test yourself." },
];

export default async function HomePage() {
  const departments = await getDepartments();
  const aqeedah = departments.find((d) => d.id === "aqeedah");
  const rest = departments.filter((d) => d.id !== "aqeedah");

  return (
    <>
      {/* ————— Hero ————— */}
      <section className="mx-auto max-w-4xl px-6 pt-10 sm:pt-12">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-3xl font-semibold leading-snug sm:text-4xl">
            Learn your deen with proof,
            <br />
            from the scholars of Ahlus&nbsp;Sunnah.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-ink-soft">
            Structured courses in the aqeedah of the Salaf. Every lesson
            carries its evidence from the Qur&rsquo;an and the Sunnah.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/signup" className="btn btn-primary w-full sm:w-auto">
              Start Learning
            </Link>
            <Link href="/departments" className="btn btn-outline w-full sm:w-auto">
              Browse Departments
            </Link>
          </div>
        </div>
        <Photo
          photo={heroPhoto}
          priority
          sizes="(max-width: 896px) 100vw, 896px"
          className="mt-10 h-56 w-full sm:h-72"
        />
      </section>

      {/* ————— What you'll study ————— */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-16">
        <h2 className="text-center font-display text-2xl font-semibold">
          What you&rsquo;ll study
        </h2>

        {aqeedah && (
          <Link
            href={`/departments/${aqeedah.slug}`}
            className="card card-hover mt-8 flex flex-col overflow-hidden sm:flex-row"
          >
            <Photo
              photo={departmentPhoto(aqeedah.id)}
              sizes="(max-width: 640px) 100vw, 320px"
              className="h-44 w-full !rounded-none sm:h-auto sm:w-72 sm:shrink-0"
            />
            <div className="flex flex-col justify-center gap-2 p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-display text-xl font-semibold">{aqeedah.name}</h3>
                <span className="arabic-inline !text-[1rem] text-ink-faint" dir="rtl" lang="ar">
                  {aqeedah.arabicName}
                </span>
                <span className="rounded bg-forest-tint px-2 py-0.5 font-display text-xs font-semibold text-forest">
                  Open now
                </span>
              </div>
              <p className="max-w-xl text-[0.95rem] text-ink-soft">
                {aqeedah.description} Five modules, nineteen lessons, a quiz at
                the end of each module.
              </p>
            </div>
          </Link>
        )}

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {rest.map((dept) => (
            <Link
              key={dept.id}
              href={`/departments/${dept.slug}`}
              className="card card-hover flex flex-col items-start gap-1.5 p-4"
            >
              <span className="text-ink-faint">
                <DeptIcon name={dept.icon} size={20} />
              </span>
              <span className="font-display text-[0.95rem] font-semibold leading-tight">
                {dept.name}
              </span>
              <span className="text-xs text-ink-faint">Coming soon</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ————— How it works ————— */}
      <section className="border-y border-line bg-tint/50 py-14">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center font-display text-2xl font-semibold">
            How it works
          </h2>
          <ol className="mx-auto mt-8 grid max-w-2xl gap-8 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <li key={step.title} className="text-center">
                <span className="font-display text-sm font-semibold text-forest">
                  {i + 1}
                </span>
                <h3 className="mt-1 font-display text-base font-semibold">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ————— Closing hadith ————— */}
      <section className="mx-auto max-w-2xl px-6 py-16 text-center">
        <ArabicText className="!text-center !text-[1.9rem] !leading-[2] text-ink">
          مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ
        </ArabicText>
        <p className="mt-4 text-lg italic text-ink-soft">
          “When Allah wants good for a person, He gives him understanding of
          the religion.”
        </p>
        <p className="mt-2 text-sm text-ink-faint">
          Sahih al-Bukhari #71 · Sahih Muslim #1037
        </p>
        <Link href="/signup" className="btn btn-primary mt-8">
          Begin with the fundamentals
        </Link>
      </section>
    </>
  );
}
