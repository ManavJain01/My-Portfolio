// Importing React Icons
import { TbMessageChatbotFilled } from "react-icons/tb";

// Importing React Packages
import { Link } from "react-router-dom"
export default function Gemini() {
  return (
    <div className="relative flex flex-col gap-10 w-full">
      <p className="absolute -top-16 font-extrabold text-2xl hidden md:block">Gemini</p>

      <Link to="" className="hover:text-sky-600 flex gap-10 items-center justify-center h-48 p-5 rounded-xl shadow-ai-shadow2 hover:shadow-none duration-500">
        <TbMessageChatbotFilled className="size-10 md:size-20" />
        <span className="font-bold text-4xl">Gemini 2.0</span>
      </Link>
    </div>
  )
}