import moon from "../assets/svg/moon.svg";
import sun from "../assets/svg/sun.svg";
import { useState, useEffect } from "react";
export default function Header() {
  const [pageTheme, setPageTheme] = useState("light");
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const changeTheme = () => {
    document.documentElement.setAttribute(
      "data-theme",
      pageTheme === "light" ? "dark" : "light"
    );
    setPageTheme(pageTheme === "light" ? "dark" : "light");
    localStorage.setItem("theme", pageTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      console.log("No hay tema guardado");
      const preferedTheme = window.matchMedia("(prefers-color-scheme: dark)"); // verifica si el usuario tiene el modo oscuro activado
      const userTheme = preferedTheme.matches ? "dark" : "light";
      localStorage.setItem("theme", userTheme);
      document.documentElement.setAttribute("data-theme", userTheme);
      setPageTheme(userTheme);
      return;
    }
    setPageTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return (
    <header className="flex justify-between items-center p-4 bg-white/60 dark:bg-gray-800/60 sticky z-50 top-0">
      <a href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
        Yyauw.dev
      </a>
      <div>
        <ul className="text-gray-800 dark:text-white items-center space-x-4 font-semibold hidden sm:flex">
          <li className="hover:cursor-pointer hover:text-blue-500">
            {" "}
            <a href="/#">Inicio</a>
          </li>
          <li className="hover:cursor-pointer hover:text-blue-500">
            <a href="/#">Proyectos</a>
          </li>
          <li className="hover:cursor-pointer hover:text-blue-500">
            <a href="/#">Habilidades</a>
          </li>
          <li className="hover:cursor-pointer hover:text-blue-500">
            <a href="/#">Contacto</a>
          </li>
          <li
            className="border border-transparent dark:hover:border-white hover:border-gray-800 p-1 hover:cursor-pointer  rounded-full"
            onClick={changeTheme}
          >
            <img
              src={pageTheme === "light" ? sun : moon}
              alt=""
              className="w-5"
            />
          </li>
        </ul>
        {/* Responsive menu */}
        <button onClick={handleOpenMenu} className="sm:hidden">
          Menu
        </button>
        {openMenu && (
          <div className="flex h-screen w-[50vw] top-0 bg-gray-50 dark:bg-gray-600 p-4 absolute left-0 z-50 sm:hidden">
            <div
              className="w-screen h-screen bg-gray-200/80 dark:bg-gray-800/80 absolute top-0 left-0 -z-10"
              onClick={handleOpenMenu}
            ></div>
            <ul className="mx-auto flex flex-col text-xl space-y-4 w-full font-semibold">
              {" "}
              <li>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Yyauw.dev
                </h2>
              </li>
              <li
                className="hover:cursor-pointer hover:text-blue-500"
                onClick={handleOpenMenu}
              >
                {" "}
                <a href="/#">Inicio</a>
              </li>
              <li onClick={handleOpenMenu}>Proyectos</li>
              <li onClick={handleOpenMenu}>Habilidades</li>
              <li onClick={handleOpenMenu}>Contacto</li>
              <li
                className="border border-transparent dark:hover:border-white hover:border-gray-800 p-1 hover:cursor-pointer  rounded-full"
                onClick={changeTheme}
              >
                <img
                  src={pageTheme === "light" ? sun : moon}
                  alt=""
                  className="w-5"
                />
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
