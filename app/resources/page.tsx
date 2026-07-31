import type { Metadata } from "next";
import { getDepartments, getResources } from "@/lib/data/content";
import ResourcesClient from "@/components/resources/ResourcesClient";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Recommended books, scholars' websites and channels for every department — plus where to buy reliable English translations.",
};

export const revalidate = 3600;

export default async function ResourcesPage() {
  const [resources, departments] = await Promise.all([
    getResources(),
    getDepartments(),
  ]);
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="font-display text-3xl font-semibold">Resources</h1>
      <p className="mt-2 text-ink-soft">
        The books and sites this library draws from, organized by department.
      </p>
      <ResourcesClient resources={resources} departments={departments} />
    </div>
  );
}
