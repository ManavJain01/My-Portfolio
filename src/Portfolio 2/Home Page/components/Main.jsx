// Importing local Files
import NavBar from './NavBar'
import Footer from './Footer'
import Bio from '../../Bio/Bio'
import Skills from '../../Skills/Skills'

// Importing React Packages
import { useRef, useState } from 'react'

export default function Main() {
  // Creating references for different sections
  const bio  = useRef()
  const skills = useRef()
  const experience = useRef()
  const certificates = useRef()
  const projects = useRef()
  const connect = useRef()

  // UseStates
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={`h-lvh p-10 sm:p-20 font-serif flex flex-col transition-all duration-1000 ${darkTheme ? "bg-black text-white" : "bg-gray-300 text-black"}`}>
      <div className={`flex-1 flex flex-col gap-10 justify-between border-2 rounded-lg shadow-2xl overflow-y-scroll scrollbar-none ${darkTheme ? "border-gray-900 shadow-gray-800" : "border-gray-300 shadow-gray-400"}`}>
        {/* Header */}
        <NavBar ref={{bio, skills, certificates, projects, connect}} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

        {/* Main Body */}
        <div className="flex-1">
          <div ref={bio}><Bio /></div>
          <div ref={skills}><Skills /></div>
        </div>

        {/* Footer */}
        <Footer />
      </div> 
    </div>
  )
}