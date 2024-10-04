// Importing React Icons
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Importing React Packages
import { Link } from 'react-router-dom';

// Importing local files
import data from '@/Data/api.json';

export default function Footer() {
  return (
    <nav className="group text-white bg-gradient-to-r from-purple-600 via-blue-800 to-sky-900 flex gap-8 flex-wrap justify-center p-9 animate-meta_colorMorph duration-500 overflow-x-hidden">
      <ul>
        <h1 className="tracking-wider font-semibold text-3xl">Manav Jain</h1>
        <li>{data["my info"]?.field}</li>
        <li className="text-2xl mt-5 hover:border-b-2"><Link to={data["my info"]?.portfolio}>My Portfolio</Link></li>
      </ul>

      <ul className="flex flex-col gap-3 items-center">
        <li className="font-semibold text-2xl border-b">Projects</li>
        <li><Link to={data?.projects["Vanilla Projects"]?.link}>HTML/CSS/JS Projects</Link></li>
        <li><Link to={data?.projects["Reactjs Projects"]?.link}>React Projects</Link></li>
        <li><Link to={data["my info"]?.allProjects}>More Projects</Link></li>
      </ul>

      <ul className="flex flex-col gap-3 items-center">
        <li className="font-semibold text-2xl border-b">Let's be social</li>
        <li className="flex gap-3">
          <Link to={data["my info"]?.social?.github}><FaGithub className="size-6" /></Link>
          <Link to={data["my info"]?.social?.instagram}><FaInstagram className="size-6" /></Link>
          <Link to={data["my info"]?.social?.linkedin}><FaLinkedin className="size-6" /></Link>
        </li>
      </ul>
    </nav>
  )
}