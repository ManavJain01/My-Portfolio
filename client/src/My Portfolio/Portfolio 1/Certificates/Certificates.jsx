// Importing React Packages
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Importing Local Files
import SQL from '@/certificates/SQL-HackerRank.png'
import HCJIBM from '@/certificates/HTML-CSS-JS-IBM.png'
import ReactIBM from '@/certificates/React-IBM.png'
import BackEnd from '@/certificates/Node-Express-IBM.png'
import Github from '@/certificates/Github.png'

// Importing Framer Motion
import { motion } from "framer-motion"

export default function Certificates({ darkTheme }) {
  // Array of Certificates
  const certiArr = [
    {
      certificate:BackEnd,
      link: "https://www.coursera.org/account/accomplishments/verify/JAJL7T47W8ZZ"
    }, 
    {
      certificate:ReactIBM,
      link: "https://www.coursera.org/account/accomplishments/verify/L288ZU9JPNWK"
    },
    {
      certificate:SQL,
      link: "https://www.hackerrank.com/certificates/d6e5f2febbfa"
    },
    {
      certificate:Github,
      link: "https://www.coursera.org/account/accomplishments/verify/AG9RNGQS4JWB"
    },
    {
      certificate:HCJIBM,
      link: "https://www.coursera.org/account/accomplishments/verify/2A53HMMQX2FY"
    }]

  // UseStates
  const [selectCerti, setSelectCerti] = useState({certificate: certiArr[0].certificate, link:certiArr[0].link})

  // Carousel responsive
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className={`flex flex-col gap-20 py-20 pb-96`}>
      {/* Certificates */}
      <h1 className="text-4xl md:text-6xl font-semibold">Certificates</h1>

      {/* Certificate */}
      <div>
        <Link to={selectCerti.link} className={`h-[40rem] hidden sm:flex shadow-2xl cursor-none ${darkTheme ? "shadow-purple-400" : "shadow-gray-400"}`}>
          <img
            src={selectCerti.certificate}
            alt="ibm"
            className={`w-full`} />
        </Link>
      </div>

      {/* Carousal */}
      <Carousel responsive={responsive}>
      {
        certiArr.map((e, i) =>{
          return(
            <img
              key={i}
              src={e.certificate}
              alt="ibm"
              onClick={() => setSelectCerti({certificate: e.certificate, link: e.link})}
              className={`h-72 w-80 shadow-2xl ${darkTheme ? "shadow-purple-400" : "shadow-gray-400"}`} />
          )
        })
      }
      </Carousel>
    </div>
  )
}