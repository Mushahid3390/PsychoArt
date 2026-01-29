import React from 'react'
import Button from '../buttons/Button'

const Card = ({card}) => {
  return (
    <div className='w-97.25 h-148.75 p-6.5 bg-[#00000040] flex flex-col rounded-[10px]'>
      <img src={card.img} className='w-84.25 h-95] rounded-[10px] mb-5 object-center object-cover'/>
      <div className='flex justify-between mb-5.75 w-full'>
        <div>
          <p className='font-medium text-[20px] mb-2.5 text-[#FFFFFF80]'>{card.owner}</p>
          <p className='font-bold text-[20px] text-white'>{card.productName}</p>
        </div>
       <div>
        <p className='font-medium text-[15px] text-[#FFFFFF80]'>{card.billType}</p>
        <p className='font-bold text-[20px] text-white'>{card.bill}</p>
       </div>
      </div>
      <Button label={"Place a bid"} varient='gradient' style={"w-full font-medium text-[20px] py-2.5 text-white"}/>
    </div>
  )
}

export default Card
