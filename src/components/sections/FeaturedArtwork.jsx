import { useState } from "react";
import Card from "../cards/Card";
import Card1 from "/assets/images/Card1.svg";
import Card2 from "/assets/images/Card2.svg";
import Card3 from "/assets/images/Card3.svg";

const FeaturedArtworkContent = {
  cards: [
    {
      id: "1",
      active: false,
      section: "Art",
      img: Card1,
      owner: "@Johny",
      billType: "Current Bid",
      bill: "0.005 ETH",
      productName: "Yellow Painting",
    },
    {
      id: "2",
      active: false,
      section: "Art",
      img: Card2,
      owner: "@Johny",
      billType: "Current Bid",
      bill: "0.005 ETH",
      productName: "Yellow Painting",
    },
    {
      id: "3",
      active: false,
      section: "Art",
      img: Card3,
      owner: "@Johny",
      billType: "Current Bid",
      bill: "0.005 ETH",
      productName: "Yellow Painting",
    },
  ],
};

const FeaturedArtwork = () => {
  const [cards, setCards] = useState(FeaturedArtworkContent.cards);

  const handleBidActive = (target) => {
    const collectionCards = cards.map((card) => {
      if (card.id == target.id) {
        card.active = !card.active;
        return card;
      }
      return card;
    });
    setCards(collectionCards);
  };

  const handleSetActiveBtn = (event) => {
    const btn = event.target.name;
    setActiveBtn(btn);
  };

  return (
    <div className="mt-15 lg:mt-50 w-full flex flex-col gap-7.5">
      <div className="text-center w-full flex flex-col items-center">
        <h2 className="font-bold text-[25px] sm:text-[40px] text-white">
          Featured Artwork
        </h2>
        <p className="max-w-105.75 font-medium sm:text-[20px] text-[#FFFFFF80] leading-[120%] mt-2.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="w-full justify-center flex-wrap  md:justify-start md:flex-nowrap  flex gap-3.75">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              id={card.id}
              active={card.active}
              setActive={({ target }) => {
                handleBidActive(target);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedArtwork;
