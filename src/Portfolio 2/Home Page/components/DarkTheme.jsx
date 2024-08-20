// Importing React Icons
import { GoSun } from "react-icons/go";
import { IoMoonSharp } from "react-icons/io5";

export default function DarkTheme(props) {
  // Functions
  function getDarkTheme(){
    if(props.darkTheme == false){
      props.setDarkTheme(true)
      localStorage.setItem("theme", true);
    }else{
      props.setDarkTheme(false)
      localStorage.removeItem("theme");
    }
  }

  return (
    <div
      onClick={() => getDarkTheme()}
      className={`w-14 h-7 ${props.darkTheme ? "bg-blue-500" : "bg-[#a8a6a6]"} rounded-full cursor-pointer`}>
        <div
          className={`w-7 h-6 relative top-[2px] ${props.darkTheme ? "left-7" : "left-0"} bg-white pt-[2px] pl-1 rounded-full duration-700`}>
          {props.darkTheme
            ?<IoMoonSharp className="size-5 z-10 text-black" />
            :<GoSun className="size-5 z-10 text-yellow-600" />
          }
        </div>
    </div>
  )
}