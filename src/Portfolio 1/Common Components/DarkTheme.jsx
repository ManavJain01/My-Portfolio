// Importing React Icons
import { GoSun } from "react-icons/go";
import { IoMoonSharp } from "react-icons/io5";

function DarkTheme({ darkTheme, setDarkTheme }){
  function Theme(){
    if(darkTheme == false){
      setDarkTheme(true);
      localStorage.setItem("theme", true);
    }else{
      setDarkTheme(false);
      localStorage.removeItem("theme");
    }
  }

  return (
    <div>
      <div
        onClick={() => Theme()}
        className={`w-14 h-7 ${darkTheme ? "bg-blue-500" : "bg-[#a8a6a6]"} rounded-full`}>
          <div
            className={`w-7 h-6 relative top-[2px] ${darkTheme ? "left-7" : "left-0"} bg-white pt-[2px] pl-1 rounded-full duration-1000`}>
            {darkTheme
              ?<IoMoonSharp className="z-10 text-black" />
              :<GoSun className="z-10 text-yellow-600" />
            }
          </div>
      </div>
    </div>
  )
}

export default DarkTheme;