function Button(props){
  if(props.name == 'navbarBtn'){
    return(
      <>
        <button className={`${props.className} px-4 lg:px-8 text-white text-sm font-semibold`}>{props.id}</button>
      </>
    )
  }
}

export default Button;