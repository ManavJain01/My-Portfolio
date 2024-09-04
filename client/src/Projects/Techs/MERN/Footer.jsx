import github from './Images/github-mark.png'
import instagram from './Images/instagram.png'
import linkedin from './Images/linkedin.png'

// Importing React Packages
import { Link } from 'react-router-dom'

// Importing local files
import data from "@/Data/api.json"

function Footer(){
  return(
    <div className="min-h-[20vh]">
      <nav className="relative flex justify-around flex-wrap gap-7 py-5">
        <ul className="p-5 rounded-2xl shadow-reverse_clayMorphism">
          <h1 className="text-3xl">Manav Jain</h1>
          <li>{data["my info"]?.field}</li>
          <li className="text-2xl pt-3"><Link to={data["my info"]?.portfolio}>My Portfolio</Link></li>
        </ul>

        <ul className="flex flex-col space-y-2 p-5 rounded-2xl shadow-reverse_clayMorphism">
          <li className="text-2xl border-b-2">Projects</li>
          <li><Link to={data?.projects["Vanilla Projects"]?.link}>HTML/CSS/JS Projects</Link></li>
          <li><Link to={data?.projects["Machine Learning Projects"]?.link}>ML Projects</Link></li>
          <li><Link to={data["my info"]?.allProjects}>More Projects</Link></li>
        </ul>

        <ul className="flex flex-col items-center p-5 rounded-2xl shadow-reverse_clayMorphism">
          <li className="text-2xl border-b-2">Let's be social</li>
          <li className="flex space-x-2 pt-3">
            <Link to={data["my info"]?.social?.github}><img src={github} className="w-7" /></Link>
            <Link to={data["my info"]?.social?.instagram}><img src={instagram} className="w-7" /></Link>
            <Link to={data["my info"]?.social?.linkedin}><img src={linkedin} className="w-7" /></Link>
          </li>
        </ul>

        <img src="https://www.pngall.com/wp-content/uploads/15/Baymax-PNG-Pic.png" alt="gif" className="hidden md:block w-32 absolute bottom-0 right-0" />
      </nav>
    </div>
  )
}

export default Footer;