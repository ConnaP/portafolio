"use client";
import { motion } from "framer-motion";

import "@/components/Css/ProjectsComponent.css";
import Image from "next/image";

const ProjectsComponent = () => {
  const projectsImage = [
    {
      img: "/assets/melt-pizza.png",
      url: "https://www.figma.com/proto/sZgldrJTKIoaB8BvNXkAtH/Proyecto-5-Seguimiento-en-l%C3%ADnea?node-id=38-673&t=tZObXfGe6yVQKhIC-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=38%3A673",
      git: "https://www.figma.com/design/sZgldrJTKIoaB8BvNXkAtH/Proyecto-5-Seguimiento-en-l%C3%ADnea?node-id=82-44&t=AAQYg30QeMOwoRnK-0",
      title: "Seguimiento en línea Melt Pizza",
      text: "Imagina saber exactamente dónde está tu pizza en cada momento del proceso, desde que sale del horno hasta que llega a tu puerta. Presentamos el nuevo sistema de seguimiento en línea de pedidos de Melt Pizza, diseñado para ofrecer una experiencia de usuario fluida, intuitiva y confiable. Este sistema proporciona actualizaciones en tiempo real, notificaciones automáticas y una interfaz clara, permitiendo a los usuarios seguir cada etapa de su pedido con total transparencia y comodidad.",
    },
  ];

  const leftInitial = {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 3,
      },
    },
  };

  return (
    <>
      <motion.div initial="initial" animate="animate" variants={leftInitial}>
        <div className="container-project">
          {projectsImage.map((p, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 container-card"
            >
              <a href={p.url}>
                <Image
                  width={400}
                  height={400}
                  className="rounded-t-lg"
                  src={p.img}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {p.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {p.text}
                </p>
                <div className="row">
                  <div className="col">
                    <a
                      href={p.git}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Prototipo Figma
                      <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://drive.google.com/file/d/1cLG_WU621nxKteQtzqlPJNdBr4YH9FW4/view?usp=drive_link"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Presentación
                      <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectsComponent;
