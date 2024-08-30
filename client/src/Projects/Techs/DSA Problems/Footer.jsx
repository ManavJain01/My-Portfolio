// Importing React Icons
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";

// Importing React Packages
import { Link } from "react-router-dom";

export default function Footer({data}) {
  return (
    <div id='footer'>
      <hr />
      <div>
        <section>
          <h1>{data['my info'].name}</h1>
          <p>{data['my info'].field}</p>
          <a href="https://manavjain-portfolio.vercel.app/">My Portfolio</a>
        </section>
  
        <section>
          <h1>Projects</h1>
          <a href="https://mern-projects-amber.vercel.app/">MERN Stack</a>
          <a href="https://manavjain01.github.io/BlockChain-Projects/MainFile/">BlockChain Projects</a>
          <Link to="/">More Projects</Link>
        </section>
  
        <section>
          <h1>Let's be social</h1>
          <section>
            <a href="https://leetcode.com/u/manavjain01/"><SiLeetcode className="size-8 hover:text-yellow-600" /></a>
            <a href="https://github.com/manavjain01"><FaGithub className="size-8 rounded-full hover:text-black hover:bg-white" /></a>
            <a href="https://in.linkedin.com/in/manav-jain-02a54824a?original_referer=https%3A%2F%2Fwww.google.com%2F"><CiLinkedin className="size-8 hover:text-blue-600" /></a>
          </section>
        </section>
      </div>
    </div>
  )
}