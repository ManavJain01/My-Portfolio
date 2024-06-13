// Importing React Icons
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";


// Importing Local Files
import HCJIBM from './certificates/HTML-CSS-JS-IBM.png'
import ReactIBM from './certificates/React-IBM.png'
import BackEnd from './certificates/Node-Express-IBM.png'
import Github from './certificates/Github.png'

export default function MyCarousel() {

  // Array of Certificates
  const certiArr = [BackEnd, ReactIBM, HCJIBM, Github]

  return (
    <div className="relative flex items-center overflow-x-hidden">
      {/* Left Arrow */}
      <div className="z-20 absolute h-full px-5 flex items-center backdrop-blur-sm">
        <FaArrowCircleLeft className="size-8 /bg-red-400 text-gray-600" />
      </div>

      {/* Certificates */}
      <div className="w-full flex gap-20 justify-around">
        {
          certiArr.map((e, i) =>{
            return(
              <img
                key={i}
                src={e}
                alt="ibm"
                className={`h-72 w-80 shadow-2xl ${darkTheme ? "shadow-purple-400" : "shadow-gray-400"}`} />
            )
          })
        }
      </div>

      {/* Right Arrow */}
      <div className="z-20 absolute right-0 h-full px-5 flex items-center backdrop-blur-sm">
        <FaArrowCircleRight className="size-8 h-full text-gray-600" />
      </div>
    </div>
  )
}