// Importing React Icons
import { GiCrossedSabres } from "react-icons/gi";

// Importing React Packages
import { Link } from 'react-router-dom'
export default function ExpModal({ isOpen, onClose, data= {} }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    // Close the modal only if the overlay is clicked
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleOverlayClick} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="text-black bg-white flex justify-between items-start min-w-[15rem] p-6 rounded-lg shadow-lg relative w-1/3">
        <button className="absolute top-6 right-4 text-3xl cursor-none" onClick={onClose}> <GiCrossedSabres /> </button>
        
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="font-bold text-3xl text-center">{data?.company}</h1>
          <section className="font-semibold text-xl flex flex-wrap justify-between">
            <span>{data?.period}</span>
            <span>{data?.joining}</span>
          </section>
          <button onClick={() => window.open(data?.offerLetter, '_blank')} className="text-white bg-green-700 hover:bg-green-800 active:bg-green-900 px-5 py-2 rounded-xl cursor-none">Offer Letter</button>
          <button onClick={() => window.open(data?.img, '_blank')} className="text-white bg-green-700 hover:bg-green-800 active:bg-green-900 px-5 py-2 rounded-xl cursor-none">Completion Letter</button>
          
          {data.repo
            ?<Link to={data?.repo} target="_blank" className="text-center text-white bg-green-700 hover:bg-green-800 active:bg-green-900 px-5 py-2 rounded-xl cursor-none">Github Repository Link</Link>
            :<span className="text-center text-white bg-red-700 px-5 py-2 rounded-xl cursor-none">Will Update Soon...</span>
          }
        </div>
      </div>
    </div>
  )
}