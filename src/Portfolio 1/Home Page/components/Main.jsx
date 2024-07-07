// Importing Local Files
import Navbar from './Navbar';
import Footer from './Footer';
import Bio from '../../Bio/Bio.jsx'
import Skills from '../../Skills/Skills.jsx'
import Experience from '../../Experience/Experience.jsx';
import Certificates from '../../Certificates/Certificates.jsx'
import Contributions from '../../Contributions/components/Contributions.jsx'
import Projects from '../../Projects/Projects.jsx'
import Connect from '../../Connect/Connect.jsx'

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
  const experience = useRef()
  const certificates = useRef()
  const contributions = useRef()
  const projects = useRef()
  const connect = useRef()

  return(
    <div className='xs:cursor-none overflow-x-hidden'>
      
      {/* NavBar/ Header */}
      <Navbar ref={{bio, skills, experience, certificates, contributions, projects, connect}} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

      {/* Creating my own cursor */}
      <div id="cursor-dot" className={`${darkTheme ? "xs:bg-[#f5f5dc]" : "xs:bg-gray-700"} xs:z-[99999] xs:fixed xs:top-[-20px] xs:left-0 xs:w-5 xs:h-5 xs:rounded-full xs:pointer-events-none`} />
      <div id="cursor-outline" className={`${darkTheme ? "xs:border-[#f5f5dc]" : "xs:border-gray-700"} xs:z-[99999] xs:fixed xs:left-0 xs:top-[-50px] xs:w-10 xs:h-10 xs:border-2 xs:rounded-full xs:pointer-events-none`} />
      
      {/* My Portfolio Main/Body */}
      <main className={`${darkTheme ? "bg-black text-white" : "bg-gray-200 text-black"} min-h-[100vh] px-10 xs:px-32 transition-all duration-1000`}>
        <div ref={bio}><Bio ref={{connect}} /></div>
        <div ref={skills}><Skills /></div>
        <div ref={experience}><Experience darkTheme={darkTheme} /></div>
        <div ref={certificates}><Certificates darkTheme={darkTheme} /></div>
        {/* <div ref={contributions}><Contributions darkTheme={darkTheme} /></div> */}
        <div ref={projects}><Projects darkTheme={darkTheme} /></div>
        <div ref={connect}><Connect darkTheme={darkTheme} /></div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Main;