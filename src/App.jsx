import { useState } from 'react'
import Navabr from './components/Navabr'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navabr/>
      <div className="container">
        <div className="bg-red-600">
          hey i am red
        </div>
      </div>
    </>
  )
}

export default App
