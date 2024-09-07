// Importing React Icons
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

// Importing React Packages
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Importing local files
import data from "@/Data/api.json"
import webpages from './objects.js'

export default function Vanilla() {  
  // useEffect
  useEffect(() => {
    const div3 = document.getElementById('vanilla_div3');
    const btn = document.getElementById('vanilla_btn1');
    btn.addEventListener("click", addingWebpages)
    
    async function addingWebpages(){
      for (let i = 1; i < Object.keys(webpages).length+1; i++) { 
        await waitforme(1000);
    
        let div = document.createElement('div');
        let iframe = document.createElement("iframe");
        let para = document.createElement("p");
        let span = document.createElement("span");
        let alink = document.createElement("a");
    
        iframe.src = webpages[i].link;
        iframe.width = "350px";
        iframe.height = "250px";
        iframe.className = "webpage";
    
        para.append(webpages[i].p);
        para.className = "vanilla_heading2";
    
        span.append(webpages[i].sp);
        span.className = "vanilla_heading2";
    
        alink.href = webpages[i].link;
        alink.target = '_blank';
        alink.classList.add("vanilla_webpageLinks");
    
        div.classList.add('vanilla_div4');
    
        div.appendChild(iframe);
        div.appendChild(para);
        div.appendChild(span);
    
        div3.appendChild(alink);
        alink.appendChild(div);
    
        btn.disabled = true;
      }
    }
    
    function waitforme(ms){
      return new Promise( resolve => {
        setTimeout(()=>{resolve('')} ,ms)
      })
    }
  }, [])
  return (
    <div className="font-mono flex flex-col min-h-lvh w-lvw">
      {/* Header */}
      <div id="vanilla_header" className="text-center bg-[#383636] h-40 flex justify-center items-center">
        <h1 className="font-bold text-4xl text-[#FFFF00]">ALL MY MINI PROJECTS</h1>
      </div>

      {/* main */}
      <div className="bg-[#F5F5DC] flex-1 flex flex-col gap-10 p-9">
        <div id="vanilla_div1" className="flex flex-col gap-5 items-center h-[10rem]">
          <h1 id="heading1" className="font-bold text-3xl underline decoration-[#FFFF00]">ALL Projects</h1>
          <button id="vanilla_btn1" className="whitespace-nowrap bg-[#FFFF00] px-5 py-2 rounded-lg animate-scale">Start Course</button>
        </div>

        <div id="vanilla_div3" className="flex gap-5 flex-wrap" />
      </div>

      {/* Footer */}
      <nav id="vanilla_footer" className="bg-[#FFFF00] flex gap-5 justify-around flex-wrap p-8">
        <ul className="flex flex-col gap-1">
          <h1 className="font-semibold text-2xl">Manav Jain</h1>
          <li>{data["my info"]?.field}</li>
          <li className="mt-5"><Link to={data["my info"]?.portfolio} className="font-semibold text-xl">My Portfolio</Link></li>
        </ul>

        
        <ul className="flex flex-col items-center gap-5">
          <li className="font-semibold text-2xl">Projects</li>
          <li><Link to={data?.projects["Reactjs Projects"]?.link}>React Projects</Link></li>
          <li><Link to={data?.projects["Machine Learning Projects"]?.link}>ML Projects</Link></li>
          <li><Link to={data["my info"]?.allProjects}>More Projects</Link></li>
        </ul>

        <ul className="flex flex-col gap-5">
          <li className="font-semibold text-2xl">Let's be social</li>
          <li className="flex gap-5 justify-center">
            <Link to={data["my info"]?.social?.github}><FaGithub className="size-6" /></Link>
            <Link to={data["my info"]?.social?.instagram}><FaInstagram className="size-6 text-pink-600" /></Link>
            <Link to={data["my info"]?.social?.linkedin}><FaLinkedin className="size-6 text-blue-600" /></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}