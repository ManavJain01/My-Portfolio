// Importing React Icons
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

// Importing React Packages
import { Link } from "react-router-dom";

// Importing Framer Motion
import { motion } from "framer-motion"

// Importing Local files
import ContactForm from "./ContactForm";

function Connect({ darkTheme }){
  return (
    <div className={`${darkTheme ? "text-white" : "text-black"} flex flex-col gap-5 text-center py-20`}>
      {/* General Information */}
      <div className="flex flex-col items-start gap-2 text-xl font-semibold mb-10">
        <p className="hover:text-gray-500">Gwalior, India</p>
        <p className="hover:text-gray-500">+91-8269-543-303</p>
        <p className="hover:text-gray-500">+91-9171-678-303</p>
        <p className="hover:text-gray-500">Nit474011gwl@gmail.com</p>
      </div>

      {/* Let's Chat */}
      <span className="text-6xl font-bold">Let's Chat</span>
      
      <section className="flex flex-col gap-2 text-lg font-semibold">
        <span>Wanna get ahold of me? Just fill out the form below, or shoot us an email at </span>
        <span>Nit474011gwl@gmail.com</span>
      </section>
      
      <ContactForm darkTheme={darkTheme} />

      {/* Let's be social */}
      <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:-100}} transition={{duration: 1}} className="flex flex-col gap-2 items-center">
        <p before="Let's be social" className="transition ease-in-out delay-150 hover:-translate-y-1 text-4xl font-bold hover:bg-gradient-to-r hover:from-pink-500 hover:via-white hover:to-yellow-600 hover:text-transparent bg-clip-text">Let's be social</p>

        <section className="flex gap-5">
          <Link to="https://www.instagram.com/manv_jain/"> <FaInstagram className="w-8 h-8 text-gray-500 hover:text-pink-400 cursor-none" /></Link>
          <Link to="https://in.linkedin.com/in/manav-jain-02a54824a"><FaLinkedin className="w-8 h-8 text-gray-500 hover:text-blue-700 cursor-none" /></Link>
          <Link to="https://github.com/manavjain01"><FaGithub className={`w-8 h-8 text-gray-500 ${darkTheme ? "hover:text-white" : "hover:text-black"} cursor-none`} /></Link>
          <Link to="https://leetcode.com/u/nit47401t2c/"><SiLeetcode className="w-8 h-8 text-gray-500 hover:text-yellow-600 cursor-none" /></Link>
        </section>
      </motion.div>
    </div>
  )
}

export default Connect