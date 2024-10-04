import { useState } from 'react'

// Importing local files
import Cube from './Cube';

export default function Projects() {
  const data = [
    {

    },
  ];

  const [isHovered, setIsHovered] = useState(null)

  return (
    <div className="text-white flex flex-wrap justify-around gap-10 mx-10 my-20">
      <Cube />

      {Array.isArray(data) && data.map((e, i) => {
        return(
          <div key={i} onMouseEnter={() => setIsHovered(i)} onMouseLeave={() => setIsHovered(null)} className="group bg-sky-400 flex flex-col justify-between w-[20rem] h-[20rem] hover:shadow-xl hover:scale-[110%] animate-meta_shapeMorph duration-700 overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaK4UVnECoCkNrICKZKjn5TeJg7ExLvGNWwg&s" alt="project_img" className="" />

            <div className="flex-1 flex flex-col items-center">
              <p className="font-bold text-2xl">Project Name</p>
              <p className="z-10 bg-sky-400">Project Description</p>
              <button className="bg-sky-500 py-2 px-6 rounded-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-sky-400">
                {isHovered === i ? "Click Me!" : "Hover Me!"}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}