// Importing React Icons
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";

// Importing React Packages
import { Link } from "react-router-dom";

export default function Footer({data}) {
  return (
    <nav id="footer-java" className="flex gap-10 items-center justify-around min-h-44 p-5">
      <ul className="flex flex-col items-center">
        <li className="text-4xl">{data['my info'].name}</li>
        <li>{data['my info'].field}</li>
        <li className="text-2xl hover:underline"><a href={data['my info'].portfolio}>My Portfolio</a></li>
      </ul>

      <ul className="flex flex-col items-center">
        <li className="text-4xl">Projects</li>
        <li><a href="https://manavjain01.github.io/My-Mini-Projects/MainFile/">HTML/CSS/JS Projects</a></li>
        <li><a href="https://manavjain01.github.io/My-React-Projects/#/Body">React Projects</a></li>
        <li><Link to="/">More Projects</Link></li>
      </ul>

      <ul>
        <li className="text-2xl">Let's be social</li>
        <li className="flex justify-between">
          <a href="https://github.com/ManavJain01"><FaGithub className="size-8" /></a>
          <a href=""><CiLinkedin className="size-8" /></a>
          <a href=""><SiLeetcode className="size-8" /></a>
        </li>
      </ul>
    </nav>
  )
}