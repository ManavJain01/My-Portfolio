import { useState } from "react"

import axios from 'axios'

function Search(){
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState([])

  function search(event){
    event.preventDefault();

    if(name.length > 0) try {
      axios.post(`${import.meta.env.VITE_SERVER_LOCATION}/StudentDetails/user/findOne/` + name)
      .then(res => {
        if (res.data.data == "User not found") {
          alert("User not Found")
          setAddress("")
          setPhone("")
        }else{
          setAddress(res.data.data.address)
          setPhone(res.data.data.phone)
        }
      })
      .catch(err => console.log(err))
    } catch (error) {
      alert(error);
    }
    else alert('Little Advise, try searching something!!!')
  }

  return (
    <div>
      <h1 className="text-center font-semibold text-3xl m-5">Student Details</h1>

      <div>
        <form className="m-5">
          <div className="flex flex-col bg-red-300 p-3 rounded-md">
            <label htmlFor="student" className="text-red-700">Student Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(event) => {
                setName(event.target.value)
              }}
              className="px-3 py-1 border-2 border-gray-400 rounded-md" />
          </div>

          <button onClick={search} className="bg-blue-600 text-white py-1 px-4 my-8 rounded-md hover:bg-blue-800">
            Search
          </button>
        </form>

        <div className="flex flex-col bg-blue-200 text-blue-700 p-3 m-5 rounded-md">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            placeholder="Enter Address"
            value={address}
            disabled={true}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            className="bg-white py-1 px-3 border-2 border-gray-400 rounded-md" />
        
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            disabled={true}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            className="bg-white py-1 px-3 border-2 border-gray-400 rounded-md" />
        </div>
      </div>
    </div>
  )
}

export default Search