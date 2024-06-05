import HCJIBM from './certificates/HTML-CSS-JS-IBM.png'
import ReactIBM from './certificates/React-IBM.png'

export default function Certificates({ darkTheme }) {
  const certiArr = [HCJIBM, ReactIBM]


  return (
    <div className={`${darkTheme ? "text-white" : "text-black"} flex flex-col gap-20 py-20`}>
      <h1 className="text-6xl font-semibold">Certificates</h1>
      <div className="w-full flex flex-wrap gap-10 justify-around">
        {
          certiArr.map((e, i) =>{
            return(
              <div key={i}>
                <img
                  src={e}
                  alt="ibm"
                  className={`h-72 shadow-2xl hover:scale-[120%] hover:shadow-green-400 ${darkTheme ? "shadow-purple-400" : "shadow-gray-400"}`} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}