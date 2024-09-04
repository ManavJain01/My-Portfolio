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
import data from '@/Data/api.json'

function Connect({ darkTheme }){
  return (
    <div className={`flex flex-col gap-5 text-center py-20`}>
      {/* General Information */}
      <div className="flex flex-col items-start gap-2 text-xl font-semibold mb-10">
        <p className="hover:text-gray-500">{data["my info"]["personal info"]?.address}</p>
        <p className="hover:text-gray-500">{data["my info"]["personal info"]?.phone[0]}</p>
        <p className="hover:text-gray-500">{data["my info"]["personal info"]?.phone[1]}</p>
        <p className="hover:text-gray-500">{data["my info"]["personal info"]?.email[0]}</p>
      </div>

      {/* Let's Chat */}
      <span className="text-6xl font-bold">Let's Chat</span>
      
      <section className="flex flex-col gap-2 text-lg font-semibold">
        <span>Wanna get ahold of me? Just fill out the form below, or shoot us an email at </span>
        <span>{data["my info"]["personal info"]?.email[0]}</span>
      </section>
      
      <ContactForm />

      {/* Let's be social */}
      <motion.div whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y:100}} transition={{duration: 0.5}} className="flex flex-col gap-2 items-center">
        <p before="Let's be social" className="transition ease-in-out delay-150 hover:-translate-y-1 text-4xl font-bold hover:bg-gradient-to-r hover:from-pink-500 hover:via-white hover:to-yellow-600 hover:text-transparent bg-clip-text">Let's be social</p>

        <section className="flex gap-5">
          <Link to={data["my info"]?.social?.instagram}> <FaInstagram className="w-8 h-8 text-gray-500 hover:text-pink-400 cursor-none" /></Link>
          <Link to={data["my info"]?.social?.linkedin}><FaLinkedin className="w-8 h-8 text-gray-500 hover:text-blue-700 cursor-none" /></Link>
          <Link to={data["my info"]?.social?.github}><FaGithub className={`w-8 h-8 text-gray-500 ${darkTheme ? "hover:text-white" : "hover:text-black"} cursor-none`} /></Link>
          <Link to={data["my info"]?.social?.leetcode}><SiLeetcode className="w-8 h-8 text-gray-500 hover:text-yellow-600 cursor-none" /></Link>
        </section>
      </motion.div>
    </div>
  )
}

export default Connect