import { Link } from 'react-router-dom'

function Header(){
  return(
    <div className="h-[20vh] bg-[linear-gradient(#b0c3f3,rgba(196,196,196,0))] text-blue-600 flex flex-col justify-center gap-5">
      <h1 className="font-bold text-5xl text-center w-fit mt-10 mx-auto px-3 pb-4 rounded-2xl shadow-reverse_clayMorphism hover:scale-[120%] duration-500">My MERN Projects</h1>
      
      <nav className="mx-5 text-xl font-semibold">
        <ul className="flex justify-end gap-5">
          <li className="hover:text-blue-900 p-2 rounded-lg shadow-reverse_clayMorphism"><Link to="/">Home</Link></li>
          <li className="hover:text-blue-900 p-2 rounded-lg shadow-reverse_clayMorphism"><Link to="/practice">Practice</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header