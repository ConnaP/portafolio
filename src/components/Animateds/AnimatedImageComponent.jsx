"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AnimatedImageComponent = ({
  urlImage,
  widthImage,
  heightIamge,
  className = "",
}) => {
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
        className={`${className}`}
      >
        <Image
          className="rounded-full"
          src={urlImage}
          width={widthImage}
          height={heightIamge}
          alt="Picture of the author"
        />
      </motion.div>
    </>
  );
};

export default AnimatedImageComponent;
