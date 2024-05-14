// Importing React Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

import {useState} from 'react';

function Navbar() {  
  const [showMenu, setShowMenu] = useState(false);
  
  function getMenu(){
    if(showMenu === false){
      setShowMenu(true);
    }else{
      setShowMenu(false);
    }
  }

  window.onresize = window.onload = function() {
    if(this.innerWidth > 768){
      setShowMenu(false)
    }
  }

  return (
    <>
      <div className='h-[10vh] w-[100vw] bg-transparent backdrop-blur-sm fixed text-white flex gap-20 items-center px-10 rounded-b-lg'>
        <div className="cursor-pointer block md:hidden">
          {
            showMenu ? <RxCross1 onClick={()=> getMenu()} className={`h-10 w-10 z-50 text-black ${showMenu ? "absolute" : ""}`} />
            : <RxHamburgerMenu onClick={()=> getMenu()} className="h-10 w-10" />
          }         
        </div>
        <h1 className='font-semibold text-4xl'>Manav Jain</h1>
        <nav className={`text-xl ${showMenu ? "flex absolute top-0 left-0 bg-white text-black h-[100vh] w-[100vw] py-32" : "" } md:flex`}>
          <ul className={`flex md:flex gap-10 flex-col md:flex-row ${showMenu ? "flex items-center mx-auto" : "hidden"}`}>
            <li>Bio</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Connect</li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar;