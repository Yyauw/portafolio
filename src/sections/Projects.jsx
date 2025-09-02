import ProjectCard from "../components/ProjectCard";
import proyecto1 from "../assets/images/proyecto1.png";
import pbc_1 from "../assets/images/pbc_1.png";
import pbc_2 from "../assets/images/pbc_2.png";
import pbc_3 from "../assets/images/pbc_3.png";
import pbc_4 from "../assets/images/pbc_4.png";
import pbc_5 from "../assets/images/pbc_5.png";
import qsoft_1 from "../assets/images/qsoft_1.png";
import qsoft_2 from "../assets/images/qsoft_2.png";
import qsoft_3 from "../assets/images/qsoft_3.png";
import mspos_1 from "../assets/images/mspos_1.png";
import mspos_2 from "../assets/images/mspos_2.png";
import mspos_3 from "../assets/images/mspos_3.png";
import pvc_1 from "../assets/images/pvc_1.png";
import pvc_2 from "../assets/images/pvc_2.png";
import pvc_3 from "../assets/images/pvc_3.png";

export default function Projects() {
  const projects = [
    // {
    //   projectName: "Portafolio Web",
    //   tech: ["React.js", "Tailwind.css"],
    //   images: [proyecto1],
    //   description:
    //     "Este proyecto es mi portafolio web personal, desarrollado para presentar mi trabajo como desarrollador de software. Está construido para ofrecer una experiencia moderna, rápida y responsiva.",
    //   repoLink: "https://github.com/Yyauw/portafolio",
    // },
    {
      projectName: "PanamaVacationSpot",
      tech: ["EJS", "Express.js", "Bootstrap", "MongoDB"],
      images: [pvc_1, pvc_2, pvc_3],
      description:
        "Mi primer proyecto fullstack, sitio web de turismo en Panamá que ofrece información sobre destinos turísticos, actividades y alojamientos. Permite a los usuarios explorar y planificar sus viajes de manera fácil y atractiva.",
      repoLink: "https://github.com/Yyauw/PanamaVacationSpot",
      siteLink: "https://panamavacationspot.onrender.com/",
    },
    {
      projectName: "PanamaBeerClub",
      tech: ["Next.js", "MongoDB", "Stripe"],
      images: [pbc_1, pbc_2, pbc_3, pbc_4, pbc_5],
      description:
        "PanamaBeerClub es un comercio electrónico de venta de cerveza artesanal ajustado a tus gustos completamente funcional que cuenta con pasarela de pago con la integración de Stripe y también cuenta con un sistema automatizado de inventario.",
      repoLink: "https://github.com/Yyauw/panamabeerclub",
      siteLink: "",
    },
    {
      projectName: "QSoftMetrics",
      tech: ["React.js", "Tailwind.css", "SQL", "Express.js"],
      images: [qsoft_1, qsoft_2, qsoft_3],
      description:
        "Aplicación web pensada para ayudar a los QA en evaluar la calidad de un software basándose en el ISO25010. Cuenta con graficos de pastel y con datos estadisticos para facilitar la visualización de los resultados.",
      repoLink: "https://github.com/Yyauw/QSoftMetrics",
      siteLink: "",
    },
    {
      projectName: "Mspos",
      tech: ["React.js", "Tailwind.css", "SQL", "Express.js"],
      images: [mspos_1, mspos_2, mspos_3],
      description:
        "sistema de punto de venta (POS) desarrollado completamente desde cero con React, Express y SQL con el propósito de ofrecer una solución moderna, rápida y confiable para la gestión de ventas en negocios pequeños y medianos que necesitan un flujo de trabajo eficiente y una interfaz fácil de usar.",
      repoLink: "https://github.com/Yyauw/ms_pos",
      siteLink: "",
    },
  ];

  return (
    <section className="pt-[8vh]" id="proyectos">
      <h1 className="text-4xl tracking-wider text-center  font-bold dark:text-white">
        Proyectos
      </h1>
      <h2 className="text-2xl tracking-wider text-center  font-bold text-blue-500 italic">
        De la idea al código
      </h2>
      <div className="p-2 md:px-20">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            tech={project.tech}
            images={project.images}
            description={project.description}
            repoLink={project.repoLink}
            siteLink={project.siteLink}
          />
        ))}
      </div>
    </section>
  );
}
