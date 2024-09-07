// Importing React Icons
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Importing React Packages
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Importing local files
import data from '@/Data/api.json';
import webpages from './objects.js';

export default function Vanilla() {
  const [webpagesToShow, setWebpagesToShow] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to add webpages
  const addWebpages = async () => {
    setLoading(true);
    const newWebpages = [];
    for (let i = 1; i <= Object.keys(webpages).length; i++) {
      await waitFor(1000); // Simulate delay
      newWebpages.push(webpages[i]);
    }
    setWebpagesToShow(newWebpages);
    setLoading(false);
  };

  // Utility function to simulate delay
  function waitFor(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(''), ms));
  }

  return (
    <div className="font-[cursive] flex flex-col min-h-screen w-full">
      {/* Header */}
      <div id="vanilla_header" className="text-center bg-[#383636] h-40 flex justify-center items-center">
        <h1 className="font-bold text-4xl text-[#FFFF00]">ALL MY MINI PROJECTS</h1>
      </div>

      {/* main */}
      <div className="bg-[#F5F5DC] flex-1 flex flex-col gap-10 p-10">
        <div id="vanilla_div1" className="flex flex-col gap-5 items-center h-[10rem]">
          <h1 id="heading1" className="font-bold text-3xl underline decoration-[#FFFF00]">ALL Projects</h1>
          <button 
            id="vanilla_btn1" 
            className={`whitespace-nowrap bg-[#FFFF00] px-5 py-2 rounded-lg ${loading ? "text-yellow-600" : ""} ${Array.isArray(webpagesToShow) && webpagesToShow.length > 0 ? "text-gray-400" : "animate-scale"}`}
            onClick={addWebpages}
            disabled={loading}
          >
            {loading
              ?<div className="flex gap-2 items-center">
                <AiOutlineLoading3Quarters className="animate-spin" />
                <span>Loading...</span>
              </div>
              :'Start Course'
            }
          </button>
        </div>

        <div id="vanilla_div3" className="flex gap-12 flex-wrap justify-around">
          {webpagesToShow.map((webpage, index) => (
            <div key={index} className="vanilla_div4 text-sky-700 bg-[#fefe7b] shadow-md shadow-gray-500">
              <a href={webpage.link} target="_blank" rel="noopener noreferrer" className="vanilla_webpageLinks">
                <div className="flex flex-col gap-3 items-center pb-1">
                  <iframe
                    src={webpage.link}
                    width="350px"
                    height="200px"
                    className="webpage"
                    title={webpage.sp}
                  />
                  <p className="vanilla_heading2">{webpage.p}</p>
                  <span className="vanilla_heading2">{webpage.sp}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div id="vanilla_footer" className="bg-[#FFFF00] flex gap-5 justify-around flex-wrap p-8">
        <ul className="flex flex-col gap-1">
          <h1 className="tracking-wider font-semibold text-3xl">Manav Jain</h1>
          <li>{data["my info"]?.field}</li>
          <li className="mt-5">
            <Link to={data["my info"]?.portfolio} className="text-2xl hover:border-b-2">My Portfolio</Link>
          </li>
        </ul>

        <ul className="flex flex-col items-center gap-5">
          <li className="font-semibold text-2xl border-b">Projects</li>
          <li><Link to={data?.projects["Reactjs Projects"]?.link} className="hover:border-b-2">React Projects</Link></li>
          <li><Link to={data?.projects["Machine Learning Projects"]?.link} className="hover:border-b-2">ML Projects</Link></li>
          <li><Link to={data["my info"]?.allProjects} className="hover:border-b-2">More Projects</Link></li>
        </ul>

        <ul className="flex flex-col gap-5">
          <li className="font-semibold text-2xl border-b">Let's be social</li>
          <li className="flex gap-5 justify-center">
            <Link to={data["my info"]?.social?.github}><FaGithub className="size-6 hover:text-white" /></Link>
            <Link to={data["my info"]?.social?.instagram}><FaInstagram className="size-6 text-pink-600 hover:bg-pink-600 hover:text-white hover:rounded-lg" /></Link>
            <Link to={data["my info"]?.social?.linkedin}><FaLinkedin className="size-6 text-blue-600 hover:text-white hover:bg-blue-600" /></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}