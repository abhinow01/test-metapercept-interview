import React from 'react'

const Card = ({ImageUrl,Name,ShortDesc}) => {
  return (
    <div className='bg-white flex flex-col rounded-lg shadow-md'>
        <img src={ImageUrl} alt={Name} className='w-full h-auto '/>
        <h2 className='text-lg font-semibold mb-2'>{Name}</h2>
        <p className='text-gray-600 mb-4'>{ShortDesc}</p>
        <button className='bg-white text-slate-200 border-slate-300 rounded-md p-2'>View</button>
    </div>
  )
}

export default Card