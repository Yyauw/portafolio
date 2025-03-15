import TechCard from "../components/TechCard";

export default function Technologies() {
  const Technologies = [
    {
      tech: "lenguajes",
      content: [
        {
          name: "JavaScript",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png",
        },
        {
          name: "Java",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png",
        },
        {
          name: "php",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/php.png",
        },
      ],
    },
    {
      tech: "frontend",
      content: [
        {
          name: "HTML",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png",
        },
        {
          name: "CSS",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png",
        },
        {
          name: "Tailwind CSS",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png",
        },
        {
          name: "React",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png",
        },
        {
          name: "Next.js",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png",
        },
        {
          name: "Vite",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vite.png",
        },
      ],
    },
    {
      tech: "backend",
      content: [
        {
          name: "Node.js",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png",
        },
        {
          name: "Express",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png",
        },
        {
          name: "Laravel",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/laravel.png",
        },
        {
          name: "Firebase",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/firebase.png",
        },
        {
          name: "MySql",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mysql.png",
        },
        {
          name: "MongoDB",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png",
        },
      ],
    },
    {
      tech: "otros",
      content: [
        {
          name: "Git",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png",
        },
        {
          name: "GitHub",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/github.png",
        },
        {
          name: "REST",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png",
        },
        {
          name: "Postman",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png",
        },
        {
          name: "Figma",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/figma.png",
        },
        {
          name: "Docker",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png",
        },
        {
          name: "CI/CD",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ci_cd.png",
        },
        {
          name: "Nginx",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/nginx.png",
        },
        {
          name: "Selenium",
          img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/selenium.png",
        },
      ],
    },
  ];
  return (
    <section className="pt-[8vh]" id="habilidades">
      <h1 className="text-4xl tracking-wider text-center  font-bold dark:text-white">
        Habilidades
      </h1>
      <h2 className="text-2xl tracking-wider text-center  font-bold text-blue-500 italic">
        Habilidades que transforman ideas en realidad
      </h2>
      <div className="grid md:grid-cols-4 mt-4">
        {Technologies.map((tech, index) => (
          <TechCard key={index} tech={tech} />
        ))}
      </div>
    </section>
  );
}
