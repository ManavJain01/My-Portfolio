// Importing React Icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsEmojiHeartEyesFill } from "react-icons/bs";

// Importing React Packages
import { Link } from "react-router-dom"

export default function RightSidebar() {
  return (
    <div className="flex flex-col gap-5 w-full md:w-fit">
      <div className="flex flex-col items-center md:w-80 h-64 p-5 rounded-xl shadow-ai-shadow hover:shadow-none duration-500">
        <img src="https://static.vecteezy.com/system/resources/previews/001/191/989/original/circle-logo-png.png" alt="logo" className="size-44" />
        <h1 className="font-bold text-xl">Visionary<span className="text-orange-500">Bot</span></h1>
        <h2 className="tracking-widest">Full Stack Web Developer</h2>
      </div>
      
      <div className="flex justify-between items-center">
        <h1 className="tracking-wider font-bold text-2xl">Visit Here:</h1>
        <BsEmojiHeartEyesFill className="text-yellow-500 hover:text-yellow-600 size-8 mr-5" />
      </div>

      <section className="flex flex-col gap-8">
        {/* Portfolio */}
        <Link to="https://manavjain-portfolio.vercel.app/" className="flex justify-center md:w-80 h-20 p-5 rounded-xl shadow-ai-shadow2 hover:shadow-none duration-500">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VBxswGB2ryUaX_VqFuA5W7Lelwq1OmTUlg&s" alt="logo" className="/size-44" />        
        </Link>
        {/* Github */}
        <Link to="https://github.com/manavjain01" className="tracking-widest font-semibold text-5xl hover:text-sky-600 flex justify-center items-center gap-2 md:w-80 h-20 p-5 rounded-xl shadow-ai-shadow2 hover:shadow-none duration-500">
          <FaGithub />
          <span>Github</span>
        </Link>
        {/* Linkedin */}
        <Link to="https://www.linkedin.com/in/manav-jain-02a54824a/" className="tracking-widest font-semibold text-5xl text-blue-700 hover:text-sky-600 flex justify-center items-center gap-2 md:w-80 h-20 p-5 rounded-xl shadow-ai-shadow2 hover:shadow-none duration-500">
          <FaLinkedin />
          <span>LinkedIn</span>
        </Link>
      </section>
    </div>
  )
}