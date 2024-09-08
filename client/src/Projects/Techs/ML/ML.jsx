// Importing React Packages
import { Link } from 'react-router-dom';

// Importing local files
import Footer from './Footer';
import projects from './objects'

export default function ML() {
  return (
    <div className="flex flex-col min-h-lvh w-lvw overflow-x-hidden">
      {/* Header */}
      <div className="font-[cursive] text-[#9a9696] bg-[#333333] flex items-center justify-center h-32">
        <h1 className="tracking-wider font-bold text-3xl">All ML Projects</h1>
      </div>
      
      {/* Main */}
      <div className="flex-1 bg-black flex flex-wrap gap-10 items-start p-20">
        {projects?.map((e, i) => {
          return(
            <Link to={e?.link} key={i} className="bg-[#F5F5DC] flex flex-col items-center gap-5 w-80 h-96 rounded-lg hover:scale-[120%]">
              <h1 className="font-bold text-3xl text-gray-600 underline">{e?.h1}</h1>
              <img src={e?.img} alt="images" className="w-72 object-contain" />
              
              <section className="text-gray-500 flex flex-col items-center gap-2">
                <p>{e?.p1}</p>
                <p>{e?.p2}</p>
                {e.p3 && <p className="text-gray-500">{e?.p3}</p>}
              </section>
            </Link>
          )
        })}

        <div className="group hover:animate-pulse bg-[#F5F5DC] flex flex-col items-center justify-center gap-5 w-80 h-96 px-5 py-2 rounded-lg rotate-180 hover:rotate-0">
          <h1 className="hidden group-hover:block opacity-50 text-3xl">Work in progress</h1>
          <h2 className="font-bold text-3xl text-gray-600 underline">Project {Array.isArray(projects) && projects.length + 1}</h2>
          <section className="text-gray-500 flex flex-col items-center gap-2">
            <p>Project Name</p>
            <p>Topic Name</p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}