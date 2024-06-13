// Importing local Files
import NavBar from './NavBar'
import Footer from './Footer'

// Importing React Packages
import { useState } from 'react'

export default function Main() {
  // UseStates
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={`min-h-lvh p-10 font-serif flex flex-col gap-10 justify-between ${darkTheme ? "bg-black text-white" : "bg-gray-300 text-black"}`}>
      {/* Header */}
      <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

      {/* Main Body */}
      <div className="flex-1">
        Main
        
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}