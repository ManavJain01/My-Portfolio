// Importing React Packages
import { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Importing Local Files
import HCJIBM from '../../certificates/HTML-CSS-JS-IBM.png'
import ReactIBM from '../../certificates/React-IBM.png'
import BackEnd from '../../certificates/Node-Express-IBM.png'
import Github from '../../certificates/Github.png'
// import CloudIBM from '../../certificates/Cloud-Computing-IBM.png'
import Python from '../../certificates/Python for DS, AI & Dev-IBM.png'

// Importing Framer Motion
import { motion } from "framer-motion"

export default function Certificates({ darkTheme }) {
  // Array of Certificates
  const certiArr = [BackEnd, ReactIBM, Github, HCJIBM /*, CloudIBM, Python */]

  // UseStates
  const [selectCerti, setSelectCerti] = useState(BackEnd)

  // Carousel responsive
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className={`${darkTheme ? "text-white" : "text-black"} flex flex-col gap-20 py-20`}>
      {/* Certificates */}
      <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className="text-6xl font-semibold">Certificates</motion.h1>

      {/* Certificate */}
      <motion.img
        src={selectCerti}
        alt="ibm"
        whileInView={{opacity:1, scale:"100%"}} initial={{opacity:0, scale:0}} transition={{duration:1.5}}
        className={`hidden sm:flex h-[40rem] shadow-2xl ${darkTheme ? "shadow-purple-400" : "shadow-gray-400"}`} />

      {/* Carousal */}
      <Carousel responsive={responsive}>
      {
        certiArr.map((e, i) =>{
          return(
            <motion.img
              key={i}
              src={e}
              alt="ibm"
              onClick={() => setSelectCerti(e)}
              whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}}
              className={`h-72 w-80 shadow-2xl ${darkTheme ? "shadow-purple-400" : "shadow-gray-400"}`} />
          )
        })
      }
      </Carousel>
    </div>
  )
}