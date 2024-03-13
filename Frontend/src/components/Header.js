import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";


const Header = () => {
  return (
    <div className='absolute z-10 flex w-[100%] items-center justify-between px-6 bg-gradient-to-b from-black'>
      <img className='w-60' src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Netflix-Logo.png" alt='netflix_logo'></img>
      <div className='flex items-center'>
        <IoMdArrowDropdown size="24px"/>
        <h1 className='text-lg font-medium'>Hello Change</h1>
        <div className='ml-4'>
          <button className='bg-red-800 text-white px-4 py-2'>Logout</button>
          <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
        </div>
      </div>
    </div>
  )
}

export default Header