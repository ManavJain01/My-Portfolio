// Importing React Packages
import { useEffect, useRef } from "react";

import './Clock.css'

function Clock({morphism}) {
  // useRef
  const sec = useRef(null);
  const min = useRef(null);
  const hr = useRef(null);


  useEffect(() => {
    const interval = setInterval(() => {
      let time = new Date();
      let secs = time.getSeconds() * 6;
      let mins = time.getMinutes() * 6;
      let hrs = time.getHours() * 30;
      
      sec.current.style.transform = `rotateZ(${secs}deg)`;
      min.current.style.transform = `rotateZ(${mins}deg)`;
      hr.current.style.transform = `rotateZ(${hrs*(mins/12)}deg)`;
    });
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative w-[200px] h-[200px] rounded-full ${morphism.clock}
        before:absolute before:top-2 before:left-2 before:content-[''] before:w-[185px] before:h-[185px] before:rounded-full ${'before:' + morphism.inset}
        after:absolute after:top-[50px] after:left-[50px] after:content-[''] after:w-[100px] after:h-[100px] after:rounded-full ${'after:' + morphism.inset}
        flex items-center justify-center
        `}
    >
      <span className="relative bg-gray-800 w-[13px] h-[13px] rounded-full before:z-[6] before:absolute before:top-[1.5px] before:left-[1.5px] before:bg-blue-500 before:content-[''] before:w-[10px] before:h-[10px] before:rounded-full">
        <span ref={sec} className="z-[6] absolute -bottom-[38px] left-[5px] bg-blue-500 h-[90px] w-[2px] before:absolute before:top-0 before:-right-[2px] before:bg-blue-500 before:content-[''] before:w-[6px] before:h-[30px] before:rounded-full after:absolute after:top-[100px] after:left-0 after:bg-blue-500 after:content-[''] after:w-[2px] after:h-[10px] after:rounded-full" />
        <span ref={min} id="min" className="absolute -bottom-[1px] left-[7px] bg-orange-600 w-[4px] h-[15px] rounded-full before:absolute before:top-0 before:right-[1px] before:bg-orange-600 before:content-[''] before:w-[2px] before:h-[70px]" />
        <span ref={hr} id="hr" className="z-[4] absolute -bottom-[8px] left-[4px] bg-gray-800 h-[30px] w-[5px] border-gray-800 border-x-2 rounded-full /before:absolute before:bottom-5 before:-left-[0px] before:bg-gray-800 before:content-[''] before:w-[5px] before:h-[10px]"></span>
      </span>

      <span className="absolute top-3 bg-blue-500 h-2 w-[2px] rounded-lg" />
      <span className="absolute top-6 right-[52px] rotate-[40deg] bg-gray-800 h-2 w-[2px] rounded-lg" />
      <span className="absolute top-[56px] right-6 rotate-[60deg] bg-gray-800 h-2 w-[2px] rounded-lg" />
      
      <span className="absolute top-24 right-3 rotate-[90deg] bg-blue-500 h-2 w-[2px] rounded-lg" />       
      <span className="absolute bottom-[54px] right-[26px] rotate-[120deg] bg-gray-800 h-2 w-[2px] rounded-lg" />
      <span className="absolute bottom-[26px] right-[55px] rotate-[150deg] bg-gray-800 h-2 w-[2px] rounded-lg" />
      
      <span className="absolute bottom-3 bg-blue-500 h-2 w-[2px] rounded-lg" />       
      <span className="absolute bottom-6 left-[54px] rotate-[220deg] bg-gray-800 h-2 w-[2px] rounded-lg" />
      <span className="absolute bottom-[56px] left-7 rotate-[250deg] bg-gray-800 h-2 w-[2px] rounded-lg" />
      
      <span className="absolute bottom-24 left-4 rotate-[90deg] bg-blue-500 h-2 w-[2px] rounded-lg" />        
      <span className="absolute top-6 left-[55px] rotate-[330deg] bg-gray-800 h-2 w-[2px] rounded-lg" />
      <span className="absolute top-[55px] left-[26px] rotate-[300deg] bg-gray-800 h-2 w-[2px] rounded-lg" />
    </div>
  )
}
export default Clock