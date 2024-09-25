// Importing React Icons
import { BiSolidUserCircle } from "react-icons/bi";

export default function Header() {
  return (
    <div className="flex gap-10 justify-end items-center">
      <div className="flex items-center gap-5">
        <p className="text-xs text-gray-600 flex flex-col items-end">
          <span>Hey, <span className="font-bold text-black">Manav</span></span>
          <span>Admin</span>
        </p>
        <BiSolidUserCircle className="size-10 text-sky-700" />
      </div>
    </div>
  )
}