import search from '../Images/search.png'
import plus from '../Images/plus.png'
import cross from '../Images/cross.jpg'

import {collection, addDoc, updateDoc } from 'firebase/firestore'
import {db} from '@/config/firebase'

function SearchInput(e){

  async function addContact(values){
    let newName = values.target[0].value
    let newEmail = values.target[1].value

    const newContact = {Name:newName, Email:newEmail}

    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, newContact);
    } catch (error) {
      console.log(error)
    }
  }

  async function updateContact(values){
    e.showFunc1()
    let newName = values
    let newEmail = values

    const newContact = {Name:newName, Email:newEmail}

    try {
      const contactRef = collection(db, "contacts", e.id);
      await updateDoc(contactRef, newContact);
    } catch (error) {
      console.log(error)
    }
  }

  function searchContact(e){
    console.log(e.target.value)
  }

  return(
    <>
      <section className="flex relative">
          <img src={search} alt="search" className="w-6 object-contain absolute top-2 left-2"></img>
          <input onChange={searchContact} type="text" placeholder="Search Contact" className="bg-transparent flex-grow pl-10 py-1 border-2 border-white rounded-lg"></input>
          <button onClick={() => e.showFunc1()}><img src={plus} alt="plus" className="w-10 object-contain bg-white rounded-full p-2 mx-2"></img></button>
      </section>

      <section id="isShow1" className="hidden bg-white fixed top-28 sm:top-36 p-5">
          <section>
            <button onClick={() => e.showFunc1()}><img src={cross} className="w-7 absolute top-2 right-2"></img></button>
            <form onSubmit={(values) => addContact(values)} className="flex flex-col">
              <label htmlFor="Name" className="my-1">Name</label>
              <input type="text" id="Name" className="h-8 border-2 border-black px-1"></input>
              <label htmlFor="Email" className="my-2">Email</label>
              <input type="email" id="Email" className="h-8 border-2 border-black px-1"></input>
              <button onClick={() => {window.location.reload(true)}} className="text-end bg-yellow-400 border-2 border-black rounded-lg ml-[10rem] mt-4 px-3 py-1 focus:bg-green-600">Add Contact</button>
            </form>
          </section>
          {/* <section className="h-[50vh] w-screen backdrop-blur absolute top-0 z-10" /> */}
        </section>

    </>
  )
}

export default SearchInput