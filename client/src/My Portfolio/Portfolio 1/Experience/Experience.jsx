// Importing local images
import CodSoft from '@/Experience/Image/CodSoft Internship.png'

// Importing Framer Motion
import { motion } from "framer-motion"

export default function Experience({ darkTheme }) {
  const myExperience = [
    {
      company: "CodeSoft",
      period: "1 Month Internship",
      joining: "15 June 2024",
      img: CodSoft,
    }
  ]

  return (
    <div className={`py-20 pb-96 flex flex-col gap-20`}>
      {/* Experience */}
      <h1 className="text-6xl font-semibold text-center md:text-start">My Experiences</h1>
      <div className="flex flex-wrap">
        {myExperience.map((e,i) => {
          return(
            <div key={i} className={`flex flex-col rounded-md shadow-lg ${darkTheme ? "bg-purple-700 shadow-purple-400" : "text-purple-700"}`}>
              <img
                src={e.img}
                alt={`my Experience ${i+1}`}
                className="h-64" />
              
              <div className="text-2xl font-semibold py-2 px-10 flex flex-col justify-center items-center">
                <h2>{e.company}</h2>
                <span className="text-center">{e.period}</span>
                <span>{e.joining}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Not using now
{/* whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} */}
// whileInView={{opacity:1, scale:"100%"}} initial={{opacity:0, scale:0}} transition={{duration:1, delay:`0.${i}`}}