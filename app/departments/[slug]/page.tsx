import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getDepartmentBySlug,
  getLessonsForModule,
  getModulesForDepartment,
} from "@/lib/data/content";
import DeptIcon from "@/components/ui/DeptIcon";
import Photo from "@/components/ui/Photo";
import { departmentPhoto } from "@/lib/images";
import ModuleList, { type ModuleSummary } from "@/components/departments/ModuleList";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const department = await getDepartmentBySlug(slug);
  if (!department) return {};
  return { title: department.name, description: department.description };
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const department = await getDepartmentBySlug(slug);
  if (!department) notFound();

  const modules = await getModulesForDepartment(department.id);
  const moduleSummaries: ModuleSummary[] = await Promise.all(
    modules.map(async (m) => {
      const lessons = await getLessonsForModule(m.id);
      return {
        ...m,
        lessonCount: lessons.length,
        lessonSlugs: lessons.map((l) => l.slug),
        lessonIds: lessons.map((l) => l.id),
      };
    })
  );

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <nav className="text-sm text-ink-faint" aria-label="Breadcrumb">
        <Link href="/departments" className="hover:text-forest">
          Departments
        </Link>{" "}
        / <span className="text-ink-soft">{department.name}</span>
      </nav>

      <Photo
        photo={departmentPhoto(department.id)}
        priority
        sizes="(max-width: 768px) 100vw, 768px"
        className="mt-5 h-44 w-full sm:h-56"
      />

      <div className="mt-7 flex items-start gap-4">
        <span className="mt-1 text-forest">
          <DeptIcon name={department.icon} size={30} />
        </span>
        <div>
          <h1 className="font-display text-3xl font-semibold">{department.name}</h1>
          <p className="arabic-inline mt-1 !text-[1.05rem] text-ink-faint" dir="rtl" lang="ar">
            {department.arabicName}
          </p>
        </div>
      </div>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        {department.description}
      </p>

      <ModuleList department={department} moduleSummaries={moduleSummaries} />
    </div>
  );
}
