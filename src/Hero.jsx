import { motion, useScroll } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
    const[open,setOpen]=useState(false);
    const[open2,setOpen2]=useState(false);
    
    const display=()=>{
setOpen(true)
    }
    const list=()=>{
        setOpen2(!open2)
    }
    const circle={
        hover:{
       scale:1.1, 
    transition:{
        repeat:Infinity

        }
    
    }
    }
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}}  exit={{x:'-100vw'}} transition={{delay:.5,duration:1.5,type:'tween'}} className='min-h-[100vh] text-white bg-gradient-to-t from-violet-900 via-black to-black p-5 w-full flex flex-col items-center justify-center'>
<motion.div drag dragElastic={.5} dragConstraints={{left:0,bottom:0,top:0,right:0}} variants={circle} whileHover='hover' className='h-5 w-5 rounded-full p-5 bg-gradient-to-b from-pink-400 to-violet-800'></motion.div>
    <motion.h1 className='font-bold text-[30px]' initial={{opacity:0,y:-30}} animate={{opacity:1,y:-10}} transition={{delay:1,type:'spring',stiffness:8}}>
        Hello my name is sid
    </motion.h1>
 <motion.p className='font-bold text-violet-700' onClick={display} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5,duration:2}} style={{cursor:'pointer'}}>   I'm Siddharth</motion.p> 
    <motion.div style={{padding:'2px'}}>   
   {open?<motion.button onClick={list} initial={{x:-1200}} animate={{x:-0}} transition={{delay:.5,duration:.2,damping:5}} className='font-medium shadow-blue-800 shadow-xl rounded p-1 mt-3 bg-gradient-to-b from-blue-800 to-blue-400 shadow'>View {open2?'Less':'More'}</motion.button>:""}
<div>
    {open2?<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5,damping:.9,staggerChildren:.5}}>
        <motion.li whileHover={{scale:1.1}}><Link to={'Project1'}>Project1</Link></motion.li>
        <motion.li whileHover={{scale:1.1}}><Link to={'Project1'}>Project1</Link></motion.li>
        <motion.li whileHover={{scale:1.1}}><Link to={'Project1'}>Project1</Link></motion.li>
        <motion.li whileHover={{scale:1.1}}><Link to={'Project1'}>Project1</Link></motion.li>

        
        
        </motion.div>:""}
</div>

</motion.div>

    </motion.div>
  )
}

export default Hero