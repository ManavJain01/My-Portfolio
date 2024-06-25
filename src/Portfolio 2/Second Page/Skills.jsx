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

// Importing local files
import MagneticButton from '../Common Components/MagneticButton'

export default function Skills() {
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
    <div className="min-h-lvh pt-28 flex flex-col gap-10 items-center">
      <h1 className="text-4xl font-bold">Skills</h1>

      {/* Icons */}
      <motion.section whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1.5, delay:0.3}} className="text-gray-500 flex gap-10 flex-wrap">
        <MagneticButton><motion.span className="flex flex-col items-center hover:text-orange-600"><FaHtml5 className="size-12" /> HTML</motion.span></MagneticButton>
        <MagneticButton><motion.span className="flex flex-col items-center hover:text-blue-700"><FaCss3Alt className="size-12" /> CSS</motion.span></MagneticButton>
        <MagneticButton><motion.span className="flex flex-col items-center hover:text-yellow-500"><IoLogoJavascript className="size-12" /> JavaScript</motion.span></MagneticButton>
        <MagneticButton><motion.span className="flex flex-col items-center hover:text-blue-600"><RiReactjsFill className="size-12" /> ReactJs</motion.span></MagneticButton>
        <MagneticButton><motion.span className="flex flex-col items-center hover:text-blue-800"><SiTypescript className="size-12" /> TypeScript</motion.span></MagneticButton>
        <MagneticButton><motion.span className="flex flex-col items-center hover:text-gray-900"><RiNextjsFill className="size-12" /> NextJs</motion.span></MagneticButton>
        <MagneticButton><motion.span className="flex flex-col items-center hover:text-green-500"><DiNodejs className="size-12" /> NodeJs</motion.span></MagneticButton>
        <MagneticButton><motion.span className="flex flex-col items-center hover:text-red-700"><IoLogoNpm className="size-12" /> npm</motion.span></MagneticButton>
        <MagneticButton><motion.span className="flex flex-col items-center hover:text-green-700"><DiMongodb className="size-12" /> MongoDB</motion.span></MagneticButton>
        <MagneticButton><motion.span className="flex flex-col items-center hover:text-orange-400"><FaAws className="size-12" /> aws</motion.span></MagneticButton>
        <MagneticButton><motion.span className="flex flex-col items-center hover:text-yellow-500"><IoLogoFirebase className="size-12" /> Firebase</motion.span></MagneticButton>
        <MagneticButton><motion.span className="flex flex-col items-center hover:text-blue-700"><SiBlockchaindotcom className="size-12" /> BlockChain</motion.span></MagneticButton>
      </motion.section>
    </div>
  )
}