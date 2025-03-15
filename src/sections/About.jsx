import aboutimg from "../assets/images/about.jpg";

export default function About() {
  return (
    <section className="pt-[8vh] px-1">
      <h1 className="text-4xl tracking-wider text-center  font-bold dark:text-white">
        Sobre <span className="text-blue-500">mi</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 md:px-24 gap-4">
        <div className="p-4 rounded-2xl bg-blue-500 mx-auto -rotate-3 hover:cursor-pointer hover:scale-105 ease-in-out duration-300">
          <img src={aboutimg} alt="" className="m-auto rounded-3xl w-md" />
        </div>
        <div className="mt-2 mx-auto text-center lg:text-left">
          <p className=" mt-4 text-lg dark:text-white md:max-w-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            delectus laboriosam rerum quas dicta quidem earum. Consequuntur
            laboriosam facilis Exercitationem corrupti, eveniet beatae fugit
            perferendis quasi quia ex?
          </p>
          <p className="mt-4 text-lg dark:text-white md:max-w-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            delectus laboriosam rerum quas dicta quidem earum. Consequuntur
            laboriosam facilis doloremque officiis! Exercitationem corrupti,
            eveniet beatae fugit perferendis quasi quia ex?
          </p>
        </div>
      </div>
    </section>
  );
}
