
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="py-20">
      <h1 className="text-5xl font-bold">{project.title}</h1>
      <p className="text-gray-400 mt-4">{project.desc}</p>

      <div className="mt-10 p-6 border border-gray-800 rounded-xl">
        <p className="text-lg leading-relaxed">{project.content}</p>
      </div>
    </div>
  );
}
