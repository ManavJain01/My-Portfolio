// Importing React Icons
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

//Importing React Packages
import { Link } from "react-router-dom";
import { useState } from "react";

// Importing Local files
import data from '@/Data/api.json'
import LinkComponent from "../../Common Components/LinkComponent";

function Footer(){
  // UseStates
  const [secretBtn, setSecretBtn] = useState(false);

  //functions
  window.onresize = window.onload = function() {
    if(this.innerWidth < 768){
      setSecretBtn(false)
    }
  }

  function showSecretBtn(){
    setTimeout(() => {
      setSecretBtn(true)
    }, 10000);
  }

  return (
    <div className="relative bg-black min-h-[30vh] w-[100vw] text-white flex justify-around items-center flex-wrap gap-8 px-10 py-5">
      {/* Creating Projects Section */}
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="font-semibold text-2xl">Projects</p>
        <ul className="text-gray-400 flex flex-col items-center gap-3">
          <li><LinkComponent to={data?.projects["MERN Projects"]?.link} content={"MERN Projects"} /></li>
          <li><LinkComponent to={data?.projects["Blockchain Projects"]?.link} content={"BlockChain Projects"} /></li>
          <li><LinkComponent to={data["my info"]?.allProjects} content={"More Projects"} /></li>
        </ul>
      </div>
      
      {/* Creating CONNECT Seaction */}
      <div className="flex flex-col gap-3 items-center justify-center">
        <p className="font-semibold text-2xl">CONNECT</p>
        <section className="flex gap-5">
          <Link to={data["my info"]?.social?.instagram}><FaInstagram className="w-8 h-8 text-gray-400 cursor-none" /></Link>
          <Link to={data["my info"]?.social?.linkedin}><FaLinkedin className="w-8 h-8 text-gray-400 cursor-none" /></Link>
          <Link to={data["my info"]?.social?.github}><FaGithub className="w-8 h-8 text-gray-400 cursor-none" /></Link>
        </section>
      </div>

      <span onMouseOver={() => showSecretBtn()} className="absolute right-0 bottom-0 px-3 py-1 text-black bg-black">Hover me</span>
      <Link to='/portfolio' className={`absolute -left-28 bottom-0 px-5 py-1 bg-gray-900 text-gray-600 rounded-lg cursor-none hover:-left-4 ${secretBtn ? "flex" : "hidden"}`}>Home Page</Link>
    </div>
  )
}

export default Footer