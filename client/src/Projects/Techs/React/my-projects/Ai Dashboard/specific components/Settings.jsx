// Importing React Icons
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa6";

// Importing React Packages
import { useState, useEffect } from "react"

export default function Settings() {
  // useState
  const [darkTheme, setDarkTheme] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [userName, setUserName] = useState("Manav");
  const [selected, setSelected] = useState(localStorage.getItem("text-style") || "");

  // useEffect
  useEffect(() => {
    localStorage.setItem("text-style", selected);        
  }, [selected]);

  const handleChange = (e) => {
    const value = e.target.value;
    if(value === "remove") localStorage.removeItem("text-style");
    else setSelected(value);
  };

  const handleUsername = () => {
    if(userName !== "" && typeof userName === 'string' && userName.length < 10){
      localStorage.setItem("username", userName);
    }

    setEditUser(!editUser);
  }

  return (
    <div className="relative flex flex-col gap-10 w-full">
      <p className="absolute -top-16 font-extrabold text-2xl hidden md:block">Settings</p>

      <div className="flex gap-5 flex-col lg:flex-row">
        {/* Profile */}
        <div className="relative group hover:text-sky-600 flex gap-5 items-center justify-around w-full h-48 p-5 rounded-xl shadow-ai-shadow2 lg:shadow-ai-shadow hover:shadow-none duration-500">
          <p className="hidden group-hover:block absolute top-10 left-12 tracking-widest font-semibold group-hover:underline text-xl">Set UserName:</p>
          
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} disabled={!editUser} className="bg-transparent tracking-widest font-semibold group-hover:underline text-xl outline-none" />
          {editUser
            ?<button onClick={handleUsername} className="text-white group-hover:bg-sky-500 px-5 py-1 rounded-lg">Save</button>
            :<button onClick={() => setEditUser(!editUser)} className="text-white group-hover:bg-sky-500 px-5 py-1 rounded-lg">Edit</button>
          }

          <button onClick={() => localStorage.removeItem("username")} className="text-white group-hover:bg-sky-500 px-5 py-1 rounded-lg">Set Default</button>
          
          <p className="hidden group-hover:block absolute bottom-5 left-12 tracking-widest font-semibold text-yellow-500 text-sm">Username should not be empty or {'>'}= 10</p>
        </div>
    
        {/* DarkTheme */}
        <div className="flex flex-col gap-2 items-center justify-center w-full lg:w-72 h-48 lg:h-36 p-5 rounded-xl shadow-ai-shadow2 lg:shadow-ai-shadow hover:shadow-none duration-500">
          <button
            onClick={() => setDarkTheme(!darkTheme)}
            className="relative bg-gray-500 w-20 h-10 rounded-full">
              <div className={`absolute top-0 ${darkTheme ? "left-0" : "right-0"} flex items-center justify-center w-10 h-10 rounded-full`}>{darkTheme ? <FaMoon className="size-8 text-blue-400" /> : <IoIosSunny className="size-8 text-yellow-400" />}</div>
          </button>
        </div>
      </div>

      <div className="flex gap-5 flex-col lg:flex-row justify-center">
        {/* Font Size */}
        <div className="flex flex-col gap-2 items-center justify-center w-full lg:w-72 h-48 lg:h-36 p-5 rounded-xl shadow-ai-shadow2 lg:shadow-ai-shadow hover:shadow-none duration-500">
          <p className="font-semibold text-xl">Change Text Styles</p>
          <select
            value={selected}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            <option value="" disabled>
              Choose a style
            </option>
            <option value="font-sans" className="font-sans">
              Arial Font
            </option>
            <option value="font-mono" className="font-mono">
              Courier New Font
            </option>
            <option value="italic" className="italic">
              Italic Style
            </option>
            <option value="font-bold" className="font-bold">
              Bold Text
            </option>
            <option value="underline" className="underline">
              Underlined Text
            </option>
            <option value="text-xl" className="text-xl">
              Large Font Size
            </option>
            <option value="text-red-500" className="text-red-500">
              Red Text
            </option>

            <option value="remove" className="font-sans font-bold text-red-700">
              Remove Styles
            </option>
          </select>
        </div>

        {/* Notification */}
        <div className="group text-lg hover:text-sky-600 flex flex-col gap-5 justify-around w-full min-h-48 p-5 rounded-xl shadow-ai-shadow2 lg:shadow-ai-shadow hover:shadow-none duration-500">
          <div className="flex gap-5">
            <p className="font-semibold text-black">Admin:</p>
            <span>Hey, Bud! 👋</span>
          </div>

          <div className="flex gap-5">
            <p className="font-semibold text-black">Admin:</p>
            <span>"Welcome to VisinaryBot! We're excited to have you here. Explore our site and discover all the amazing things we have to offer. If you need any assistance, feel free to reach out!"</span>
          </div>

          <div className="flex gap-5">
            <p className="font-semibold text-black">Admin:</p>
            <span>"Here’s what our customers are saying: 'Absolutely love VisinaryBot! It’s been a game-changer for me.' — <span className="text-black">Admin Himself 😑</span>"</span>
          </div>
        </div>
    
      </div>
    </div>
  )
}