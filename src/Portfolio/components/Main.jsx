import Navbar from './Navbar';
import Footer from './Footer'
import { useEffect } from 'react';

function Main(){

  useEffect(()=>{
    const cursorDot = document.getElementById("cursor-dot")
    const cursorOutline = document.getElementById("cursor-outline")

    console.log(cursorDot);
  
    window.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;
  
      cursorDot.style.left = `${posX}px`
      cursorDot.style.top = `${posY}px`

      cursorOutline.animate({
        left: `${posX - 10}px`,
        top: `${posY - 10}px`
      }, {duration: 500, fill: "forwards"})
    })

  } ,[])



  return(
    <div className='cursor-none'>
      {/* NavBar/ Header */}
      <Navbar />

      {/* Creating my own cursor */}
      <div id="cursor-dot" className='fixed top-0 left-0 bg-[#f5f5dc] w-5 h-5 rounded-full' />
      <div id="cursor-outline" className="fixed left-0 top-0 w-10 h-10 border-2 border-[#f5f5dc] rounded-full" />

      {/* My Portfolio Main/Body */}
      <main className="bg-black md:bg-gradient-to-r md:from-indigo-500 md:from-10% md:via-sky-500 md:via-30% md:to-emerald-500 md:to-90% min-h-[100vh]">
        <div className="/*bg-blue-900 bg-gradient-to-r from-[#09203f] to-[#537895] h-[82vh] w-[100vw] flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold">Building...</h1>
          <h1 className="text-6xl font-bold">Come Back Later To Find out</h1>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Main;