'use client'
import { motion } from "framer-motion"

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay:0.5,
      staggerChildren: 0.1,
    },
  },
}
const singleWord = {
  initial: {
    opacity: 0,
    y:50,
  },
  animate: {
    opacity: 1,
    y:0,
    transition: {
      duration: 1,
    },
  },
}


const AnimatedTextComponent = ({text, className=''}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      <motion.h1 className={`inline-block w-full text-dark font-bold capitalize ${className}`} variants={quote} initial='initial' animate='animate'>
        {
        text.split(' ').map((word, index) => 
          <motion.span key={word+'-'+index} className="inline-block" variants={singleWord} >
            {word}&nbsp;
          </motion.span>
        )
        }
      </motion.h1>
    </div>
  )
}

export default AnimatedTextComponent;