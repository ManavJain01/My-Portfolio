// Importing local images
import CodeSoftOfferLetter from '../../Experience/Image/CodeSoft_OfferLetter.png'

export default function Experience({ darkTheme }) {
  const myExperience = [
    {
      company: "CodeSoft",
      period: "1 Month Internship",
      joining: "15 June 2024",
      img: CodeSoftOfferLetter,
    }
  ]

  return (
    <div className={`py-20 flex flex-col gap-20 ${darkTheme ? "text-white" : "text-black"}`}>
      {/* Experience */}
      <h1 className="text-6xl font-semibold text-center">My Experiences</h1>
      
      <div className="flex flex-wrap">
        {myExperience.map((e,i) => {
          return(
            <div key={i} className={`flex flex-col rounded-md shadow-lg ${darkTheme ? "bg-purple-700 shadow-purple-400" : "text-purple-700"}`}>
              <img
                src={e.img}
                alt={`my Experience ${i+1}`}
                className="h-64" />
              
              <div className="text-2xl font-semibold py-2 px-10 flex flex-col justify-center items-center">
                <h2>{e.company}</h2>
                <span>{e.period}</span>
                <span>{e.joining}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}