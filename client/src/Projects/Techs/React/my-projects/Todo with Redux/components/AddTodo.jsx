import {useState} from 'react'
import {useDispatch} from 'react-redux' 
import {addTodo} from '../Redux/features/todoSlice'

function AddTodo(){

  const [input, setInput] = useState('')
  const [invalidText, setInvalidText] = useState(false)
  const dispatch = useDispatch()  // Main

  const addTodoHandler = (e) => {
    if(input === ""){
      setInvalidText(true)
    }else{
      e.preventDefault()
      dispatch(addTodo(input))  // Main
      setInput('')
    }

  }
  
  return(
    <>
      <form onSubmit={addTodoHandler} className='flex gap-10'>
        <input type="text" placeholder="Enter a Todo..." value={input} onChange={(e) => {
          setInput(e.target.value)
          setInvalidText(false)
        }} className='
       text-black py-2 px-5 border border-gray-400 rounded-md' />
        <button type="text" className='bg-green-700 px-5 py-2 rounded-md' >Add Todo</button>
      </form>
      {invalidText ? <div className='text-red-700'>Invalid Text</div> : ""}
    
    </>
  )
}

export default AddTodo;