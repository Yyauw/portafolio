export default function Footer() {
  return (
    <footer className="mt-[8vh] p-5 py-8 flex justify-around dark:text-white border-t border-gray-300 dark:border-gray-700">
      <p>&copy; 2025 - Yyauw.dev | Todo los derechos reservados </p>
      <div className="space-x-4 md:flex grid grid-rows-3 gap-2 ms-4 md:ms-0">
        <a href="" className="hover:underline">
          Github
        </a>
        <a href="" className="hover:underline">
          LinkedIn
        </a>
        <a href="mailto:yauyunier@gmail.com" className="hover:underline">
          Contacto
        </a>
      </div>
    </footer>
  );
}
