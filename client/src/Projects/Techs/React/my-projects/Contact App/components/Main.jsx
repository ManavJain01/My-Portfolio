import contact from '../Images/contact.png'

import {useEffect, useState} from 'react'
import {collection, getDocs} from 'firebase/firestore'
// import {collection, getDocs, query, where, get, then} from 'firebase/firestore'
import {db} from '@/config/firebase'

import SearchInput from './SearchInput'
import Contactlists from './ContactLists'

function Main(){
  const [show1, setShow1] = useState("flex");
  const [show2, setShow2] = useState("none");
  const [contacts, setContacts]   = useState([]);
  const [tempContacts, setTempContacts]   = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try{
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return{
            id:doc.id,
            ...doc.data(),
          }
        })
        setContacts(contactLists)
        setTempContacts(contact)
      } catch(error) {console.log("error")};
    };

    getContacts();
    showFunc2();
  }, []);


  function showFunc1(){
    let section = document.getElementById("isShow1");

    if(show1 == "flex"){  
      setShow1("none");
    }else{
      setShow1("flex");
    }

    section.style.display = show1
  }

  function showFunc2(){
    let section = document.getElementById("isShow2");

    if(contacts == []){
      setShow2("none");
    }else{
      setShow2("flex");
    }
    section.style.display = show2
  }

  return(
    <>
      <div className="mt-3 w-[45vw] h-[6vh] min-w-[17rem] max-w-[20rem]">
        <SearchInput setShow1={setShow1} showFunc1={showFunc1} /*setContacts={setContacts}*/ />


        <section id="isShow2" className="hidden h-[70vh] /*flex*/ justify-center items-center text-white">
          <img src={contact} alt="contact"></img>
          <h1 className="font-bold text-xl ml-4">No Contact Found</h1>
        </section>

        <section>
        {
          contacts.map((contact) => (
            <Contactlists key={contact.id} contact={contact} showFunc1={showFunc1} />
          ))
        }
      </section>
      </div>
    </>
  )
}

export default Main;