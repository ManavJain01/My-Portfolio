// Importing React Icons
import { AiFillOpenAI } from "react-icons/ai";
import { SiGooglegemini } from "react-icons/si";

// Importing React Packages
import { Link } from "react-router-dom"

export default function ChatAi() {
  return (
    <div className="relative flex flex-col gap-10 w-full">
      <p className="absolute -top-16 font-extrabold text-2xl hidden md:block">ChatAi</p>

      <Link to="" className="hover:text-sky-600 flex gap-10 items-center justify-center flex-wrap h-48 p-5 rounded-xl shadow-ai-shadow2 hover:shadow-none duration-500">
        <AiFillOpenAI className="size-10 md:size-20" />
        <span className="font-bold text-4xl">ChatGpt</span>
      </Link>

      <Link to="" className="hover:text-sky-600 flex gap-10 items-center justify-center flex-wrap h-48 p-5 rounded-xl shadow-ai-shadow2 hover:shadow-none duration-500">
        <SiGooglegemini className="size-10 md:size-20" />
        <span className="font-bold text-4xl">Gemini 2.0</span>
      </Link>
    </div>
  )
}
