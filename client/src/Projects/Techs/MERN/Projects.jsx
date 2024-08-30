import {Link} from 'react-router-dom'
import object from './Objects'

import './Projects.css'

function Projects(){
  let i = 1

  return(
    <div className='flex flex-wrap'>
      {object.map((value) =>(
        <Link key={i} to={value.Link} id={value.id} className="group m-5 hover:scale-110 duration-300">
          <div className="relative w-[20rem] h-[24rem] bg-white text-red-600 rounded-lg shadow-clayMorphism group-hover:-scale-x-100 duration-1000">
            <div className="absolute w-full h-full px-5 py-5 flex flex-col items-center justify-between group-hover:hidden duration-700">
              <h1 className="text-6xl mb-4">Project {i++}</h1>
              <img src={value.Img} className={`object-contain rounded-sm`}></img>
              <p className="flex flex-col items-center mt-2 pt-2 border-t-2 border-blue-600">
                <span className="shadow-xl px-10 whitespace-nowrap">{value.p1}</span>
                <span className="shadow-xl px-10 whitespace-nowrap">{value.p2}</span>
              </p>
            </div>

            <div className="absolute w-full h-full hidden px-5 py-5 flex-col gap-5 justify-center group-hover:flex group-hover:-scale-x-100 duration-300">
              <p>{value?.flip?.p1}</p>
              <Link to={value?.flip?.Link} className="text-blue-700 hover:text-green-600">{value?.flip?.p2}</Link>
            </div>
          </div>
        </Link>
      ))}

      <Link className="group m-5 hover:scale-110 duration-300 active:translate-x-4">
        <div className="relative w-[20rem] h-[24rem] bg-white text-red-600 rounded-lg shadow-clayMorphism group-hover:-scale-x-100 duration-1000">
          <div className="absolute w-full h-full px-5 py-5 flex flex-col items-center justify-between group-hover:hidden duration-700">
            <h1 className="text-6xl mb-4">Project {i}</h1>
            <p className="text-3xl whitespace-nowrap hover:translate-y-2 active:translate-y-4">Work in progress</p>
            <p className="flex flex-col items-center mt-2 pt-2 border-t-2 border-blue-600">
              <span className="shadow-xl px-10 whitespace-nowrap">Project Name</span>
              <span className="shadow-xl px-10 whitespace-nowrap">Topic Name</span>
            </p>
          </div>

          <div className="absolute w-full h-full hidden bg-gray-100 px-5 py-5 rounded-lg flex-col justify-center items-center group-hover:flex group-hover:-scale-x-100 duration-300">
            <img src="https://media.tenor.com/9rQ7EAiTHkIAAAAi/baymax-dance-big-hero-6.gif" alt="gif" className="hidden md:block absolute h-full w-full" />   
            <div className="relative flex flex-col gap-5 text-center">
            <p className="font-bold text-3xl">ClayMorphism</p>
            <p className="">Another Project may be in development so stay tuned!!!</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Projects