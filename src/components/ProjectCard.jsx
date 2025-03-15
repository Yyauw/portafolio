import proyecto1 from "../assets/images/proyecto1.png";

export default function ProjectCard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 p-3 my-8 shadow-md dark:shadow-black/50 rounded-2xl dark:bg-gray-900/50 block-animation">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold dark:text-white">
          Proyecto 1 - Portafolio personal
        </h2>
        <div className="mt-4">
          <div className="rounded-4xl me-2 bg-blue-500 max-w-auto inline-block p-1 md:px-2">
            <p className="text-xs font-bold dark:text-white">Tailwind CSS</p>
          </div>
          <div className="rounded-4xl me-2 bg-blue-500 max-w-auto inline-block p-1 px-2">
            <p className="text-xs font-bold dark:text-white">Tailwind CSS</p>
          </div>
          <div className="rounded-4xl me-2 bg-blue-500 max-w-auto inline-block p-1 px-2">
            <p className="text-xs font-bold dark:text-white">Tailwind CSS</p>
          </div>
          <div className="rounded-4xl me-2 bg-blue-500 max-w-auto inline-block p-1 md:px-2 mt-1">
            <p className="text-xs font-bold dark:text-white">Tailwind CSS</p>
          </div>
        </div>
        <p className="mt-4 text-lg dark:text-white md:max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          asperiores laborum officiis ratione qui soluta praesentium! Doloremque
          incidunt quisquam laudantium molestias neque commodi necessitatibus
          culpa. Nam quae natus eum eius.
        </p>
        <div className="mt-2 md:mt-auto">
          <button className="font-bold rounded-md px-4 py-2 bg-blue-500 dark:text-white hover:cursor-pointer hover:bg-blue-500/80 ease-in-out duration-100">
            <span className="flex">
              <img
                src="https://img.icons8.com/material-outlined/24/000000/github.png"
                alt=""
                className="inline-block w-6 me-1"
              />
              Codigo
            </span>
          </button>
          <button className="font-bold ms-4  mt-2 rounded-md px-4 py-2 bg-blue-500 dark:text-white hover:cursor-pointer hover:bg-blue-500/80 ease-in-out duration-100">
            <span className="flex">
              <img
                src="https://img.icons8.com/material-outlined/24/000000/github.png"
                alt=""
                className="inline-block w-6 me-1"
              />
              Codigo
            </span>
          </button>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl">
        <img src={proyecto1} alt="" className="aspect-video" />
      </div>
    </div>
  );
}
