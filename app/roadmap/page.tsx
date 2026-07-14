import type { Metadata } from "next";
import {
  getDepartments,
  getLessonsForModule,
  getModulesForDepartment,
} from "@/lib/data/content";
import RoadmapBuilder from "@/components/roadmap/RoadmapBuilder";

export const metadata: Metadata = { title: "Build Your Roadmap" };

export default async function RoadmapPage() {
  const departments = await getDepartments();
  const lessonCounts: Record<string, number> = {};
  for (const dept of departments) {
    const modules = await getModulesForDepartment(dept.id);
    let count = 0;
    for (const m of modules) {
      count += (await getLessonsForModule(m.id)).length;
    }
    lessonCounts[dept.id] = count;
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="font-display text-3xl font-semibold">Plan your study</h1>
      <p className="mt-3 max-w-md text-ink-soft">
        What to study, how much time you have, which days — the library builds
        a daily plan you can keep.
      </p>
      <RoadmapBuilder departments={departments} lessonCounts={lessonCounts} />
    </div>
  );
}
