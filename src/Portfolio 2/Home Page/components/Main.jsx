// Importing local Files
import NavBar from './NavBar'
import Footer from './Footer'
import Timeline from './Timeline';
import InnerMain from '../../Second Page/InnerMain'

// Importing React Packages
import { useRef, useState } from 'react'

export default function Main() {
  // Creating references for different sections
  const bio  = useRef(null)
  const skills = useRef(null)
  const certificates = useRef(null)
  const contributions = useRef(null)
  const experience = useRef(null)
  const projects = useRef(null)
  const connect = useRef(null)
  const scrollContainerRef = useRef(null);

  // UseStates
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem("theme") || false)

  return (
    <div className={`relative h-lvh font-serif flex transition-all duration-1000 ${darkTheme ? "bg-black text-white" : "bg-gray-300 text-black"}`}>
      <Timeline darkTheme={darkTheme} scrollContainerRef={scrollContainerRef} ref={{bio, skills, certificates, contributions, experience, projects, connect}} />

      <div ref={scrollContainerRef} className={`flex-1 flex flex-col gap-10 justify-between my-10 sm:my-16 sm:ml-32 border-2 rounded-lg shadow-2xl overflow-y-scroll scrollbar-none ${darkTheme ? "border-gray-900 shadow-gray-800" : "border-gray-300 shadow-gray-400"}`}>
        {/* Header */}
        <NavBar ref={{bio, skills, certificates, contributions, experience, projects, connect}} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

        {/* Main Body */}
        <InnerMain ref={{bio, skills, certificates, contributions, experience, projects, connect}} darkTheme={darkTheme} />

        {/* Footer */}
        <Footer />
      </div> 
    </div>
  )
}