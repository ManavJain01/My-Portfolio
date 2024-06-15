// Importing local images
import jiwaji from './Images/jiwaji.webp'
import nit from './Images/NIT Raipur.png'

// Importing Framer Motion
import { motion } from "framer-motion"

function Education(){
  // My Education Details
  const object = [
    {
      img: nit,
      college: "National Institute of Technology",
      degree: "Master in Computer Application",
      duration: "September 2022 - April 2025",
    },
    {
      img: jiwaji,
      college: "Jiwaji University",
      degree: "Bachelor in Computer Application",
      duration: "September 2018 - April 2021",  
    }
  ]


  return (
    <div className='flex flex-col gap-10'>
      {
        // Iterating my education details object
        object.map((e,i) => {
          return(
            <motion.div key={e.college} whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:-100}} transition={{duration: 1, delay: `0.${i}`}} className='flex flex-col gap-3'>
              <div key={e.college} className="flex gap-5 flex-wrap">
                <img src={e.img} alt={e.college} className='size-36 rounded-full' />

                <div className="text-2xl flex flex-col gap-3">
                  <h1 className='text-3xl font-semibold'>{e.college}</h1>
                  <p>{e.degree}</p>
                  <p>{e.duration}</p>
                </div>
              </div>

              <hr className="w-[70%] h-[2px] bg-gray-400 border-none relative before:absolute before:top-0 before:content-[''] before:w-full before:h-[2px] before:bg-purple-700" />
            </motion.div>
          )
        })
      }
    </div>
  )
}

export default Education