
import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      <div className="space-y-6">
        {projects.map((p) => (
          <Link key={p.id} href={`/projects/${p.id}`}>
            <div className="p-6 border border-gray-800 rounded-lg hover:bg-white/5">
              <h2 className="text-xl">{p.title}</h2>
              <p className="text-gray-400">{p.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
