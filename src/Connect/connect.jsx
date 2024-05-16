// Importing React Icons
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

// Importing React Packages
import { Link } from "react-router-dom";

// Importing Local files
import ContactForm from "./ContactForm";

function Connect(connect){
  return (
    <div className="flex flex-col gap-5 text-center">
      <span className="text-6xl font-bold">Let's Chat</span>
      
      <section className="flex flex-col gap-2 text-lg font-semibold">
        <span>Wanna get ahold of me? Just fill out the form below, or shoot us an email at </span>
        <span>Nit474011gwl@gmail.com</span>
      </section>
      
      <ContactForm />

      <div className="flex flex-col gap-2 items-center">
        <p className="text-4xl font-bold">Let's be social</p>

        <section className="flex gap-5">
          <Link to="https://www.instagram.com/manv_jain/"><FaInstagram className="w-8 h-8 text-black hover:text-pink-400" /></Link>
          <Link to="https://in.linkedin.com/in/manav-jain-02a54824a"><FaLinkedin className="w-8 h-8 text-black hover:text-blue-700" /></Link>
          <Link to="https://github.com/manavjain01"><FaGithub className="w-8 h-8 text-black hover:text-white" /></Link>
          <Link to="https://leetcode.com/u/nit47401t2c/"><SiLeetcode className="w-8 h-8 text-black hover:text-yellow-600" /></Link>

        </section>
      </div>
    </div>
  )
}

export default Connect;