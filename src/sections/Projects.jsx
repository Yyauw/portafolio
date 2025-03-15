import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="pt-[8vh]" id="proyectos">
      <h1 className="text-4xl tracking-wider text-center  font-bold dark:text-white">
        Proyectos
      </h1>
      <h2 className="text-2xl tracking-wider text-center  font-bold text-blue-500 italic">
        De la idea al código
      </h2>
      <div className="p-2 md:px-20">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
