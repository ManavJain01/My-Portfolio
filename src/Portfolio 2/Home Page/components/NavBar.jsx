// Importing React Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

// Importing local files
import DarkTheme from "./DarkTheme";

// Importing React Packages
import { useState } from "react";

export default function NavBar(props) {
  // NavBar Options
  const navOptions = [
    {
      name: "Bio"
    },
    {
      name: "Skills"
    },
    {
      name: "Certificates"
    },
    {
      name: "Projects"
    },
    {
      name: "Connect"
    }
  ]

  // UseStates
  const [menu, setMenu] = useState(false)
  
  // Functions
  // Enabling , Disabling Ham-Menu
  function getMenu(){
    if(menu == true) setMenu(false);
    else setMenu(true);
  }

  window.onresize = window.onload = function() {
    if(this.innerWidth > 768){
      setMenu(false)
    }
  }

  return (
    <div className="sticky top-0 flex justify-end">
      <nav className={`relative w-full md:w-[80%] lg:w-[70%] px-10 py-2 flex justify-between rounded-sm shadow-md ${props.darkTheme ? "bg-gray-900 shadow-gray-800" : "bg-gray-400 bg-opacity-30 shadow-gray-400"}`}>
        <span className="text-4xl whitespace-nowrap">Manav Jain</span>

        <div className="flex gap-10">
          <ul className={`md:flex gap-5 items-center ${menu? "z-50 absolute right-0 top-14 p-10 w-[15rem] bg-gray-400 backdrop-blur-lg bg-opacity-30 flex flex-col border-2 rounded-sm rounded-b-md" : "hidden"} ${menu? props.darkTheme ? "border-gray-600" : "border-gray-400" : ""}`}>
            {navOptions
              .filter((e,i) => menu ? e : i < 1)
              .map((e,i) => {
                return(
                  <li key={i} className={`px-5 py-1 rounded-lg hover:shadow-inner hover:shadow-gray-950`}>{e.name}</li>
                )
            })}
            <li><DarkTheme darkTheme={props.darkTheme} setDarkTheme={props.setDarkTheme} /></li>
          </ul>

          <div className="flex">
            {menu
              ?<RxCross1 onClick={()=>getMenu()} className="size-8 cursor-pointer" />
              :<RxHamburgerMenu onClick={()=>getMenu()} className="size-8 cursor-pointer" />
            }
          </div>
        </div>
      </nav>
    </div>
  )
}