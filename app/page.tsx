import Hero from "@/components/Hero";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="mt-20">
        <h2 className="text-xl mb-6 text-gray-300">Selected Works</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
