export default function TechBadge({ name, img }) {
  return (
    <div className="relative  dark:shadow-black/50 max-w-20 mt-2">
      <img src={img} alt="" />
      <div className="absolute h-full w-full bg-black/75 flex items-center justify-center top-0 opacity-0 cursor-pointer hover:opacity-100 transition-all duration-300">
        <p className="text-white text-center">{name}</p>
      </div>
    </div>
  );
}
