// Importing React Icons
import { AiFillOpenAI } from "react-icons/ai";
import { SiVercel } from "react-icons/si";
import { SiGooglegemini } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { AiOutlineGoogle } from "react-icons/ai";

// Importing React Packages
import { Link } from "react-router-dom"

export default function MainContent() {
  return (
    <div className="relative flex flex-col gap-5 w-full">
      <p className=" absolute -top-16 font-extrabold text-2xl hidden md:block">Ai Dashboard</p>
      <div className="flex gap-5 flex-col lg:flex-row">
        {/* OpenAi */}
        <Link to="openai" className="hover:text-sky-600 flex flex-col gap-2 items-center justify-center w-full lg:w-72 h-48 lg:h-36 p-5 rounded-xl shadow-ai-shadow2 lg:shadow-ai-shadow hover:shadow-none duration-500">
          <span className="tracking-widest font-bold text-4xl">Open Ai</span>
          <p>Open Ai Related Projects</p>
        </Link>
        {/* Gemini */}
        <Link to="gemini" className="hover:text-sky-600 flex flex-col gap-2 items-center justify-center w-full lg:w-72 h-48 lg:h-36 p-5 rounded-xl shadow-ai-shadow2 lg:shadow-ai-shadow hover:shadow-none duration-500">
          <span className="tracking-widest font-bold text-4xl">Gemini</span>
          <p>Gemini Related Projects</p>
        </Link>
        {/* Vercel Ai */}
        <Link to="" className="hover:text-sky-600 flex flex-col gap-2 items-center justify-center w-full lg:w-72 h-48 lg:h-36 p-5 rounded-xl shadow-ai-shadow2 lg:shadow-ai-shadow hover:shadow-none duration-500">
          <span className="tracking-widest font-bold text-4xl">Vercel Ai</span>
          <p>Vercel Related Projects</p>
        </Link>
      </div>

      {/* Image Generator */}
      <h1 className="tracking-wider font-bold text-2xl">Ai Image Generator</h1>
      <Link to="img-generator" className="hover:text-sky-600 flex gap-10 items-center justify-around w-full h-60 p-5 rounded-xl shadow-ai-shadow2 hover:shadow-none duration-500">
        <AiFillOpenAI className="size-10 md:size-20" />
        <SiVercel className="size-10 md:size-20" />
        <SiGooglegemini className="size-10 md:size-20" />
        <VscAzure className="size-10 md:size-20" />
        <AiOutlineGoogle className="size-10 md:size-20" />
      </Link>
      
      {/* Chat With Ai */}
      <h2 className="tracking-wider font-bold text-2xl">Chat With Ai</h2>
      <Link to="chatai" className="hover:text-sky-600 flex gap-10 items-center justify-around md:w-[125%] lg:w-full h-40 p-5 rounded-xl shadow-ai-shadow2 hover:shadow-none duration-500">
        <AiOutlineGoogle className="size-10 md:size-20" />
        <VscAzure className="size-10 md:size-20" />
        <SiGooglegemini className="size-10 md:size-20" />
        <SiVercel className="size-10 md:size-20" />
        <AiFillOpenAI className="size-10 md:size-20" />
      </Link>
    </div>
  )
}