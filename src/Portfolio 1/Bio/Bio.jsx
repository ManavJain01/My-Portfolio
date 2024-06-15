// Importing React Icons
import { FaDownload } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

// Importing Local Files
import Education from './Education'

// Importing React Packages
import { forwardRef } from 'react';

// Importing Framer Motion
import { motion } from "framer-motion"

function Bio(props, ref){
  // Creating Scroll Handler 
  const scrollHandler = (elemRef) => {
    window.scrollTo({ top: elemRef.current.offsetTop, behaviour: "smooth" })
  }

  return (
    <div className={`${props.darkTheme ? "text-white" : "text-black"} flex flex-col gap-20 py-48 pb-96`}>
      {/* Introduction */}
      <div className="flex flex-col items-center gap-10">
        {/* My Name */}
        <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:-100}} transition={{duration: 1}} className="flex items-center gap-2 md:gap-5">
          <span className="text-6xl font-semibold text-center">Hi all, I'm Manav</span>
          <img
            src="https://gifdb.com/images/high/cute-wave-emoji-hand-59s88kk0zj3xho40.webp"
            alt="gif"
            className="size-12" />
        </motion.p>

        {/* Content */}
        <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:-100}} transition={{duration: 1, delay: 0.2}} className="text-2xl">A passionate Full Stack Developer 🚀 having an experience of building Web applications with Javascript / Reactjs / NodeJs and some other cool libraries and frameworks.</motion.p>

        {/* 2 Buttons */}
        <motion.section whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:-100}} transition={{duration: 1, delay: 0.5}} className="w-full flex gap-5 justify-between items-center flex-wrap">
          <button onClick={() => scrollHandler(ref.connect)} className="bg-purple-800 font-semibold text-xl flex gap-5 items-center py-2 px-3 rounded-lg hover:bg-transparent hover:text-purple-800">
            Contact Me
            <LuExternalLink />
          </button>
          <a href="../../Resume/resume.txt" download="My Resume" className="bg-purple-800 font-semibold text-xl flex gap-5 items-center py-2 px-3 rounded-lg hover:bg-transparent hover:text-purple-800">
            Download My Resume
            <FaDownload />
          </a>
        </motion.section>
      </div>

      {/* Education */}
      <div className="flex flex-col gap-10">
        <motion.h1 whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:-100}} transition={{duration: 1}} className="text-6xl font-semibold">Education</motion.h1>
        <Education />
      </div>

    </div>
  )
}

export default forwardRef(Bio)