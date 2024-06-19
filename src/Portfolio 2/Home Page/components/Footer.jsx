// Importing React Icons
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

//Importing React Packages
import { Link } from "react-router-dom";

// Importing local files
import MagneticButton from '../../Common Components/MagneticButton'

export default function Footer() {
  return (
    <>
      <hr className="border-gray-200" />
      <div className="pb-5 flex flex-wrap gap-8 items-center justify-around">
        {/* Creating Projects Section */}
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="font-semibold text-2xl">Projects</p>
          <ul className="text-gray-400 flex flex-col items-center gap-3">
            <li><Link to="https://mern-projects-amber.vercel.app/">MERN Projects</Link></li>
            <li><Link to="https://manavjain01.github.io/BlockChain-Projects/MainFile/">BlockChain Projects</Link></li>
            <li><Link to="https://more-projects-page.vercel.app/">More Projects</Link></li>
          </ul>
        </div>
        
        {/* Creating CONNECT Seaction */}
        <div className="flex flex-col gap-3 items-center justify-center">
          <p className="font-semibold text-2xl">CONNECT</p>
          <section className="flex gap-5">
            <Link to="https://www.instagram.com/manv_jain/"><MagneticButton><FaInstagram className="w-8 h-8 text-gray-400" /></MagneticButton></Link>
            <Link to="https://in.linkedin.com/in/manav-jain-02a54824a"><MagneticButton><FaLinkedin className="w-8 h-8 text-gray-400" /></MagneticButton></Link>
            <Link to="https://github.com/manavjain01"><MagneticButton><FaGithub className="w-8 h-8 text-gray-400" /></MagneticButton></Link>
          </section>
        </div>
      </div>
    </>
  )
}