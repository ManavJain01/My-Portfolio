import Navbar from './Navbar';
import Footer from './Footer'

function Main(){
  return(
    <>
      <Navbar />
      <main className="bg-black md:bg-gradient-to-r md:from-indigo-500 md:from-10% md:via-sky-500 md:via-30% md:to-emerald-500 md:to-90% min-h-[100vh]">
        <div className="/*bg-blue-900 bg-gradient-to-r from-[#09203f] to-[#537895] h-[82vh] w-[100vw] flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold">Building...</h1>
          <h1 className="text-6xl font-bold">Come Back Later To Find out</h1>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Main;