// Importing local Files
import NavBar from './NavBar'
import Footer from './Footer'

// Importing React Packages
import { useState } from 'react'

export default function Main() {
  // UseStates
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={`min-h-lvh p-10 font-serif flex flex-col ${darkTheme ? "bg-black text-white" : "bg-gray-300 text-black"}`}>
      <div className={`h-full flex-1 flex flex-col gap-10 justify-between border-2 rounded-lg shadow-xl ${darkTheme ? "border-gray-900 shadow-gray-900" : "border-gray-300 shadow-gray-400"}`}>
        {/* bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 */}
        {/* Header */}
        <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

        {/* Main Body */}
        <div className="flex-1">
          Main
          
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}