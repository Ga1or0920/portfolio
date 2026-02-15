import { works } from "@/lib/works";
import WorkCard from "./WorkCard";

export default function Works() {
  return (
    <section id="works" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work) => (
          <WorkCard key={work.title} work={work} />
        ))}
      </div>
    </section>
  );
}
