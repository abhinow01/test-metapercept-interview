import React from 'react'
import Card from './Card'
import { data } from './data'

const CardsGrid = () => {
  return (

    <div className='bg-slate-100 flex flex-col w-full h-auto m-2'>
        <div className='flex flex-col justify-center items-center m-4 '>
          <div className='mt-8 text-[50px] font-thin text-zinc-800'><h1>Classes</h1></div>
          <div className='text-sm  m-4 font-thin text-zinc-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis aliquid facilis, ipsum veritatis dolores iusto maxime alias repellat consequuntur unde nulla assumenda voluptatem.</div>
        </div> 
        
            <div className='grid grid-cols-3 gap-4 bg-slate-100 m-4'>
             {
                data.map((card)=>(
                    <Card key={card.ID} ImageUrl={card.ImageUrl} Name={card.Name} ShortDesc={card.ShortDesc} />
                ))
             }
            </div>
    
       <div>

       </div>
    </div>
  )
}

export default CardsGrid