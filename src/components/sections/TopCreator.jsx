import React from 'react'
import Card from "../cards/Card";
import Creator1 from "../../assets/images/Creator1.svg";
import Creator2 from "../../assets/images/Creator2.svg";
import Creator3 from "../../assets/images/Creator3.svg";
import CreatorImg1 from "../../assets/images/CreatorImg1.svg";
import CreatorImg2 from "../../assets/images/CreatorImg2.svg";
import CreatorImg3 from "../../assets/images/CreatorImg3.svg";

const topCreatorContents = {
  cards: [
    {
      CardImg: Creator1,
      profileImg: CreatorImg1,
      creatorName: "John Wick",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      CardImg: Creator2,
      profileImg: CreatorImg2,
      creatorName: "John Wick",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      CardImg: Creator3,
      profileImg: CreatorImg3,
      creatorName: "John Wick",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};

const TopCreator = () => {
 return (
    <div className="w-full flex flex-col mt-50">
      <div className="text-center w-full flex flex-col items-center">
        <h2 className="font-bold text-[40px] text-white">Top Creator</h2>
        <p className="max-w-105.75 font-medium text-[20px] text-[#FFFFFF80] leading-[120%] mt-2.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="w-full flex gap-3.75">
        {topCreatorContents.cards.map((card, idx) => {
          return <Card card={card} id={idx} varient={"profile"} />;
        })}
      </div>
    </div>
  )
}

export default TopCreator
