import heroimg from "../assets/images/heroimg.png";

export default function Hero() {
  return (
    <section
      className="flex flex-col-reverse md:grid  md:grid-cols-2 md:h-[92vh]"
      id=" "
    >
      <div className="flex justify-center flex-col p-4">
        <div>
          <h1 className="text-5xl font-bold dark:text-white">
            Hola, soy Yunier Yau
          </h1>
          <h2 className="mt-1 text-5xl font-bold text-blue-500">
            Desarrollador de software
          </h2>
          <p className="mt-5 text-lg dark:text-white md:max-w-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error hic
            doloribus tenetur vero aut molestias. Voluptas dicta voluptatum
            aliquam impedit tempore consectetur quod mollitia ipsam quibusdam!
            Officia nulla blanditiis voluptates!
          </p>
          <div className="mt-5">
            <button className="font-bold rounded-md px-4 py-2 bg-blue-500 dark:text-white hover:cursor-pointer hover:scale-105 ease-in-out duration-100">
              Descargar CV
            </button>
            <button className="font-bold ms-4 border rounded-md px-4 py-2 text-blue-500  hover:cursor-pointer hover:scale-105 ease-in-out duration-100">
              Contáctame
            </button>
          </div>
          <div className="mt-5">
            <ul className="flex mt-4 space-x-4">
              <li className="hover:cursor-pointer hover:scale-105 ease-in-out duration-100 rounded-full bg-blue-500 p-2">
                <a href="/#">
                  <img
                    src="https://img.icons8.com/material-outlined/24/000000/github.png"
                    alt=""
                  />
                </a>
              </li>
              <li className="hover:cursor-pointer hover:scale-105 ease-in-out duration-100 rounded-full bg-blue-500 p-2">
                <a href="/#">
                  <img
                    src="https://img.icons8.com/material-outlined/24/000000/linkedin.png"
                    alt=""
                  />
                </a>
              </li>
              <li className="hover:cursor-pointer hover:scale-105 ease-in-out duration-100 rounded-full bg-blue-500 p-2">
                <a href="/#">
                  <img
                    src="https://img.icons8.com/material-outlined/24/000000/twitter.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center  ">
        {" "}
        <picture className="bg-blue-500 rounded-full overflow-hidden">
          <div
            className="w-75 h-75 md:w-[30vw] md:h-[60vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${heroimg}` }}
          ></div>
        </picture>
      </div>
    </section>
  );
}
