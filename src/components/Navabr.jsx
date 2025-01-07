import React from 'react'

const Navabr = () => {
  return (
    <nav className='flex justify-between bg-blue-700 text-white py-2' >
        <div className="logo">
        <span className='font-bold text-xl mx-8'>iTask</span>
        </div>
        <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-semibold transition-all'>task</li>
        <li className='cursor-pointer hover:font-semibold transition-all'>Home</li>
   
      </ul>
    </nav>
  )
}

export default Navabr