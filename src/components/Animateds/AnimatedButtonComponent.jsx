"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const AnimatedLinkComponent = ({ textButton, className = "" }) => {
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
        <Link
          className={className}
          href="/assets/docs/Curriculum.pdf"
          target={"_black"}
          download={true}
        >
          {textButton}
        </Link>
      </motion.div>
    </>
  );
};

export default AnimatedLinkComponent;
