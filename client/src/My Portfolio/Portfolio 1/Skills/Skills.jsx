// Importing React Icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { IoLogoNpm } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiBlockchaindotcom } from "react-icons/si";

// Importing Framer Motion
import { motion } from "framer-motion"

function Skills(){
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  })

  return (
    <div className={`flex flex-col gap-20 py-20 pb-96`}>
      {/* What I Do */}
      <div className="flex items-center gap-5">
        <motion.img
          src="https://media4.giphy.com/media/ZFiBmGVClrgxt02N9X/source.gif"
          alt="gif"
          whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:-100}} transition={{duration: 0.5}}
          className="hidden lg:flex h-full w-[35rem]" />
        
        <div className="flex flex-col gap-10">
          {/* What I Do */}
          <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:100}} transition={{duration: 0.5, delay: 0.2}} className="text-6xl font-semibold">What I do</motion.p>

          {/* A single line */}
          <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className="text-2xl">CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</motion.p>

          {/* Icons */}
          <motion.section whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1, delay:0.3}} className="text-gray-500 flex gap-5 flex-wrap">
            <motion.span variants={iconVariants(2.5)} initial="initial" animate="animate" className="flex flex-col items-center hover:text-orange-600"><FaHtml5 className="size-12" /> HTML</motion.span>
            <motion.span variants={iconVariants(5)} initial="initial" animate="animate" className="flex flex-col items-center hover:text-blue-700"><FaCss3Alt className="size-12" /> CSS</motion.span>
            <motion.span variants={iconVariants(2.5)} initial="initial" animate="animate" className="flex flex-col items-center hover:text-yellow-500"><IoLogoJavascript className="size-12" /> JavaScript</motion.span>
            <motion.span variants={iconVariants(5)} initial="initial" animate="animate" className="flex flex-col items-center hover:text-blue-600"><RiReactjsFill className="size-12" /> ReactJs</motion.span>
            <motion.span variants={iconVariants(2.5)} initial="initial" animate="animate" className="flex flex-col items-center hover:text-blue-800"><SiTypescript className="size-12" /> TypeScript</motion.span>
            <motion.span variants={iconVariants(5)} initial="initial" animate="animate" className="flex flex-col items-center hover:text-gray-900"><RiNextjsFill className="size-12" /> NextJs</motion.span>
            <motion.span variants={iconVariants(2.5)} initial="initial" animate="animate" className="flex flex-col items-center hover:text-green-500"><DiNodejs className="size-12" /> NodeJs</motion.span>
            <motion.span variants={iconVariants(5)} initial="initial" animate="animate" className="flex flex-col items-center hover:text-red-700"><IoLogoNpm className="size-12" /> npm</motion.span>
            <motion.span variants={iconVariants(2.5)} initial="initial" animate="animate" className="flex flex-col items-center hover:text-green-700"><DiMongodb className="size-12" /> MongoDB</motion.span>
            <motion.span variants={iconVariants(5)} initial="initial" animate="animate" className="flex flex-col items-center hover:text-orange-400"><FaAws className="size-12" /> aws</motion.span>
            <motion.span variants={iconVariants(2.5)} initial="initial" animate="animate" className="flex flex-col items-center hover:text-yellow-500"><IoLogoFirebase className="size-12" /> Firebase</motion.span>
            <motion.span variants={iconVariants(5)} initial="initial" animate="animate" className="flex flex-col items-center hover:text-blue-700"><SiBlockchaindotcom className="size-12" /> BlockChain</motion.span>
          </motion.section>

          {/* ⚡ Content */}
          <section className="text-semibold text-2xl">
            <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1, delay:0.3}}>⚡ Develop highly interactive Front end / User Interfaces for your web applications</motion.p>

            <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1, delay:0.4}}>⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks</motion.p>

            <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1, delay:0.5}}>⚡ Integration of third party services such as Firebase/ AWS</motion.p>
          </section>
        </div>
      </div>

      {/* Proficiency */}
      <div className="flex gap-10">
        <div className="flex-1 flex flex-col gap-10">
          {/* Headline */}
          <h1 className="text-6xl font-semibold">Proficiency</h1>

          {/* These are percentage divs */}
          <section className="flex flex-col gap-5">
            <span className="text-2xl">Frontend/Design</span>
            <span className={`bg-white h-6 w-full rounded-full relative before:absolute before:top-0 before:content-[''] before:h-6 before:w-[90%] before:bg-green-400 before:rounded-r-full`} />
          </section>

          {/* These are percentage divs */}
          <section className="flex flex-col gap-5">
            <span className="text-2xl">Backend</span>
            <span className={`bg-white h-6 w-full rounded-full relative before:absolute before:top-0 before:content-[''] before:h-6 before:w-[70%] before:bg-green-400 before:rounded-r-full`} />
          </section>

          {/* These are percentage divs */}
          <section className="flex flex-col gap-5">
            <span className="text-2xl">Programming</span>
          <span className={`bg-white h-6 w-full rounded-full relative before:absolute before:top-0 before:content-[''] before:h-6 before:w-[50%] before:bg-green-400 before:rounded-r-full`} />          
          </section>
        </div>  

        <img
          src="https://syndrometech.net/wp-content/uploads/2020/12/Digital-Transformation-and-Automation_Syndrome_N.gif"
          alt="gif"
          className="hidden lg:flex w-[35rem]" />
      </div>
    </div>
  )
}

export default Skills