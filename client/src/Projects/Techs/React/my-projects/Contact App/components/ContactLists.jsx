import onOff from '../Images/on-off.png'
import bin from '../Images/bin.png'
import user from '../Images/user.png'

import { deleteDoc, doc } from 'firebase/firestore'
import {db} from '@/config/firebase'


function Contactlists({ contact }){
  async function deleteContact(id){
    try {
      await deleteDoc(doc(db, "contacts", id));
      window.location.reload(true)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div key={contact.id} className="mt-5">
        <div className="flex justify-between p-2 bg-yellow-200 rounded-lg">
          <img src={user} className="w-8 object-contain"></img>

          <section className="flex-grow pl-2">
            <h1 className="text-md font-semibold">{contact.Name}</h1>
            <p className="text-xs">{contact.Email}</p>
          </section>

          <section className="flex">
            <button><img src={onOff} className="w-8 object-contain mr-2"></img></button>
            <button onClick={() => deleteContact(contact.id)}><img src={bin} className="w-8 object-contain"></img></button>
          </section>
        </div>
      </div>
    </>
  )
}

export default Contactlists;