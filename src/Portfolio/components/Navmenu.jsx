import Button from './Button'

function Navmenu(){
  return(
    <>
      <ul className="md:hidden z-20 bg-black overflow-y-scroll">
        <li><Button className="pl-0 w-full text-left" name="navbarBtn" id="Home" /></li>
        <hr className="my-3 border-gray-700" />
        <li><Button className="pl-0 w-full text-left" name="navbarBtn" id="About" /></li>
        <hr className="my-2 border-gray-700" />
        <li><Button className="pl-0 w-full text-left" name="navbarBtn" id="Skills" /></li>
        <hr className="my-2 border-gray-700" />
        <li><Button className="pl-0 w-full text-left" name="navbarBtn" id="Contact" /></li>
        <hr className="mt-2 border-black" />
      </ul>
    </>
  )
}

export default Navmenu;