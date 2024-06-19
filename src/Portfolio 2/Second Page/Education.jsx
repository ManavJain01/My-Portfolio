// Import local images
import nit from './Images/NIT Raipur.png'
import jiwaji from './Images/jiwaji.webp'

export default function Education() {
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
    <div className="flex flex-col gap-10">
      <h1 className="text-4xl">Education</h1>
      <div className="flex gap-10 flex-wrap">
        {object.map((e,i) => {
          return(
            <div key={i} className="bg-purple-600 py-5 flex flex-col gap-5 justify-center items-center rounded-md shadow-lg">
              <img src={e.img} alt="img" className="h-40 rounded-full" />

              <div className="px-5 flex flex-col gap-2">
                <p>{e.college}</p>
                <p>{e.degree}</p>
                <p>{e.duration}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}