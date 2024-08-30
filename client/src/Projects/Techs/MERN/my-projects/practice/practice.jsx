import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

function practice(){
  // useState
  const [data, setData] = useState()

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_SERVER_LOCATION}/practice`)
    .then(result => result.data.data)
    .then(result => {
      console.log(result);
      setData(result);
    })
    .catch(err => console.log(err))

  },[])

  return (
    <div className='h-[58vh] flex flex-col justify-center'>
      <div className='flex justify-around items-center'>
        <Link to={""} className='bg-blue-600 text-white px-5 py-1 rounded-lg hover:bg-blue-800'>Practice</Link>
        <Link to={"testing"} className='bg-blue-600 text-white px-5 py-1 rounded-lg hover:bg-blue-800'>Testing</Link>
      </div>

      <div className='flex justify-center items-center m-20 text-2xl'>
        This Page is requesting to server at /practice
        {data?.html}
      </div>
    </div>
  )
}

export default practice