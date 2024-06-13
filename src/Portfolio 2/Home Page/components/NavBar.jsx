export default function NavBar(props) {
  // Functions
  function getDarkTheme(){
    if(props.darkTheme == false) props.setDarkTheme(true)
      else props.setDarkTheme(false)
  }

  return (
    <div className="flex justify-between">
      NavBar
      <button onClick={() => getDarkTheme()}>{props.darkTheme ? "Light Theme" : "Dark Theme"}</button>
    </div>
  )
}