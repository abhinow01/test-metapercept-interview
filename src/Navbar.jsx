import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[70px] bg-white flex flex-row justify-between border shadow-lg'>
        <div className='text-lg text-slate-400 px-4 py-4'>
         Title 
        </div>
        <div className='gap-4 flex flex-row justify-center align-middle'>
            <div className='text-lg text-slate-400 px-4 py-4'>Home</div>
            <div className='text-lg text-slate-400 px-4 py-4'>About</div>
            <div className='text-lg text-slate-400 px-4 py-4'>Blog</div>
            <div className='text-lg text-slate-400 px-4 py-4'>Contact</div>
            <div><button className='bg-white border border-blue-400 rounded-md mt-[10px] p-2 text-blue-400'>Button</button></div>
        </div>

    </div>
  )
}

export default Navbar