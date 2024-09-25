// Importing React Icons
import { AiFillOpenAI } from "react-icons/ai";

// Importing React Packages
import { Link } from "react-router-dom"
import { useState } from "react";

import Home from './Home'
import CreatePost from './CreatePost'

export default function ImageGenerator() {
  // useState
  const [create, setCreate] = useState(false);

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className='flex justify-between items-center gap-10 bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to="/" className="flex items-center">
          <AiFillOpenAI className="size-16" />
          <p className="font-bold text-2xl">Open AI</p>
        </Link>
        <button
          onClick={() => setCreate(!create)}
          className="border-2 border-slate-950 button text-slate-900 px-4 py-3 rounded-md hover:bg-slate-900 hover:text-white">
          {create ? "Back to Galary" : "Create Post"}
        </button>
      </div>

      {create
        ?<CreatePost /> 
        :<Home />
      }
    </div>
  )
}