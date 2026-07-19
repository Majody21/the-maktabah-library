import type { Metadata } from "next";
import Link from "next/link";
import { getDepartments } from "@/lib/data/content";
import Photo from "@/components/ui/Photo";
import { departmentPhoto } from "@/lib/images";

export const metadata: Metadata = {
  title: "Departments",
  description:
    "The departments of The Maktabah Library: Aqeedah, Fiqh, Quran & Tafsir, Hadith, Arabic, Dawah, Refutations, and Fatawa.",
};

export const revalidate = 3600;

export default async function DepartmentsPage() {
  const departments = await getDepartments();

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="font-display text-3xl font-semibold">Departments</h1>
      <p className="mt-2 text-ink-soft">
        Each department is taught in ordered modules. Every lesson brings its
        proof, and each module ends with a quiz. Begin with Aqeedah.
      </p>

      <div className="mt-8 space-y-4">
        {departments.map((dept) => (
          <Link
            key={dept.id}
            href={`/departments/${dept.slug}`}
            className="card card-hover group flex flex-col overflow-hidden sm:flex-row"
          >
            <Photo
              photo={departmentPhoto(dept.id)}
              sizes="(max-width: 640px) 100vw, 224px"
              className="h-40 w-full !rounded-none sm:h-auto sm:w-56 sm:shrink-0"
            />
            <div className="flex flex-col justify-center p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <h2 className="font-display text-lg font-semibold group-hover:text-forest">
                  {dept.name}
                </h2>
                <span className="arabic-inline !text-[0.95rem] text-ink-faint" dir="rtl" lang="ar">
                  {dept.arabicName}
                </span>
              </div>
              <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-soft">
                {dept.description}
              </p>
              <p className="mt-2.5 font-display text-xs font-semibold">
                {dept.isActive ? (
                  <span className="text-forest">Open now</span>
                ) : dept.prerequisiteModuleId ? (
                  <span className="inline-flex items-center gap-1.5 text-ink-faint">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <rect x="5" y="11" width="14" height="9" rx="1.5" />
                      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                    </svg>
                    Locked
                  </span>
                ) : (
                  <span className="text-ink-faint">Coming soon</span>
                )}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
