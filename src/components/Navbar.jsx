import React from 'react'
import { MdLocalLibrary } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";


const Navbar = ({onCreate,contactFilter}) => {
  return (
    <div className='w-[400px] flex flex-col mt-10 items-center'>
      <div className='bg-sky-300 w-full h-auto flex gap-4 items-center border-2 rounded-xl'>
         <MdLocalLibrary className='size-[4rem]'/>
         <h2 className='font-bold'>Contact List</h2>
      </div>
      {/* Search bar */}
      <div className='w-full flex mt-4 items-center relative'>
      <CiSearch className='size-[1.9rem] absolute'/>
      <input onChange={contactFilter} type="text" placeholder='Search here' className='flex-grow border h-[40px] rounded-lg px-10'/>
      <FaPlusCircle 
      onClick={onCreate} className='text-4xl ml-4 cursor-pointer active:scale-150 duration-500'/> 
      </div>
    </div>
  )
}

export default Navbar