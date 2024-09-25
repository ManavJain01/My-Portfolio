// Importing React Icons
import { MdOutlineImageSearch } from "react-icons/md";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { FaRobot } from "react-icons/fa6";

// Importing React Packages
import { Link } from "react-router-dom"

export default function Index() {
  return (
    <div className="relative flex flex-col gap-10 w-full">
      <p className="absolute -top-16 font-extrabold text-2xl hidden md:block">Open Ai</p>
      
      <Link to="img-generator" className="hover:text-sky-600 flex gap-10 items-center justify-center flex-wrap h-48 p-5 rounded-xl shadow-ai-shadow2 hover:shadow-none duration-500">
        <MdOutlineImageSearch className="size-10 md:size-20" />
        <span className="font-bold text-4xl">Ai Image Generator</span>
      </Link>

      <Link to="" className="hover:text-sky-600 flex gap-10 items-center justify-center h-48 p-5 rounded-xl shadow-ai-shadow2 hover:shadow-none duration-500">
        <TbMessageChatbotFilled className="size-10 md:size-20" />
        <span className="font-bold text-4xl">ChatGPT</span>
      </Link>

      <Link to="" className="hover:text-sky-600 flex gap-10 items-center justify-center h-48 p-5 rounded-xl shadow-ai-shadow2 hover:shadow-none duration-500">
        <FaRobot className="size-10 md:size-20" />
        <span className="font-bold text-4xl">Talking Bot</span>
      </Link>
    </div>
  )
}