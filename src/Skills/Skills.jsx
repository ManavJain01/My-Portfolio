// Importing React Icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { IoLogoNpm } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiBlockchaindotcom } from "react-icons/si";

// Importing Local Images
import Machine from './Images/Machine.gif'

function Skills({ darkTheme }){
  return (
    <div className={`${darkTheme ? "text-white" : "text-black"} flex flex-col gap-20 py-20`}>
      {/* What I Do */}
      <div className="flex gap-5">
        <img 
          src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Developer.gif"
          alt="gif"
          className="hidden lg:flex w-[35rem]" />
        
        <div className="flex flex-col gap-10">
          {/* What I Do */}
          <p className="text-6xl font-semibold">What I do</p>

          {/* A single line */}
          <p className="text-2xl">CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>

          {/* Icons */}
          <section className="text-gray-500 flex gap-5 flex-wrap">
            <span className="flex flex-col items-center hover:text-orange-600"><FaHtml5 className="size-12" /> HTML</span>
            <span className="flex flex-col items-center hover:text-blue-700"><FaCss3Alt className="size-12" /> CSS</span>
            <span className="flex flex-col items-center hover:text-yellow-500"><IoLogoJavascript className="size-12" /> JavaScript</span>
            <span className="flex flex-col items-center hover:text-blue-600"><RiReactjsFill className="size-12" /> ReactJs</span>
            <span className="flex flex-col items-center hover:text-green-500"><DiNodejs className="size-12" /> NodeJs</span>
            <span className="flex flex-col items-center hover:text-red-700"><IoLogoNpm className="size-12" /> npm</span>
            <span className="flex flex-col items-center hover:text-green-700"><DiMongodb className="size-12" /> MongoDB</span>
            <span className="flex flex-col items-center hover:text-orange-400"><FaAws className="size-12" /> aws</span>
            <span className="flex flex-col items-center hover:text-yellow-500"><IoLogoFirebase className="size-12" /> Firebase</span>
            <span className="flex flex-col items-center hover:text-blue-700"><SiBlockchaindotcom className="size-12" /> BlockChain</span>
          </section>

          {/* ⚡ Content */}
          <section className="text-semibold text-2xl">
            <p>⚡ Develop highly interactive Front end / User Interfaces for your web applications</p>

            <p>⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks</p>

            <p>⚡ Integration of third party services such as Firebase/ AWS</p>
          </section>
        </div>
      </div>

      {/* Proficiency */}
      <div className="flex gap-10">
        <div className="flex-1 flex flex-col gap-10">
          {/* Headline */}
          <h1 className="text-6xl font-semibold">Proficiency</h1>

          {/* These are percentage divs */}
          <section className="flex flex-col gap-5">
            <span className="text-2xl">Frontend/Design</span>
            <span className={`${darkTheme ? "bg-white" : "bg-white"} h-6 w-full rounded-full relative before:absolute before:top-0 before:content-[''] before:h-6 before:w-[90%] before:bg-green-400 before:rounded-r-full`} />
          </section>

          {/* These are percentage divs */}
          <section className="flex flex-col gap-5">
            <span className="text-2xl">Backend</span>
            <span className={`${darkTheme ? "bg-white" : "bg-white"} h-6 w-full rounded-full relative before:absolute before:top-0 before:content-[''] before:h-6 before:w-[70%] before:bg-green-400 before:rounded-r-full`} />
          </section>

          {/* These are percentage divs */}
          <section className="flex flex-col gap-5">
            <span className="text-2xl">Programming</span>
          <span className={`${darkTheme ? "bg-white" : "bg-white"} h-6 w-full rounded-full relative before:absolute before:top-0 before:content-[''] before:h-6 before:w-[50%] before:bg-green-400 before:rounded-r-full`} />          
          </section>
        </div>  

        <img
          src="https://cdn.dribbble.com/users/6985884/screenshots/15912038/media/0e74365694dac3776922d1c1e6c13e20.gif"
          alt="gif"
          className="hidden lg:flex w-[35rem]" />
      </div>
    </div>
  )
}

export default Skills