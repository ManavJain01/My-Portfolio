import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
  todos: [{id: 1, text: "Hello World"}]
}

let i = 2;

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: i++,
        text: action.payload
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload )
    },
    updateTodo: (state, action) => {
      // state.todos = state.todos.filter((todo) => todo.id !== action.payload[1] )
      // const todo = {
        //   id: action.payload[1],
        //   text: action.payload[0]
        // }
        // state.todos.push(todo)

        state.todos.map((todo) =>{
          if(todo.id === action.payload[1]){
            todo.text = action.payload[0]
          }
        })
    }
  }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer