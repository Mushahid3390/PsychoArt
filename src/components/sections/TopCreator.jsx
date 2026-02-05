import { useState } from "react";
import Card from "../cards/Card";
import Creator1 from "/assets/images/Creator1.webp";
import Creator2 from "/assets/images/Creator2.webp";
import Creator3 from "/assets/images/Creator3.webp";
import CreatorImg1 from "/assets/images/CreatorImg1.svg";
import CreatorImg2 from "/assets/images/CreatorImg2.svg";
import CreatorImg3 from "/assets/images/CreatorImg3.svg";

const topCreatorContents = {
  cards: [
    {
      id: "1",
      active: false,
      CardImg: Creator1,
      profileImg: CreatorImg1,
      creatorName: "John Wick",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      active: false,
      CardImg: Creator2,
      profileImg: CreatorImg2,
      creatorName: "John Wick",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "3",
      active: false,
      CardImg: Creator3,
      profileImg: CreatorImg3,
      creatorName: "John Wick",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};

const TopCreator = () => {
  const [cards, setCards] = useState(topCreatorContents.cards);

  const handleActive = (target) => {
    const collectionCards = cards.map((card) => {
      if (card.id == target.id) {
        card.active = !card.active;
        return card;
      }
      return card;
    });
    setCards(collectionCards);
  };

  return (
    <div className="w-full flex flex-col mt-15 lg:mt-50">
      <div className="text-center w-full flex flex-col items-center">
        <h2 className="font-bold text-[25px] sm:text-[40px] text-white">
          Top Creator
        </h2>
        <p className="max-w-105.75 font-medium sm:text-[20px] text-[#FFFFFF80] leading-[120%] mt-2.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="w-full flex-wrap justify-center md:justify-start md:flex-nowrap flex gap-3.75">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              id={card.id}
              varient={"profile"}
              active={card.active}
              setActive={({ target }) => {
                handleActive(target);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopCreator;
