import aboutimg from "../assets/images/about.jpg";

export default function About() {
  return (
    <section className="pt-[8vh] px-1">
      <h1 className="text-4xl tracking-wider text-center  font-bold dark:text-white">
        Sobre <span className="text-blue-500">mí</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 md:px-24 gap-4">
        <div className="p-4 rounded-2xl bg-blue-500 mx-auto md:-rotate-3 hover:cursor-pointer hover:scale-105 ease-in-out duration-300">
          <img src={aboutimg} alt="" className="m-auto rounded-3xl w-md" />
        </div>
        <div className="mt-2 mx-auto text-center lg:text-left">
          <p className=" mt-4 text-lg dark:text-white md:max-w-xl">
            Soy Yunier Yau desarrollador de software apasionado por la
            innovación y los desafíos tecnológicos. Con experiencia en
            desarrollo web, móvil y automatización, me especializo en la
            creación de soluciones eficientes y escalables.
          </p>
          <p className="mt-4 text-lg dark:text-white md:max-w-xl">
            Me encanta trabajar en equipo y siempre busco mejorar mis
            habilidades para ofrecer productos de alta calidad. ¡Explora mis
            proyectos y conoce más sobre mi trabajo!
          </p>
        </div>
      </div>
    </section>
  );
}
