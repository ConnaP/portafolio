"use client";
import { motion } from "framer-motion";

import '@/components/Css/ProjectsComponent.css'
import Image from "next/image";

const ProjectsComponent = () => {
  const projectsImage = [
    {
      img: "/assets/01-ecommerce.png",
      url: "https://sparkling-youtiao-0cfe9b.netlify.app/",
      git: "https://github.com/ConnaP/ecommerce-front",
      title: "Ecommerce",
      text: "Descubre la moda desde tu dispositivo con nuestra aplicación de venta de ropa. Explora una amplia gama de estilos, desde lo casual hasta lo elegante, con fotos de alta calidad. Realiza compras seguras y recibe envíos rápidos. Descarga la aplicación y viste con confianza en cada ocasión."
    },
    {
      img: "/assets/02-restaurant.png",
      url: "/",
      git: "https://github.com/ConnaP/Proyecto-Restaurant-App",
      title: "Restaurant",
      text: "Descubre una experiencia gastronómica sin igual desde la comodidad de tu dispositivo. Explora una amplia variedad de restaurantes de alta calidad y deliciosas cocinas, desde platos tradicionales hasta creaciones culinarias innovadoras."
    },
    {
      img: "/assets/03-crud.png",
      url: "https://connap.github.io/proyecto-crud/",
      git: "https://github.com/ConnaP/proyecto-crud",
      title: "Crud",
      text: "Bienvenido a nuestra sencilla pero poderosa aplicación con operaciones CRUD. Nuestra aplicación está diseñada para hacer que la gestión de datos sea rápida y eficiente"
    },
    {
      img: "/assets/04-shop.png",
      url: "https://connap.github.io/proyecto-crud/",
      git: "https://github.com/ConnaP/proyecto-pagina-web",
      title: "Shop",
      text: "Bienvenido a la mejor experiencia de compra de zapatillas! Nuestra aplicación te trae la última moda en calzado directamente a tus manos. Explora una amplia colección de zapatillas de todas las marcas, estilos y tallas"
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
      <motion.div
        initial="initial"
        animate="animate"
        variants={leftInitial}
      >
        <div className="container-project">
          {projectsImage.map((p, index) => (
            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 container-card">
              <a href={p.url}>
                <Image className="rounded-t-lg" src={p.img} alt="" />
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
                <a
                  href={p.git}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Repositorio
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
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectsComponent;
