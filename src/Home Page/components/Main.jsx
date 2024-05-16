// Importing Local Files
import Navbar from './Navbar';
import Footer from './Footer';
import Bio from '../../Bio/Bio'
import Skills from '../../Skills/Skills'
import Projects from '../../Projects/Projects'
import Connect from '../../Connect/Connect'

// Importing React Packages
import { useEffect, useRef } from 'react';

function Main(){
  // Creating our own cursor
  useEffect(()=>{
    const cursorDot = document.getElementById("cursor-dot")
    const cursorOutline = document.getElementById("cursor-outline")
  
    window.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;
  
      cursorDot.style.left = `${posX}px`
      cursorDot.style.top = `${posY}px`


      cursorOutline.animate({
        left: `${posX - 10}px`,
        top: `${posY - 10}px`
      }, {duration: 500, fill: "forwards"})
    })
  } ,[])


  // Creating references for different sections
  const bio  = useRef()
  const skills = useRef()
  const projects = useRef()
  const connect = useRef()

  return(
    <div className='xs:cursor-none overflow-x-hidden'>
      
      {/* NavBar/ Header */}
      <Navbar ref={{bio, skills, projects, connect}} />

      {/* Creating my own cursor */}
      <div id="cursor-dot" className='xs:fixed xs:top-[-20px] xs:left-0 xs:bg-[#f5f5dc] xs:w-5 xs:h-5 xs:rounded-full xs:pointer-events-none' />
      <div id="cursor-outline" className="xs:fixed xs:left-0 xs:top-[-50px] xs:w-10 xs:h-10 xs:border-2 xs:border-[#f5f5dc] xs:rounded-full xs:pointer-events-none" />
      
      {/* My Portfolio Main/Body */}
      <main className="bg-black md:bg-gradient-to-r md:from-indigo-500 md:from-10% md:via-sky-500 md:via-30% md:to-emerald-500 md:to-90% min-h-[100vh] px-32">
        <div className="/*bg-blue-900 bg-gradient-to-r from-[#09203f] to-[#537895] h-[100vh] flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold">Building...</h1>
          <h1 className="text-6xl font-bold">Come Back Later To Find out</h1>
        </div>

        <div ref={bio}><Bio /></div>
        <div ref={skills}><Skills /></div>
        <div ref={projects}><Projects /></div>
        <div ref={connect}><Connect /></div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Main;