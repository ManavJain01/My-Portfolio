// Importing React Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillOpenAI } from "react-icons/ai";
import { SiVercel } from "react-icons/si";
import { SiGooglegemini } from "react-icons/si";
import { TbCloudExclamation } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { BsFillCCircleFill } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";

// Importing React Packages
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react";

export default function Sidebar() {
  const navOptions = [
    {
      option: "Dashboard",
      link: "",
      logo: <MdSpaceDashboard className="size-5" />
    },
    {
      option: "Open Ai",
      link: "openai",
      logo: <AiFillOpenAI className="size-5" />
    },
    {
      option: "Vercel",
      link: "/",
      logo: <SiVercel className="size-5" />
    },
    {
      option: "Gemini",
      link: "gemini",
      logo: <SiGooglegemini className="size-5" />
    },
    {
      option: "Cloude Ai",
      link: "/",
      logo: <TbCloudExclamation className="size-5" />
    },
    {
      option: "Azure Ai",
      link: "/",
      logo: <VscAzure className="size-5" />
    },
    {
      option: "Crew Ai",
      link: "/",
      logo: <BsFillCCircleFill className="size-5" />
    },
    {
      option: "Settings",
      link: "settings",
      logo: <IoSettingsOutline className="size-5" />
    },
    {
      option: "New Login",
      link: "/",
      logo: <CiLogin className="size-5" />
    },
    {
      option: "Logout",
      link: "/",
      logo: <TbLogout2 className="size-5" />
    },
  ];

  // useState
  const [showNav, setShowNav] = useState(window.innerWidth > 768);

  // useEffect
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Functions
  const handleResize = () => {
    if(window.innerWidth > 768){
      setShowNav(true);
    }else{
      setShowNav(false);
    }
  };

  if(showNav) return (
    <div className={`${showNav ? "fixed left-0 bg-white z-10" : "hidden"} h-full md:relative md:flex flex-col gap-5`}>
      <section className="flex items-center gap-5 px-2 md:px-0">
        <div className="flex items-center gap-2">
          <img src="https://static.vecteezy.com/system/resources/previews/001/191/989/original/circle-logo-png.png" alt="logo" className="size-7" />
          <h1 className="font-semibold text-lg">Visionary<span className="text-orange-500">Bot</span></h1>
        </div>

        <button onClick={() => setShowNav(false)}><RxCross1 className="size-6 md:hidden" /></button>
      </section>

      <div className="font-semibold text-sm text-gray-500 flex flex-col items-center xl:w-48 h-full mt-5 md:mt-0 rounded-xl shadow-ai-shadow">
        {navOptions.map((e, i) =>{
          return(
            <NavLink key={i} to={e?.link} className={`relative ${e?.option === "Dashboard" ? "" : "aria-[current=page]:bg-[#848BC8] aria-[current=page]:bg-opacity-[20%]"} aria-[current=page]:text-sky-500 aria-[current=page]:before:absolute aria-[current=page]:before:content-[''] aria-[current=page]:before:left-0 aria-[current=page]:before:top-4 aria-[current=page]:before:bg-sky-500 aria-[current=page]:before:w-2 aria-[current=page]:before:h-5 flex items-center justify-center xl:justify-normal gap-3 w-full xl:pl-[20%] py-4 ${navOptions.length === i+1 && "mt-auto mb-10"}`}>
              {e?.logo}
              <span className="md:hidden xl:block">{e?.option}</span>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
  else return (
    <button onClick={() => setShowNav(true)} className="absolute md:relative h-fit">
      <GiHamburgerMenu className="size-8" />
    </button>
  )
}