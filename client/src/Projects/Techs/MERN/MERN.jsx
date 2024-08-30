import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

// Importing routing
import { Outlet } from 'react-router-dom'

function MERN(){
  return (
    <div className="font-serif">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MERN;