import React from 'react'

const Card = ({ImageUrl,Name,ShortDesc}) => {
  return (
    <div className='bg-white flex flex-col rounded-lg shadow-sm relative'>
        <img src={ImageUrl} alt={Name} className='w-full h-[200px]'/>
        <h2 className='text-lg font-semibold p-2 mb-2'>{Name}</h2>
        <p className='text-gray-600 mb-4 p-2 '>{ShortDesc}</p>
        <div className='mt-auto' >
        <button className='border border-zinc-400 bottom-0 left-0 bg-white text-zinc-600 px-4 py-2 rounded-md ml-[20px] mb-[20px]'>View</button>
        </div>   
    </div>
  )
}

export default Card