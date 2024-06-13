// Importing local Images
import portfolio1 from './Images/portfolio1.png'
import portfolio2 from './Images/portfolio2.png'
import pageNotFound from './Images/PageNotFound.png'

// Importing React Packages
import { Link } from 'react-router-dom'

function App() {
  // My Object File
  const portfolios = [
    {
      name: "portfolio 1",
      createdOn: "Start this project on 14 may'24",
      link: "/portfolio1",
      img: portfolio1
    },
    {
      name: "portfolio 2",
      createdOn: "Start this project on 13 june'24",
      link: "/portfolio2",
      img: pageNotFound
    }
  ]

  return (
    <div className="min-h-lvh p-10 bg-gray-900 text-white font-serif flex flex-col gap-8 justify-between">
      {/* Header */}
      <nav className="flex flex-col gap-10">
        <ul className="flex justify-center">
          <li className="text-4xl">My Portfolios</li>
        </ul>
        <hr className="border-gray-600" />
      </nav>

      {/* Body */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-wrap gap-10">
          {portfolios.map((e, i) => {
            return(
              <Link id={`img${i}`} key={i} to={e.link} className="border-b-2 border-s-2 border-r-2 border-gray-600 hover:shadow-lg hover:shadow-gray-600">
                <img src={e.img} alt={`img${i}`} className="w-64" />

                <section className="p-5 flex flex-col items-center">
                  <span>{e.name}</span>
                  <span className="whitespace-nowrap">{e.createdOn}</span>
                </section>
              </Link>
            )
          })}
        </div>

        <hr className="border-gray-600" />
      </div>

      {/* Footer */}
      <div className="text-5xl flex justify-center items-center">
        👋 😀 👨‍💻 😍 🥰
      </div>
    </div>
  )
}

export default App
