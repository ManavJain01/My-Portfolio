// Importing React Icons
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

// Importing React Packages
import { Link } from 'react-router-dom';

// Importing local files
import './cube.css';
import data from '../../../Data/api.json'

export default function Cube() {
  return (
    <div className="container">
      <div className="side front flex items-center justify-center">
        <div className="group bg-sky-500 flex items-center justify-center w-48 h-48 rounded-full transform transition-all duration-700 ease-in-out hover:meta_clipPath-diamond hover:scale-125">
          <span className="hidden group-hover:block">MetaMorphism</span>
        </div>
      </div>
      <div className="side back"></div>
      {/* Image */}
      <div className="side right">
        <img src={data["my info"].img} alt="dp" />
      </div>
      {/* Personal Info */}
      <div className="side left flex flex-col items-center justify-center">
        <h1 className="tracking-wider font-semibold text-3xl">Manav Jain</h1>
        <p>{data["my info"]?.field}</p>
        <p className="text-2xl mt-5 hover:border-b-2"><Link to={data["my info"]?.portfolio}>My Portfolio</Link></p>
      </div>
      {/* Projects section */}
      <div className="side top flex flex-col items-center justify-around">
        <p className="font-semibold text-2xl border-b">Projects</p>
        <Link to={data?.projects["Vanilla Projects"]?.link}>HTML/CSS/JS Projects</Link>
        <Link to={data?.projects["Reactjs Projects"]?.link}>React Projects</Link>
        <Link to={data["my info"]?.allProjects}>More Projects</Link>
      </div>
      {/* Profile links */}
      <div className="side bottom flex flex-col flex-wrap items-center justify-around gap-10 p-5">
        <Link to={data["my info"]?.social?.github}><FaGithub className="size-6 hover:text-black" /></Link>
        <Link to={data["my info"]?.social?.instagram}><FaInstagram className="size-6 hover:text-pink-600" /></Link>
        <Link to={data["my info"]?.social?.linkedin}><FaLinkedin className="size-6 hover:text-blue-600" /></Link>
        <Link to={data["my info"]?.social?.leetcode}><SiLeetcode className="size-6 hover:text-yellow-500" /></Link>
        <Link to={data["my info"]?.social?.gfg}><SiGeeksforgeeks className="size-6 hover:text-green-700" /></Link>
      </div>
    </div>
  )
}