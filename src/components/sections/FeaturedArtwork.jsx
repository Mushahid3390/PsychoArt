import React from 'react'
import Card from '../cards/Card'
import Card1 from "../../assets/images/Card1.svg"
import Card2 from "../../assets/images/Card2.svg"
import Card3 from "../../assets/images/Card3.svg"

const FeaturedArtworkContent = {
    cards: [
        {
          section: "Art",
          img: Card1,
          owner: "@Johny",
          billType: "Current Bid",
          bill: "0.005 ETH",
          productName: "Yellow Painting",
        },
        {
          section: "Art",
          img: Card2,
          owner: "@Johny",
          billType: "Current Bid",
          bill: "0.005 ETH",
          productName: "Yellow Painting",
        },
        {
          section: "Art",
          img: Card3,
          owner: "@Johny",
          billType: "Current Bid",
          bill: "0.005 ETH",
          productName: "Yellow Painting",
        },
    ]
}

const FeaturedArtwork = () => {
  return (
    <div className='mt-50 w-full flex flex-col gap-7.5'>
       <div className='text-center w-full flex flex-col items-center'>
          <h2 className='font-bold text-[40px] text-white'>Featured Artwork</h2>
          <p className='max-w-105.75 font-medium text-[20px] text-[#FFFFFF80] leading-[120%] mt-2.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>

       <div className='w-full flex gap-3.75'>
          {
            FeaturedArtworkContent.cards.map((card,idx)=>{
                return <Card card={card} id={idx}/>
            })
          }
       </div>
    </div>
  )
}

export default FeaturedArtwork
