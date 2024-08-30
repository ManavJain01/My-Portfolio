import axios from 'axios'

import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'

function UpdateUser(){
  const {id} = useParams()
  const navigate = useNavigate()

  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [age, setAge] = useState(0)

  useEffect(()=>{
    axios.get('http://localhost:5000/UsersInfo/getUser/' + id)
    .then(result => {
      console.log(result)

      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err => console.log(err))
  },[])
  
  function Update(e){
    e.preventDefault()
    
    axios.put(`${import.meta.env.VITE_SERVER_LOCATION}/UsersInfo/updateUser/` + id, {name, email, age})
    .then(result => {
      console.log(result)
      navigate('/UsersInfo')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="flex h-[60vh] bg-blue-400 justify-center items-center">
      <div className="w-[45rem] bg-white rounded p-3">
        <form onSubmit={Update} className="flex flex-col gap-5">
          <h2 className="font-semibold text-2xl">Update User</h2>
          <div className="my-5 flex flex-col">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="text-gray-500 focus:text-black py-1 px-4 border-2 border-gray-500 rounded-md" />
          </div>

          <div className="mb-2 flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="text-gray-500 focus:text-black py-1 px-4 border-2 border-gray-500 rounded-md" />
          </div>

          <div className="mb-2 flex flex-col">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              value={age}
              onChange={(e)=>setAge(e.target.value)}
              className="text-gray-500 focus:text-black py-1 px-4 border-2 border-gray-500 rounded-md" />
          </div>

          <button className="bg-green-800 text-white py-1 px-5 rounded-md">Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser