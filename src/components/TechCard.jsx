import TechBadge from "./TechBadge";

export default function TechCard({ tech }) {
  return (
    <div className="shadow-md dark:shadow-black/50 rounded-2xl block-scale-animation p-4 m-4 bg-blue-500">
      <h1 className="text-3xl tracking-wider text-center  font-bold dark:text-white capitalize">
        {tech.tech}
      </h1>
      <div className="grid grid-cols-3 gap-2 mt-3">
        {tech.content.map((item, index) => (
          <TechBadge key={index} name={item.name} img={item.img} />
        ))}
      </div>
    </div>
  );
}
