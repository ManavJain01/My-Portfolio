// Importing React Icons
import { FaDownload } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
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

// Importing Local Files
import Education from './Education'

// Importing React Packages
import { forwardRef } from 'react';


function Bio(props, ref){
  // Creating Scroll Handler 
  const scrollHandler = (elemRef) => {
    window.scrollTo({ top: elemRef.current.offsetTop, behaviour: "smooth" })
  }

  return (
    <div className={`${props.darkTheme ? "text-white" : "text-black"} flex flex-col gap-20 py-20 pt-48`}>
      {/* Introduction */}
      <div className="flex flex-col items-center gap-10">
        {/* My Name */}
        <p className="text-6xl font-semibold">Hi all, I'm Manav 👋</p>

        {/* Content */}
        <p className="text-2xl">A passionate Full Stack Developer 🚀 having an experience of building Web applications with Javascript / Reactjs / NodeJs and some other cool libraries and frameworks.</p>

        {/* 2 Buttons */}
        <section className="w-full flex gap-5 justify-between items-center flex-wrap">
          <button onClick={() => scrollHandler(ref.connect)} className="bg-purple-800 font-semibold text-xl flex gap-5 items-center py-2 px-3 rounded-lg hover:bg-white hover:text-purple-800">
            Contact Me
            <LuExternalLink />
          </button>
          <a href="../Resume/resume.txt" download="My Resume" className="bg-purple-800 font-semibold text-xl flex gap-5 items-center py-2 px-3 rounded-lg hover:bg-white hover:text-purple-800">
            Download My Resume
            <FaDownload />
          </a>
        </section>
      </div>

      {/* What I Do */}
      <div className="flex flex-col items-center gap-10">
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

      {/* Proficiency */}
      <div className="flex flex-col gap-10">
        {/* Headline */}
        <h1 className="text-6xl font-semibold">Proficiency</h1>

        {/* These are percentage divs */}
        <section className="flex flex-col gap-5">
          <span className="text-2xl">Frontend/Design</span>
          <span className={`${props.darkTheme ? "bg-white" : "bg-gray-200"} h-6 w-full rounded-full relative before:absolute before:top-0 before:content-[''] before:h-6 before:w-[90%] before:bg-green-400 before:rounded-r-full`} />
        </section>

        {/* These are percentage divs */}
        <section className="flex flex-col gap-5">
          <span className="text-2xl">Backend</span>
          <span className={`${props.darkTheme ? "bg-white" : "bg-gray-200"} h-6 w-full rounded-full relative before:absolute before:top-0 before:content-[''] before:h-6 before:w-[70%] before:bg-green-400 before:rounded-r-full`} />
        </section>

        {/* These are percentage divs */}
        <section className="flex flex-col gap-5">
          <span className="text-2xl">Programming</span>
        <span className={`${props.darkTheme ? "bg-white" : "bg-gray-200"} h-6 w-full rounded-full relative before:absolute before:top-0 before:content-[''] before:h-6 before:w-[50%] before:bg-green-400 before:rounded-r-full`} />          
        </section>
      </div>

      {/* Education */}
      <div className="flex flex-col gap-10">
        <h1 className="text-6xl font-semibold">Education</h1>
        <Education />
      </div>

    </div>
  )
}

export default forwardRef(Bio)