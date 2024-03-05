import React from 'react'
import Card from './Card'
import { data } from './data'

const CardsGrid = () => {
  return (

    <div className='bg-slate-100 flex flex-col w-full h-auto'>
        <div className='flex flex-col justify-center items-center'>
          <div className='m-4 text-2xl '><h1>Classes</h1></div>
          <div className='text-sm font-light m-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis aliquid facilis, ipsum veritatis dolores iusto maxime alias repellat consequuntur unde nulla assumenda voluptatem.</div>
        </div> 
        
            <div className='grid grid-cols-3 gap-4 bg-slate-100'>
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