function Button(props, onClick/*, ...restProps*/){
  if(props.square == 'square'){
    return(
      <button onClick={props.functionS}
       className={`${props.className} sm:ml-3 py-1 sm:py-2 px-2 sm:px-4 border sm:border-2 border-black font-bold text-lg hover:bg-black hover:text-white focus:bg-black focus:text-white`}>
        {props.text}
      </button>
    )
  }
  else if(props.square == 'reset'){
    return(
      <>
        <button onClick={props.functionS}
         className={`text-black bg-white px-10 sm:px-16 border-2 border-black font-semibold active:bg-slate-200  my-2 py-1 rounded-sm`}>
          {props.text}
        </button>
      </>
    )
  }
  else{
    return(
      <>
        <button onClick={props.functionS}
         className={`${props.className} bg-black text-white my-2 py-1 px-10 rounded-sm active:bg-slate-800`}>
          {props.text}
        </button>
      </>
    )
  }

}

export default Button;