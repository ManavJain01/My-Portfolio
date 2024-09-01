import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {updateTodo, removeTodo} from '../Redux/features/todoSlice'

import TodosList from './TodosList'

function Todos(){
  const todos = useSelector(state => state.todos) // Main
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false)

  return(
    <>
      <div>Todos</div>
      <ul className="flex flex-col gap-2 justify-between">
        {todos.map((todo, i) => (
          <TodosList key={i} todo={todo} />
        ))}
      </ul>
    </>
  )
}

export default Todos;