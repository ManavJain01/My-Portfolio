// Importing React Packages
import { Link } from 'react-router-dom';

// Importing local files
import Footer from './Footer';
import projects from './objects'

export default function BlockChain() {
  return (
    <div className="font-[cursive] text-[#FFE4C4] bg-black flex flex-col min-h-lvh w-lvw overflow-x-hidden">
      {/* Header */}
      <h1 className="text-center text-4xl py-20">My BlockChain Projects</h1>

      {/* Main */}
      <div className="flex-1 bg-black flex flex-wrap gap-20 items-start p-20">
        {projects?.map((e, i) => {
          return(
            <Link to={e?.link} key={i} className="group bg-[#323131] rounded-lg hover:scale-[120%] duration-1000">
              <img src={e?.image} alt="images" className="w-72 object-contain rounded-t-md group-hover:rounded-b-md" />   
              <section className="group-hover:hidden flex flex-col items-center gap-2 py-1">
                <p className="underline">{e?.p}</p>
                <p className="underline">{e?.sp}</p>
              </section>
            </Link>
          )
        })}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}