// Importing my projects
import projects from '../../Projects/projects.json'

// Importing React Packages
import { Link } from 'react-router-dom'

function Projects({ darkTheme }){
  const category = ["MERN STACK PROJECTS"]

  return (
    <div className={`${darkTheme ? "text-white" : "text-black"} py-20`}>
      <div>
        {
          category.map((item, i) => {
            return(
              <div key={i} className="flex flex-col gap-20">
                <h1 className="text-6xl font-semibold text-center">{item}</h1>
                <div className="flex flex-wrap gap-10 justify-around">
                  {
                    projects
                    .filter((e, i) => e.category === item)
                    .map((e,i) => {
                      return(
                        <Link key={i} to={e.link} className={`rounded-md shadow-2xl hover:shadow-green-400 active:hover:shadow-blue-400 cursor-none hover:scale-[120%] ${darkTheme ? "shadow-purple-400" : "shadow-gray-400"}`}>
                          <img
                            src={e.img}
                            alt="project"
                            className="h-48 w-80" />
                          
                          <div className="p-5 flex flex-col items-center">
                            <h1>{e.name}</h1>
                          </div>
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects