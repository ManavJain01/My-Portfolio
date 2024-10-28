// Importing React Icons
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

// Importing local files
import myExperience from '@/Experience/experience.js'
import ExpModal from "./ExpModal";

// Importing React Packages
import { useState } from 'react'

export default function Experience({ darkTheme }) {
  // useState
  const [more, setMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [internshipData, setInternshipData] = useState({});

  // Funstions
  const openModal = (data) => {
    setInternshipData(data);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setInternshipData({});
  };

  return (
    <div className={`py-20 pb-96 flex flex-col gap-20`}>
      {/* Experience */}
      <h1 className="text-4xl md:text-6xl font-semibold text-center md:text-start">My Experiences</h1>
      <div className="flex flex-wrap gap-20">
        {myExperience.filter((e, i) => more ? i >= 0 : i < 2).map((e,i) => {
          return i <= 4 ? (
            <button key={i} onClick={() => openModal(e)} className={`flex flex-col items-center rounded-md shadow-lg cursor-none ${darkTheme ? "bg-purple-700 shadow-purple-400" : "text-purple-700"}`}>
              <img
                src={e?.img || ""}
                alt={`my Experience ${i+1}`}
                className="h-64 w-[23rem]" />
              
              <div className="text-2xl font-semibold py-2 px-10 flex flex-col justify-center items-center">
                <h2>{e?.company}</h2>
                <span className="text-center">{e?.period}</span>
                <span>{e?.joining}</span>
              </div>
            </button>
          ) : (
            <button key={i} onClick={() => openModal(e)} className={`font-semibold text-3xl h-fit w-[23rem] px-5 py-2 rounded-md shadow-lg cursor-none ${darkTheme ? "bg-purple-700 shadow-purple-400" : "text-purple-700"}`}>{e?.company}</button>
          )
        })}

        {/* <button onClick={() => setMore(!more)} className={`font-bold flex justify-center items-center ${more ? "text-xl gap-5 w-full py-2" : "text-3xl flex-col w-[23rem] min-h-[23rem]"} rounded-md shadow-lg cursor-none ${darkTheme ? "bg-purple-700 shadow-purple-400" : "text-purple-700"}`}>
          {more
            ?<>
              <span>Show less</span>
              <MdKeyboardDoubleArrowUp />
            </>
            :<>
              <span>Click For</span>
              <span>More</span>
              <span>Experience</span>
            </>
        }
        </button> */}
      </div>

      {/* When modal opens */}
      <ExpModal isOpen={isModalOpen} onClose={closeModal} data={internshipData} />
    </div>
  )
}