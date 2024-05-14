import Navbar from './Navbar';
import Navmenu from './Navmenu';

function Main(){
  return(
    <>
      <Navbar />
      <header className="bg-black md:bg-gradient-to-r md:from-indigo-500 md:from-10% md:via-sky-500 md:via-30% md:to-emerald-500 md:to-90% h-20 md:h-36">
        <div className="/*bg-blue-900 bg-gradient-to-r from-[#09203f] to-[#537895] h-[200vh] /h-[82vh] w-[100vw] flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold">Building...</h1>
          <h1 className="text-6xl font-bold">Come Back Later To Find out</h1>
        </div>
      </header>
    </>
  )
}

export default Main;