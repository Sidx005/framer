import { AnimatePresence, delay, motion } from 'framer-motion'
import { stagger } from 'framer-motion/dom'
import React, { useEffect, useState } from 'react'
// motion
const Project1 = () => {
    const containvarients={
        hidden:{
        opacity:0,
        y:-10000 
        },
        visible:{
            opacity:1,
            y:0,
            transition:{       
                     type:'spring',

                delay:.5,
                // duration:1,
                mass:.4,
                damping:8,
                staggerChildren:.4,

                when:"beforeChildren"
            }
        }
    }
    const child={
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                delay:.5,
            }
        }
    }
    const[showTitle,setTitle]=useState(true)
   useEffect(()=>{ setTimeout(()=>{
        setTitle(false)
    },4000)},[])
  return (
    <motion.div  exit={{opacity:0}} transition={{delay:.5,duration:1.5}} className='min-h-[100vh] text-white bg-gradient-to-t from-violet-900 via-black to-black p-5 w-full flex flex-col items-center justify-center'>
       <AnimatePresence>{showTitle && (<motion.h2 exit={{y:'-1000px'}}>Thank You for visiting</motion.h2>)}</AnimatePresence> 
    <motion.div variants={containvarients} initial="hidden" animate="visible">Project1
    <motion.p variants={child}>Welcome</motion.p>
    </motion.div>
    </motion.div>
  )
}

export default Project1