// Importing Local Files
import Sidebar from "./components/Sidebar"
import Header from './components/Header';
import RightSidebar from './components/RightSidebar';

import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="relative bg-[#848BC8] bg-opacity-[9%] flex gap-8 xl:gap-5 w-lvw h-lvh px-8 py-5 overflow-x-hidden">
      <Sidebar />
      
      <div className="flex flex-col gap-5 w-full">
        <Header />

        <div className="flex gap-5 flex-wrap md:flex-nowrap justify-between duration-700">
          <Outlet />
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}