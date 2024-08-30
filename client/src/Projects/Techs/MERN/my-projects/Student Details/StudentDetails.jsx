import Search from './Search'

import { useEffect, useState } from 'react'
import axios from 'axios'

function StudentDetails(){
  const [users, setUsers] = useState("")

  useEffect(() => {
    try {
      axios.get(`${import.meta.env.VITE_SERVER_LOCATION}/StudentDetails`)
      .then(users => setUsers(users.data.data))
      .catch(err => alert(err))
    } catch (error) {
      alert(error);
    }
  }, [])

  return (
    <div className="min-h-[56vh]">
      <Search />

      <div className='flex m-5'>
        {`Try Searching for =>`}
        
        
        <div className='flex gap-2 flex-wrap text-blue-700'>
          {
            // console.log(users[0])
            Array.isArray(users) && users.map(user => <div key={user._id}>{user.name}, </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default StudentDetails