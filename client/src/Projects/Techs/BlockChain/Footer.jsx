// Importing React Icons
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Importing React Packages
import { Link } from 'react-router-dom';

// Importing local files
import data from '@/Data/api.json';

export default function Footer() {
  return (
    <nav className="flex gap-8 flex-wrap justify-around p-9 overflow-x-hidden">
        <ul>
          <h1 className="tracking-wider font-semibold text-3xl">Manav Jain</h1>
          <li>{data["my info"]?.field}</li>
          <li className="text-2xl mt-5 hover:border-y-2 border-[#b8860b]"><Link to={data["my info"]?.portfolio}>My Portfolio</Link></li>
        </ul>

        <ul className="flex flex-col gap-3 items-center">
          <li className="font-semibold text-2xl border-b">Projects</li>
          <li><Link to={data?.projects["Reactjs Projects"]?.link} className="hover:border-y-2 border-[#b8860b]">React Projects</Link></li>
          <li><Link to={data?.projects["Vanilla Projects"]?.link} className="hover:border-y-2 border-[#b8860b]">Vanilla Projects</Link></li>
          <li><Link to={data["my info"]?.allProjects} className="hover:border-y-2 border-[#b8860b]">More Projects</Link></li>
        </ul>

        <ul className="flex flex-col gap-3 items-center">
          <li className="font-semibold text-2xl border-b">Let's be social</li>
          <li className="flex gap-3 justify-around w-full">
            <Link to={data["my info"]?.social?.github}><FaGithub className="size-8 hover:text-white" /></Link>
            <Link to={data["my info"]?.social?.instagram}><FaInstagram className="size-8 hover:text-pink-600" /></Link>
            <Link to={data["my info"]?.social?.linkedin}><FaLinkedin className="size-8 hover:text-blue-600" /></Link>
          </li>
        </ul>
      </nav>
  )
}