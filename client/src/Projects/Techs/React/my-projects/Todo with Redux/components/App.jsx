import {Provider} from 'react-redux'
import {store} from '../Redux/Store/store'

import AddTodo from './AddTodo'
import Todos from './Todos'

function App(){
  return(
    <div className='h-[100vh] bg-[#5C4033] flex flex-col justify-center items-center overflow-hidden'>
      <div className='w-[50rem] px-5 py-5 bg-black text-white flex flex-col justify-center items-center gap-5 rounded-md shadow-gray-900 shadow-md'>
        <h1>Learn about redux toolkit</h1>
        <Provider store={store}>
          <AddTodo />
          <Todos />
        </Provider>
      </div>
    </div>
  )
}

export default App;