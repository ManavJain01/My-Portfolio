// Importing React Icons
import { GrProjects } from "react-icons/gr";
import { FcManager } from "react-icons/fc";

// Importing React Packages
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

// Importing Local files
import data from '@/Data/api.json'

// Importing my projects
import projects from '@/Projects/projects.json'

export default function Projects() {
  // Variables
  const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-purple-500'];
  const category = ["MERN STACK PROJECTS", "BLOCKCHAIN PROJECTS"];
  
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

  return (
    <div className="min-h-lvh pt-28 flex flex-col items-center justify-between">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="flex flex-col gap-20">
        {/* Projects */}
        <div className="flex flex-wrap gap-20 justify-around">
          {
            projects
            .filter((e) => e.category === projectType)
            .map((e,i) => {
              return(
                <Link key={i} to={e.link} className={`rounded-md shadow-2xl hover:shadow-green-400 active:hover:shadow-blue-400 hover:scale-[120%] duration-700`}>
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
          {/* More Projects */}
          <Link to={data["my info"]?.allProjects} className={`h-64 w-80 rounded-md shadow-2xl hover:shadow-green-400 active:hover:shadow-blue-400 hover:scale-[120%] duration-700`}>
            <div className={`${colors[colorIndex]} p-5 flex flex-col gap-5 items-center`}>
              <GrProjects className="size-36" />
              <h1 className="font-bold text-2xl">More Projects</h1>
            </div>
          </Link>

          {/* My Portfolios */}
          <Link to="/Portfolio" className={`h-64 w-80 rounded-md shadow-2xl hover:shadow-green-400 active:hover:shadow-blue-400 hover:scale-[120%] duration-700`}>
            <div className={`${colors[colorIndex]} p-5 flex flex-col gap-5 items-center`}>
              <FcManager className="size-36" />
              <h1 className="font-bold text-2xl">My Other Porfolios</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}