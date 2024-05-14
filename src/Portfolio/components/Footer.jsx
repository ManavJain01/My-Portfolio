// Importing React Icons
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

//Importing React Packages
import { Link } from "react-router-dom";

function Footer(){
  return (
    <div className="bg-black h-[30vh] w-[100vw] text-white flex justify-around px-10 py-5">
      <div className="flex flex-col justify-center gap-3">
        <p className="font-semibold text-2xl">Projects</p>
        <ul className="text-gray-400 flex flex-col gap-3">
          <li><Link to="https://mern-projects-amber.vercel.app/">MERN Projects</Link></li>
          <li><Link to="https://manavjain01.github.io/BlockChain-Projects/MainFile/">BlockChain Projects</Link></li>
          <li><Link to="https://more-projects-page.vercel.app/">More Projects</Link></li>
        </ul>
      </div>
      
      <div className="flex flex-col gap-3 items-center justify-center">
        <p className="font-semibold text-2xl">CONNECT</p>
        <section className="flex gap-5">
          <FaInstagram className="w-8 h-8 text-gray-400" />
          <FaLinkedin className="w-8 h-8 text-gray-400" />
          <FaGithub className="w-8 h-8 text-gray-400" />
        </section>
      </div>
    </div>
  )
}

export default Footer