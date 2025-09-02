import Carousel from "./Carousel";

export default function ProjectCard({
  projectName,
  tech = [],
  images = [],
  description = "",
  repoLink = "",
  siteLink = "",
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2 p-3 my-8 shadow-md dark:shadow-black/50 rounded-2xl dark:bg-gray-900/50 block-animation">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold dark:text-white">{projectName}</h2>
        <div className="mt-4">
          {tech.map((techName) => (
            <div
              className="rounded-4xl me-2 bg-blue-500 max-w-auto inline-block p-1 md:px-2"
              key={techName}
            >
              <p className="text-xs font-bold dark:text-white">{techName}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-lg dark:text-white md:max-w-xl">
          {description}
        </p>
        <div className="mt-2 md:mt-auto">
          <a
            href={repoLink}
            target="_blank"
            className="inline-flex font-bold rounded-md px-4 py-2 bg-blue-500 dark:text-white hover:cursor-pointer hover:bg-blue-500/80 ease-in-out duration-100"
          >
            <span className="flex">
              <img
                src="https://img.icons8.com/material-outlined/24/000000/github.png"
                alt=""
                className="inline-block w-6 me-1"
              />
              Codigo
            </span>
          </a>
          {siteLink && (
            <a
              href={siteLink}
              target="_blank"
              className="ms-2 inline-flex font-bold rounded-md px-4 py-2 bg-blue-500 dark:text-white hover:cursor-pointer hover:bg-blue-500/80 ease-in-out duration-100"
            >
              <span className="flex">
                <img
                  src="https://img.icons8.com/?size=100&id=69543&format=png&color=000000"
                  alt=""
                  className="inline-block w-6 me-1"
                />
                Sitio Web
              </span>
            </a>
          )}
        </div>
      </div>
      <div className="overflow-hidden rounded-xl ">
        <Carousel images={images}></Carousel>
      </div>
    </div>
  );
}
