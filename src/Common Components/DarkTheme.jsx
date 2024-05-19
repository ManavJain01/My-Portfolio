function DarkTheme({ darkTheme, setDarkTheme }){
  function Theme(){
    if(darkTheme == false) setDarkTheme(true);
    else setDarkTheme(false);
  }


  return (
    <div className="mb-5">
      <input
        type="checkbox"
        name="darkTheme"
        id="darkTheme"
        onClick={() => Theme()}
        className={`cursor-none none w-14 checked:before:bg-blue-500 checked:after:translate-x-5 relative
          before:absolute before:top-0 before:left-0 before:content-[''] before:w-14 before:h-7 before:bg-[#a8a6a6] before:rounded-[200px]
          after:absolute after:top-[2px] after:left-[3px] after:content-[''] after:w-7 after:h-6 after:bg-[#fff] after:rounded-full`} />
    </div>
  )
}

export default DarkTheme;