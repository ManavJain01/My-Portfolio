import { useEffect, useRef } from "react";


function Button({ title , content, styles, }){
  const btnRef = useRef(null)

  useEffect(() => {
    if (btnRef && btnRef.current) {
      const btn = btnRef.current;
      btn.addEventListener('mousemove', onMouseMove);
      btn.addEventListener('mouseout', onMouseOut);
      return () => {
        btn.removeEventListener('mousemove', onMouseMove);
        btn.removeEventListener('mouseout', onMouseOut);
      }
  }








    // const btns = document.querySelectorAll(".btn")
    // btns.forEach(btn => {
    //   btn.addEventListener("mousemove", function(e){
    //     const position = btn.getBoundingClientRect();
    //     const x = e.pageX - position.left - position.width / 2;
    //     const y = e.pageY - window.scrollY * 1.15 - position.height / 2;
        
    //     // console.log(position);

    //     btn.children[0].style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
    //   })
  
    //   btn.addEventListener("mouseout", function(e){
    //     btn.children[0].style.transform = "translate(0px, 0px)";
    //   })   
    // })
  }, [])

  const onMouseMove = (e) => {
    const btn = btnRef.current;
    const bounds = btn.getBoundingClientRect();
    const x = e.pageX - bounds.left - bounds.width / 2;
    const y = e.pageY - bounds.top - bounds.height / 2;
    btn.children[0].style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)"
}

const onMouseOut = (e) => {
    const btn = btnRef.current;
    btn.children[0].style.transform = "translate(0px, 0px)"
}

  if(title === "magnetic"){
    return(
      <span ref={btnRef} className="btn w-fit h-fit">
        <button className={`flex flex-col items-center justify-center cursor-none py-1 px-3 ${styles}`}>
          {content}
        </button>
      </span>
    )
  }else{
    return(
      <div className={`${styles} flex flex-col items-center justify-center cursor-none`}>
        {content}
      </div>
    )
  }
}

export default Button;