// Importing React Icons
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { SiBuymeacoffee } from "react-icons/si";


// Importing local files
import data from '../../../Data/api.json'

// Importing React Packages
import { Link } from "react-router-dom";

export default function DetailCard({morphism}) {
  return (
    <div className={`relative w-[350px] p-8 flex flex-col items-center justify-center rounded-lg ${morphism.outset}`}>
      <Link to="/"><FaArrowLeft className="absolute top-7 left-5 text-gray-500" /></Link>
      
      <Link to={data["my info"].portfolio} className="group absolute top-7 right-5">
        <HiOutlineDotsVertical className=" text-gray-500 size-5" />
        <div className={`z-10 hidden absolute top-8 -right-12 font-semibold text-blue-700 bg-white group-hover:block px-5 py-2 rounded-lg ${morphism.outset} whitespace-nowrap`}>My Portfolio</div>
      </Link>

      <div className={`w-[130px] h-[130px] rounded-full ${morphism.outset} ${'hover:' + morphism.full_inset}`}>
        <img src={data["my info"].img} alt="dp" className="relative top-2 left-2 size-[87%] rounded-full" />
      </div>
      
      <div className="font-semibold text-lg flex flex-col items-center gap-3">
        <span className="text-2xl">{data['my info'].name}</span>
        <span className="text-blue-800">{data['my info'].field}</span>
        <section className="w-full flex justify-center gap-5">
          <Link to={data["my info"].social.github} className={`p-1 rounded-full ${morphism.outset} ${'hover:' + morphism.full_inset}`}><FaGithub className="size-7" /></Link>
          <Link to={data["my info"].social.linkedin} className={`p-1 rounded-full ${morphism.outset} ${'hover:' + morphism.full_inset}`}><CiLinkedin className="size-7 text-blue-600" /></Link>
          <Link to={data["my info"].social.leetcode} className={`p-1 rounded-full ${morphism.outset} ${'hover:' + morphism.full_inset}`}><SiLeetcode className="size-7 text-yellow-600" /></Link>
        </section>

        <Link to={data["my info"].buymyacoffee} className={`group text-yellow-600 flex items-center gap-3 px-5 py-2 rounded-lg ${morphism.outset} ${'hover:' + morphism.full_inset}`}>
          <span className="group-active:invisible">Buy Me A Coffee</span>
          <SiBuymeacoffee className="group-active:invisible size-7" />
        </Link>
      </div>
    </div>
  )
}