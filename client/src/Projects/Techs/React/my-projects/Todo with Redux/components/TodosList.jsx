import {useState} from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useDispatch } from 'react-redux'
import {updateTodo, removeTodo} from '../Redux/features/todoSlice'

function TodosList({ todo }){
  const [isUpdate, setIsUpdate] = useState(false)
  
  const dispatch = useDispatch();

  function formFunction(e){
    const input = document.getElementById("updateTodo")
    
    const Value = input.value;

    dispatch(updateTodo([Value, todo.id]))
    
    setIsUpdate(false);
  }

  return(
    <li className='flex items-center justify-between gap-10'>
      <p>{todo.id}</p>
      {
        isUpdate ?<form onSubmit={() => formFunction()} className='flex gap-5'>
          <input
            id="updateTodo" 
            placeholder='update your todo...'
            className='text-black py-2 px-5 rounded-md'>
          </input>

          <button 
            // onClick={() => dispatch(updateTodo(todo.id))}
            name="updateBtn"
            type="submit"
            className='bg-green-700 px-5 py-2 rounded-md'>
              Update
          </button>

          <button 
            onClick={() => setIsUpdate(false)}
            className='bg-red-700 px-5 py-2 rounded-md'>
              Cancel
          </button>
        </form>
        :<div className='flex items-center gap-5'>
          {todo.text}
          <button
            onClick={() => setIsUpdate(true)}
            className='bg-green-700 px-5 py-2 rounded-md'>
              Update
          </button>

          <button 
            onClick={() => dispatch(removeTodo(todo.id))}
            className='bg-red-700 px-5 py-2 rounded-md'>
              Delete
          </button>          
        </div>
      }
    </li>
  )
}

export default TodosList;