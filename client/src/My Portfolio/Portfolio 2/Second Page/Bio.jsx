// Importing React Icons
import { GiNextButton } from "react-icons/gi";
import { GiPreviousButton } from "react-icons/gi";

// Importing Local Images
import mine from './Images/mine1.jpeg'
import NITRR from './Images/NITRR1.jpg'
import gwalior from './Images/gwalior.jpeg'

// Importing react spring/Parallax
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { AnimatePresence, motion } from 'framer-motion'

// Importing react Packages
import { useEffect, useState } from 'react'

// Importing local files
import Education from './Education'
import MagneticButton from '../Common Components/MagneticButton'

export default function Bio({darkTheme}) {
  // Variables
  const Data = [mine, NITRR, gwalior]
  
  // UseStates
  const [FlowDirection, setFlowDirection] = useState(true)
  const [CenterId, setCenterId] = useState(0)
  const [LeftId, setLeftId] = useState(Data.length - 1)
  const [RightId, setRightId] = useState(1)

  useEffect(() => {
    
    const timerId = setInterval(() => nextBtn(), 3000)
      return () => clearInterval(timerId)
  });

  const nextBtn = () => {
    if (LeftId === Data.length - 1) {
      setLeftId(0)
    } else {
      setLeftId(LeftId + 1)
    }
    if (CenterId === Data.length - 1) {
      setCenterId(0)
    } else {
      setCenterId(CenterId + 1)
    }

    if (RightId === Data.length - 1) {
      setRightId(0)
    } else {
      setRightId(RightId + 1)
    }
    setFlowDirection(true)
  }
  const prevBtn = () => {
    setFlowDirection(false)
    if (LeftId === 0) {
      setLeftId(Data.length - 1)
    } else {
      setLeftId(LeftId - 1)
    }
    if (CenterId === 0) {
      setCenterId(Data.length - 1)
    } else {
      setCenterId(CenterId - 1)
    }
    if (RightId === 0) {
      setRightId(Data.length - 1)
    } else {
      setRightId(RightId - 1)
    }
  }

  const variants = {
    center: {
      x: '0rem',
      opacity: 1,
      scale: 2.5,
      zIndex: '5',
      filter: "brightness(100%)",
      backgroundImage: 'url(' + Data[CenterId] + ')',
      boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.3)',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    left: {
      x: '-6rem',
      opacity: 1,
      filter: "brightness(40%)",
      scale: 2.5,
      backgroundImage: 'url(' + Data[LeftId] + ')',
      zIndex: '4',
      boxShadow: 'none',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    right: {
      backgroundImage: 'url(' + Data[RightId] + ')',
      x: '6rem',
      opacity: 1,
      filter: "brightness(40%)",
      scale: 2.5,
      boxShadow: 'none',
      zIndex: '3',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    rightHidden: {
      x: '8rem',
      scale: 0,
      opacity: 0,
    },
    leftHidden: {
      x: '-8rem',
      scale: 0,
      opacity: 0,
    },
  }

  return (
    <div className="min-h-lvh px-10 flex flex-col gap-10 overflow-hidden">
      {/* Looping Message */}
      <div className={`flex gap-5 overflow-hidden whitespace-nowrap transition-all duration-1000 ${darkTheme ? "bg-purple-400" : "bg-white"}`}>
        <div className="mx-10 py-1 flex gap-5 items-center justify-around animate-loop-scroll">
          <img src="https://media4.giphy.com/media/ZFiBmGVClrgxt02N9X/source.gif" alt="working" className="w-10" />
          <button className="text-2xl text-green-400">Contact me</button>
          <button className="text-2xl text-green-400">Download my cv</button>
          <p className="text-xl text-blue-600 hidden md:block">"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."</p>
          <img src="https://syndrometech.net/wp-content/uploads/2020/12/Digital-Transformation-and-Automation_Syndrome_N.gif" alt="robot" className="h-8" />
        </div>
        {/* Repeating div */}
        <div aria-hidden="true" className="mx-10  py-1 flex gap-5 items-center justify-around animate-loop-scroll">
          <img src="https://media4.giphy.com/media/ZFiBmGVClrgxt02N9X/source.gif" alt="working" className="w-10" />
          <button className="text-2xl text-green-400">Contact me</button>
          <button className="text-2xl text-green-400">Download my cv</button>
          <p className="text-xl text-blue-600 hidden md:block">"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."</p>
          <img src="https://syndrometech.net/wp-content/uploads/2020/12/Digital-Transformation-and-Automation_Syndrome_N.gif" alt="robot" className="h-8" />
        </div>
      </div>

       {/* My Intro Section */}
      <div className="pt-28 flex flex-wrap-reverse xl:flex-nowrap">
        {/* Intro */}
        <div className="flex flex-col gap-5 items-start">
          <motion.h1 whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:-100}} transition={{duration: 1}} className="text-4xl font-bold">Hi all, I'm Manav</motion.h1>
          <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:-100}} transition={{duration: 1.5}} className="text-2xl">A passionate Full Stack Developer 🚀 having an experience of building Web applications with Javascript / Reactjs / NodeJs and some other cool libraries and frameworks.</motion.p>
        </div>

        {/* My Image Carousel */}
        <div className="xl:mr-[11rem] w-full hidden md:flex justify-center xl:justify-end">
          <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:100}} transition={{duration: 1.5}} className="grid place-content-center rounded-[2rem]">
            <div className="relative w-[10rem] h-[10rem]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={LeftId}
                  variants={variants}
                  initial={FlowDirection ? 'center' : 'leftHidden'}
                  animate="left"
                  exit={'leftHidden'}
                  className="absolute w-[10rem] h-[10rem] bg-cover bg-left bg-no-repeat rounded-[10rem]"
                ></motion.div>
                <motion.div
                  variants={variants}
                  key={CenterId}
                  initial={FlowDirection ? 'right' : 'left'}
                  animate="center"
                  className="absolute w-[10rem] h-[10rem] bg-cover bg-left bg-no-repeat rounded-[10rem]"
                ></motion.div>
                <motion.div
                  key={RightId}
                  variants={variants}
                  initial={FlowDirection ? 'rightHidden' : 'center'}
                  animate="right"
                  exit={'rightHidden'}
                  className="absolute w-[10rem] h-[10rem] bg-cover bg-left bg-no-repeat rounded-[10rem]"
                ></motion.div>
              </AnimatePresence>
            </div>

            {/* Buttons */}
            <div className="my-[2rem] flex justify-center gap-[1rem] z-[6]">
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  duration: 0.5,
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.8}}

                className="mt-[6rem] px-[8px] py-[15px] w-[5rem] rounded-[1rem] font-bold cursor-pointer border-0"
                onClick={prevBtn}
              >
                <MagneticButton><GiPreviousButton className="size-8" /></MagneticButton>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  duration: 0.5,
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.8}}
                className="mt-[6rem] px-[8px] py-[15px] w-[5rem] rounded-[1rem] font-bold cursor-pointer border-0"
                onClick={nextBtn}
              >
                <MagneticButton><GiNextButton className="size-8" /></MagneticButton>
              </motion.button>
            </div>
          </motion.div>
        </div>
        
      </div>
        
      {/* Education */}
      <Education />
    </div>

    // <Parallax pages={3}>
    //   {/* Setting Content */}
    //   <ParallaxLayer offset={0} speed={0.5}>
    //   </ParallaxLayer>

    //   <ParallaxLayer offset={1} speed={0.5}>
    //   </ParallaxLayer>

      
    //   <ParallaxLayer offset={2} speed={0.5}>
        
    //   </ParallaxLayer>
    // </Parallax>
  )
}