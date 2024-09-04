// Importing React Icons
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";

// Importing React Packages
import { Link } from "react-router-dom";

// Importing Local files
import data from '@/Data/api.json'

export default function Footer({data}) {
  return (
    <nav id="footer-java" className="flex gap-10 items-center justify-around min-h-44 p-5">
      <ul className="flex flex-col items-center gap-1">
        <li className="text-4xl">{data['my info']?.name || "Manav Jain"}</li>
        <li>{data['my info']?.field}</li>
        <li className="text-2xl hover:underline"><a href={data['my info'].portfolio}>My Portfolio</a></li>
      </ul>

      <ul className="flex flex-col items-center gap-1">
        <li className="text-4xl">Projects</li>
        <li><Link to={data?.projects["Vanilla Projects"]?.link}>HTML/CSS/JS Projects</Link></li>
        <li><Link to={data?.projects["Reactjs Projects"]?.link}>React Projects</Link></li>
        <li><Link to={data["my info"]?.allProjects}>More Projects</Link></li>
      </ul>

      <ul>
        <li className="text-2xl">Let's be social</li>
        <li className="flex justify-between">
          <Link to={data['my info']?.social?.github}><FaGithub className="size-8" /></Link>
          <Link to={data['my info']?.social?.linkedin}><CiLinkedin className="size-8" /></Link>
          <Link to={data['my info']?.social?.leetcode}><SiLeetcode className="size-8" /></Link>
        </li>
      </ul>
    </nav>
  )
}