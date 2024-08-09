// Importing React Icons
import { GrProjects } from "react-icons/gr";

// Importing my projects
import projects from '../../Projects/projects.json'

// Importing React Packages
import { Link } from 'react-router-dom'

// Importing Framer Motion
import { motion } from "framer-motion"
import { useEffect, useState } from "react";

function Projects({ darkTheme }){
  // useState
  const [colorIndex, setColorIndex] = useState(0);
  const [projectType, setProjectType] = useState("MERN STACK PROJECTS");
  
  // useEffect  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Change color every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);


  // Variables
  const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-purple-500'];
  const category = ["MERN STACK PROJECTS", "BLOCKCHAIN PROJECTS"];

  return (
    <div className={`flex flex-col gap-10 py-20 pb-64`}>
      <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className="text-6xl font-semibold text-center md:text-start">Projects</motion.h1>
      
      <div className="flex gap-5">
        {category.map((e,i) => {
          return(
            <button key={i} onClick={() => setProjectType(e)} className={`text-2xl text-white bg-orange-500 px-5 py-2 rounded-lg ${projectType === e && "bg-orange-700"} duration-300`}>{e}</button>
          )
        })}
      </div>

      <div className="flex flex-col gap-20">
        <motion.div whileInView={{opacity:1, scale:"100%"}} initial={{opacity:0, scale:0}} transition={{duration:1.5}} className="flex flex-wrap gap-10 justify-around">
          {
            projects
            .filter((e) => e.category === projectType)
            .map((e,i) => {
              return(
                <Link key={i} to={e.link} className={`rounded-md shadow-2xl hover:shadow-green-400 active:hover:shadow-blue-400 cursor-none hover:scale-[120%] duration-700 ${darkTheme ? "shadow-purple-400" : "shadow-gray-400"}`}>
                  <img
                    src={e.img}
                    alt="project"
                    className="h-48 w-80" />
                  
                  <div className="p-5 flex flex-col items-center">
                    <h1>{e.name}</h1>
                  </div>
                </Link>
              )
            })
          }
          
          <Link to="https://more-projects-page.vercel.app/" className={`h-56 w-80 rounded-md shadow-2xl hover:shadow-green-400 active:hover:shadow-blue-400 cursor-none hover:scale-[120%] duration-700 ${darkTheme ? "shadow-purple-400" : "shadow-gray-400"}`}>
            <div className={`${colors[colorIndex]} p-5 flex flex-col gap-5 items-center`}>
              <GrProjects className="size-36" />
              <h1 className="font-bold text-2xl">More Projects</h1>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects