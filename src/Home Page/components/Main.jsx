// Importing Local Files
import Navbar from './Navbar';
import Footer from './Footer';
import Bio from '../../Bio/Bio.jsx'
import Skills from '../../Skills/Skills.jsx'
import Projects from '../../Projects/Projects.jsx'
// import Connect from '../../Connect/Connect.jsx'


// Importing React Packages
import { useEffect, useRef, useState } from 'react';

function Main(){
  // Dark Theme State
  const [darkTheme, setDarkTheme] = useState(false)

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
      <Navbar ref={{bio, skills, projects, connect}} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

      {/* Creating my own cursor */}
      <div id="cursor-dot" className='xs:z-50 xs:fixed xs:top-[-20px] xs:left-0 xs:bg-[#f5f5dc] xs:w-5 xs:h-5 xs:rounded-full xs:pointer-events-none' />
      <div id="cursor-outline" className="xs:z-50 xs:fixed xs:left-0 xs:top-[-50px] xs:w-10 xs:h-10 xs:border-2 xs:border-[#f5f5dc] xs:rounded-full xs:pointer-events-none" />
      
      {/* My Portfolio Main/Body */}
      <main className={`${darkTheme ? "bg-black" : "bg-gray-200"} min-h-[100vh] px-10 xs:px-32`}>
        <div ref={bio}><Bio ref={{connect}} darkTheme={darkTheme} /></div>

        <div className="/*bg-blue-900 bg-gradient-to-r from-[#09203f] to-[#537895] h-[100vh] flex flex-col items-center justify-center text-white px-20">
          <h1 className="text-6xl font-bold">Building...</h1>
          <h1 className="text-6xl font-bold">Come Back Later To Find out</h1>
        </div>

        <div ref={skills}><Skills darkTheme={darkTheme} /></div>
        <div ref={projects}><Projects darkTheme={darkTheme} /></div>
        {/* <div ref={connect}><Connect darkTheme={darkTheme} /></div> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Main;