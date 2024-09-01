import firebase from '../Images/firebase.svg'

function Header(){
  return(
    <>
      <div className="bg-white text-black w-[45vw] h-[6vh] max-w-[20rem] min-w-[17rem] mt-3 rounded-lg flex justify-center items-center whitespace-nowrap overflow-hidden">
        <img src={firebase} className="pr-2 w-7"></img>
        <h1 className="font-bold text-xl">Firebase Contact App</h1>
      </div>
    </>
  )
}

export default Header