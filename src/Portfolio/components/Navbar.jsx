// Importing React Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

import menu6 from '../Images/menu6.png'
import cross from '../Images/cross.png'


import {useState} from 'react';
import Button from './Button';
import Navmenu from './Navmenu';

function Navbar() {
  //Previous functionality
  //-----------------------------------------------------------------------------------------------------------------------------
  const [menu, setMenu] = useState(false);
  const [enable, setEnable] = useState(true);
  
  function enableMenu(){
    if(menu==false){
      setMenu(true);
      setEnable(false);
    }else{
      setMenu(false);
      setEnable(true);
    }
  }
  //-----------------------------------------------------------------------------------------------------------------------------
  
  const [showMenu, setShowMenu] = useState(false);
  
  function getMenu(){
    if(showMenu === false){
      setShowMenu(true);
    }else{
      setShowMenu(false);
    }
  }

  return (
    <>
      {/* <div className="bg-black md:bg-transparent grid justify-center min-w-fit md:w-auto md:flex">
        <nav className="flex justify-between gap-28 sm:gap-56 md:gap-0 items-center md:w-full">
          <h1 className="whitespace-nowrap text-white text-4xl font-bold font-serif pt-6 pb-4 md:py-12 md:pl-28 lg:pl-32 xl:pl-44">Manav Jain</h1>
          <ul className="hidden md:flex">
            <li><Button name='navbarBtn' id="Home" /></li>
            <li><Button name='navbarBtn' id="About" /></li>
            <li><Button name="navbarBtn" id="Skills" /></li>
            <li className="md:pr-20 lg:pr-32 xl:pr-44"><Button name="navbarBtn" id="Contact" /></li>
          </ul>

          <button className="block md:hidden active:animate-spin" onClick={()=>{enableMenu()}}>
            {enable? <img src={menu6} className="h-8 object-contain"/> :<img src={cross} className="h-10 object-contain"/>}
          </button>
        </nav>
        {menu && <div className=" ease-in-out delay-300"><Navmenu /></div>}
      </div> */}

      <div className='h-[10vh] w-[100vw] bg-transparent backdrop-blur-sm fixed text-white flex gap-20 items-center px-10 rounded-b-lg'>
        <div className="cursor-pointer block md:hidden">
          {
            showMenu ? <RxCross1 onClick={()=> getMenu()} className={`h-10 w-10 z-50 text-black ${showMenu ? "absolute" : ""}`} />
            : <RxHamburgerMenu onClick={()=> getMenu()} className="h-10 w-10" />
          }         
        </div>
        <h1 className='font-semibold text-4xl'>Manav Jain</h1>
        <nav className={`text-xl ${showMenu ? "flex absolute top-0 left-0 bg-white text-black h-[100vh] w-[100vw] py-32 md:hidden" : "hidden"} md:flex`}>
          <ul className={`flex gap-10 flex-col md:flex-row ${showMenu ? "flex items-center mx-auto" : ""}`}>
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

/*
  pl-20 w-3/4

  <div className="grid justify-center mx-2 md:w-auto md:flex">
  <nav className="flex justify-between items-center min-w-[450px] md:min-w-fit md:max-w-full md:w-full">
*/