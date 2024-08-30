import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CreateUser(){
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()


  function Submit(e){
    e.preventDefault();
    console.log("going");
    axios.post(`${import.meta.env.VITE_SERVER_LOCATION}/UsersInfo/createUser`, {name, email, age})
    .then(result => {
      console.log(result)
      navigate('/UsersInfo')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="flex h-[60vh] bg-blue-400 justify-center items-center">
      <div className="w-[45rem] bg-white rounded p-3">
        <form onSubmit={Submit} className="flex flex-col gap-5">
          <h2 className="font-semibold text-2xl">Add User</h2>
          <div className="my-5 flex flex-col">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e)=>setName(e.target.value)}
              className="py-1 px-4 border-2 border-gray-500 rounded-md" />
          </div>

          <div className="mb-2 flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              onChange={(e)=>setEmail(e.target.value)}
              className="py-1 px-4 border-2 border-gray-500 rounded-md" />
          </div>

          <div className="mb-2 flex flex-col">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              onChange={(e)=>setAge(e.target.value)}
              className="py-1 px-4 border-2 border-gray-500 rounded-md" />
          </div>

          <button className="bg-green-800 text-white py-1 px-5 rounded-md">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser