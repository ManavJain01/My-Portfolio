// Importing React Icons
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

//Importing React Packages
import { Link } from "react-router-dom";

function Footer(){
  return (
    <div className="bg-black min-h-[30vh] w-[100vw] text-white flex justify-around items-center flex-wrap gap-8 px-10 py-5">
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="font-semibold text-2xl">Projects</p>
        <ul className="text-gray-400 flex flex-col items-center gap-3">
          <li><Link to="https://mern-projects-amber.vercel.app/">MERN Projects</Link></li>
          <li><Link to="https://manavjain01.github.io/BlockChain-Projects/MainFile/">BlockChain Projects</Link></li>
          <li><Link to="https://more-projects-page.vercel.app/">More Projects</Link></li>
        </ul>
      </div>
      
      <div className="flex flex-col gap-3 items-center justify-center">
        <p className="font-semibold text-2xl">CONNECT</p>
        <section className="flex gap-5">
          <Link to="https://www.instagram.com/manv_jain/"><FaInstagram className="w-8 h-8 text-gray-400" /></Link>
          <Link to="https://in.linkedin.com/in/manav-jain-02a54824a"><FaLinkedin className="w-8 h-8 text-gray-400" /></Link>
          <Link to="https://github.com/manavjain01"><FaGithub className="w-8 h-8 text-gray-400" /></Link>
        </section>
      </div>
    </div>
  )
}

export default Footer