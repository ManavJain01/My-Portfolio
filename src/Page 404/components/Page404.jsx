// Importing React Packages
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'

// Importing Objects
import { Objects } from './Objects'

function Page404(){
  // Variables
  const min = 0
  const max = Objects.length - 1

  // UseStates
  const [random, setRandom] = useState(getRandom())
  const [goBack, setGoBack] = useState(false)

  // Functions
  function getRandom(){
    const num = Math.round(Math.random() * (max - min) + min)

    return num;
  }

  // UseEffect
  useEffect(() => {
    function WhyNotGoBack(){
      setTimeout(() => setGoBack(true), 10000)
    }

    WhyNotGoBack();
  }, [])

  return(
    <>
      <div className="min-h-lvh pt-32 bg-gray-300 flex flex-col space-y-6 text-center"> 
        <span className={`text-4xl text-red-700 ${goBack ? "flex justify-center" : "hidden"}`}>Why are you not going back!!!</span>
        
        <h1 className="text-5xl text-gray-600">404</h1>
        <span className="text-7xl text-gray-500">Page Not Found</span>
        <span className="text-lg text-gray-500">The Page you are looking for doesn't exist or an error occurred.
        Go back !</span>
        <Link to="/" className="text-blue-700 hover:text-blue-800">Go To Portfolio Page.</Link>

        <div className="text-3xl flex flex-col gap-6 items-center">
          <h2 className="text-green-700">Fun Facts</h2>
          <p className="text-orange-600">{Objects[random]?.p}</p>
          <button onClick={() => setRandom(getRandom())} className="w-fit text-red-700 px-5 py-1 rounded-lg hover:shadow-inner hover:shadow-gray-400">More...</button>
        </div>

      </div>
    </>
  )
}

export default Page404;