"use client";
import { motion } from "framer-motion";
import "@/components/Css/AnimatedSkillsComponent.css";
import Image from "next/image";

const AnimatedSkillsComponent = () => {
  const skillsImage = [
    "/assets/skills-html.png",
    "/assets/skills-css.png",
    "/assets/skills-js.png",
    "/assets/skills-boostrap.png",
    "/assets/skills-reactjs.png",
    "/assets/skills-nextjs.png",
    "/assets/skills-tailwind.png",
    "/assets/skills-frameemotion.png",
    "/assets/skills-nodejs.png",
    "/assets/skills-express.png",
    "/assets/skills-mongodb.png",
    "/assets/skills-firebase.png",
  ];

  const leftInitial = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      rotate: 360,
      scale: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <div className="flex flex-wrap container-p items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500">
      {skillsImage.map((img, index) => (
        <motion.div
          key={index}
          className="flex-initial w-52 h-52"
          initial="initial"
          animate="animate"
          variants={leftInitial}
        >
          <a className="flex" href="#">
            <div className="overflow-hidden aspect-video cursor-pointer rounded-xl relative group w-52 h-52 container-image">
              <Image
                alt=""
                className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out img-skill"
                src={img}
              />
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedSkillsComponent;
