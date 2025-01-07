import { useState } from 'react'
import Navabr from './components/Navabr'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [todo, setTodo] = useState("")

  const handleEdit = ()=>{

  }
  const handleDelete = ()=>{

  }
  const handleAdd = ()=>{
    setTodo
//vpm
  }

  return (
    <>
    <Navabr/>
      <div className="container mx-auto my-5 rounded-xl p-5  bg-blue-300 min-h-[80vh]">
        <div className="addToDo my-5">
          <h2 className='text-lg font-bold'>Add to do</h2>
          <input type='text' className='w-1/2' />
          <button onClick={handleAdd} className='bg-blue-500 hover:bg-blue-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>ADD</button>
        </div>
        <h2 className='text-lg font-bold'>Your ToDOs</h2>
        <div className='todos'>
          <div className="todo flex">
            <div className="text">{to do}</div>
            <div className="buttons">
              <button onClick={handleEdit} className='bg-blue-500 hover:bg-blue-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-2'>ADD</button>
              <button onClick={handleDelete} className='bg-blue-500 hover:bg-blue-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-2'>DELETE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
