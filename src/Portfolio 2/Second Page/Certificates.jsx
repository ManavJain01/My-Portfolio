// Importing certificates
import python from '../../certificates/Python for DS, AI & Dev-IBM.png'
import microservicesAndServerless from '../../certificates/App-Dev-Using-Microservices-&-Serverless-IBM.png'
import cloudComputing from '../../certificates/Cloud-Computing-IBM.png'
import django from '../../certificates/Django-Application-Development-IBM.png'
import PyAndFlask from '../../certificates/Dev-AI-Apps-with-Py-&-Flask-IBM.png'
import DockerKubernetesAndOpenShift from '../../certificates/Intro-to-Containers-with-Docker-Kubernetes-IBM.png'

// Importing Framer Motion
import { motion } from "framer-motion"

// Importing React Packages
import { useState } from 'react'

export default function Certificates() {
  // Array of my certificates
  const certificates = [
    {
      certificate: microservicesAndServerless,
      link: ""
    },
    {
      certificate: DockerKubernetesAndOpenShift,
      link: ""
    },
    {
      certificate: cloudComputing,
      link: ""
    },
    {
      certificate: PyAndFlask,
      link: ""
    },
    {
      certificate: django,
      link: ""
    },
    {
      certificate: python,
      link: ""
    }
  ]

  // UseState
  const [certi, setCerti] = useState("")

  return (
    <div className="min-h-lvh px-10 pt-28 flex flex-col gap-20 items-center justify-between">
      <h1 className="text-4xl font-bold">Certificates</h1>
      
      <div className="w-full md:px-10 flex gap-8 items-center justify-end xl:justify-around">
        {certi
          ?<motion.img
            src={certi.certificate}
            alt="gif"
            whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:-100}} transition={{duration: 1}}
            className="hidden xl:block h-[35rem]" />
          :<motion.img
            src="https://cdn.dribbble.com/users/1842274/screenshots/9823992/media/f169b7feb6edb1b7c324d3666f0f1360.gif"
            alt="gif"
            whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:-100}} transition={{duration: 1}}
            className="hidden xl:block h-[35rem]" />
        }

        {/* Certificates */}
        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:100}} transition={{duration: 1}} className="h-[50rem] flex flex-col gap-10 overflow-hidden">{
          certificates.map((e,i) => {
            return(
              <div key={i}>
                <img
                  src={e.certificate}
                  alt="certificates"
                  onClick={() => setCerti({certificate: e.certificate, link: e.link})}
                  className="h-64 cursor-pointer" />
              </div>
            )
          })  
        }</motion.div>
      </div>
    </div>
  )
}