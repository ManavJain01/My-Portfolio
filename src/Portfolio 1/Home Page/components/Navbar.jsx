// Importing React Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

// Importing Local files
import LinkComponent from "../../Common Components/LinkComponent";
import DarkTheme from "../../Common Components/DarkTheme";

// Importing React Packages
import { useState, forwardRef } from 'react';

// Importing Framer Motion
import { motion, MotionConfig } from "framer-motion"

function Navbar( props, ref ) { 

  // Enabling , Disabling Ham-Menu
  const [showMenu, setShowMenu] = useState(false);
  
  // Turn off my menu when bigger size on render
  window.onresize = window.onload = function() {
    if(this.innerWidth > 768){
      setShowMenu(false)
    }
  }


  // Creating Scroll Handler 
  const scrollHandler = (elemRef) => {
    window.scrollTo({ top: elemRef.current.offsetTop, behaviour: "smooth" })
  }

  // Array of referrences of navbar
  const refArray = [ref.bio, ref.skills, ref.experience, ref.certificates, ref.projects, ref.connect]

  return (
    <div className={`${props.darkTheme ? "text-white" : "text-black"} z-50 flex justify-between items-center gap-5 h-[10vh] w-[100vw] bg-transparent backdrop-blur-md fixed px-10 pr-40 rounded-b-lg`}>
      <div className='flex gap-10 xs:gap-20 items-center'>
        {/* For Small screens, Our Ham-Menu Icon */}
        <div className={`${props.darkTheme ? "text-white" : "text-black"} cursor-pointer block md:hidden`}>
          {/* My HamMenu Design */}
          <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
            <motion.button
              onClick={()=>setShowMenu((e) => !e)}
              initial={false}
              animate={showMenu ? "open" : "closed"}
              className={`z-50 relative h-16 w-16 rounded-full bg-white/0 transition-colors cursor-pointer ${props.darkTheme ? "hover:bg-white/20" : "hover:bg-gray-400"}`}>
                <motion.span
                  style={{left: "50%", top: "35%", x: "-50%", y: "-50%"}}
                  className={`absolute h-1 w-10 ${props.darkTheme ? "bg-white" : "bg-black"}`}
                  variants={{
                    open: {
                      rotate: ["0deg", "0deg", "45deg"],
                      top: ["35%", "50%", "50%"]
                    },
                    closed: {
                      rotate: ["45deg", "0deg", "0deg"],
                      top: ["50%", "50%", "35%"]
                    }
                  }} />
                
                <motion.span
                  style={{left: "50%", top: "50%", x: "-50%", y: "-50%"}}
                  className={`absolute h-1 w-10 ${props.darkTheme ? "bg-white" : "bg-black"}`}
                  variants={{
                    open: {
                      rotate: ["0deg", "0deg", "-45deg"]
                    },
                    closed: {
                      rotate: ["-45deg", "0deg", "0deg"]
                    }
                  }} />
              
                <motion.span
                  style={{left: "calc(50% + 10px)", bottom: "35%", x: "-50%", y: "50%"}}
                  className={`absolute h-1 w-5 ${props.darkTheme ? "bg-white" : "bg-black"}`}
                  variants={{
                    open: {
                      rotate: ["0deg", "0deg", "45deg"],
                      left: "50%",
                      bottom: ["35%", "50%", "50%"]
                    },
                    closed: {
                      rotate: ["45deg", "0deg", "0deg"],
                      left: "calc(50% + 10px)",
                      bottom: ["50%", "50%", "35%"]
                    }
                  }} />
            </motion.button>
          </MotionConfig>
        </div>

        {/* My Name */}
        <LinkComponent to="/" content={"Manav"} styles={"font-semibold text-4xl whitespace-nowrap text-purple-800"} >Manav <span className="text-purple-950">Jain</span></LinkComponent>

        {/* NavBar Icons */}
        <nav className={`text-xl ${showMenu ? "flex absolute top-0 left-0 h-[100vh] w-[100vw] py-32" : "" } ${props.darkTheme ? "text-gray-300" : "text-black"} ${showMenu ? props.darkTheme ? "bg-black" : "bg-gray-200" : ""} md:flex md:gap-10 md:items-center`}>
          <ul className={`flex md:flex md:items-center gap-10 flex-col md:flex-row ${showMenu ? "flex items-center mx-auto" : "hidden"}`}>  
            {["Bio", "Skills","Experience", "Certificates", "Projects", "Connect"].map((e, i) =>
              <li key={e} onClick={() => {scrollHandler(refArray[i]); setShowMenu(false)}} className={`${showMenu? "py-2 hover:bg-blue-400 hover:text-white w-[100vw] text-center active:bg-blue-500" : "px-2 py-1 rounded-md"} ${showMenu === false ? props.darkTheme ? "hover:bg-purple-600 hover:text-white" : "hover:text-purple-600 hover:bg-gray-300" : ""}`}>{e}</li>
            )}

            {/* Dark Theme Toggle */}
            <li><DarkTheme darkTheme={props.darkTheme} setDarkTheme={props.setDarkTheme} /></li>
          </ul>
        </nav>

      </div>
      
    </div>
  )
}

export default forwardRef(Navbar);