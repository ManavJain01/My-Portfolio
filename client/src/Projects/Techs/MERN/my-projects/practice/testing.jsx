import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'


function testing(){
  useEffect(()=>{
    // axios.get(`${import.meta.env.VITE_SERVER_LOCATION}/practice/testing`)
    // .then(result => result.data.data)
    // .then(result => console.log(result))
    // .catch(err => console.log(err))


    axios.get(`https://beta.myupchar.com/api/medicine/search?api_key=API_KEY&name=MEDICINE_NAME&type=MEDICINE_TYPE&manufacturer=MANUFACTURER_NAME&category_id=CATEGORY_ID&page=PAGE_NUMBER`)
    // .then(result => result.data.data)
    .then(result => console.log(result))
    .catch(err => console.log(err))
  },[])

  return (
    <div className='h-[58vh] flex flex-col justify-center'>
      <div className='flex justify-around items-center'>
        <Link to={""} className='bg-blue-600 text-white px-5 py-1 rounded-lg hover:bg-blue-800'>Testing</Link>
        <Link to={"/practice"} className='bg-blue-600 text-white px-5 py-1 rounded-lg hover:bg-blue-800'>Practice</Link>
      </div>

      <div className='flex justify-center items-center m-20 text-2xl'>
        This Page is requesting to server at /practice/testing
      </div>
    </div>
  )
}

export default testing