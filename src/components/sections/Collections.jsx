import { useState } from "react";
import Button from "../buttons/Button";
import Card from "../cards/Card";
import { collectionsContent } from "../../utils/content";

const Collections = () => {
  const [activeBtn, setActiveBtn] = useState(collectionsContent.btns[0].name);
  const [cards, setCards] = useState(collectionsContent.cards);
  const artLen = collectionsContent.cards.filter((card) => {
    return card.section === "Art";
  }).length;
  const sportLen = collectionsContent.cards.filter((card) => {
    return card.section === "Sport";
  }).length;
  const photographyLen = collectionsContent.cards.filter((card) => {
    return card.section === "Photography";
  }).length;
  const patternLen = collectionsContent.cards.filter((card) => {
    return card.section === "Pattern";
  }).length;

  const btnsLen = {
    Art: artLen,
    Sport: sportLen,
    Photography: photographyLen,
    Pattern: patternLen,
  };

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
    <div className="flex flex-col mt-15 lg:mt-50 gap-7.5 w-full ">
      <div className="mx-auto text-center">
        <h2 className="font-bold text-[25px] sm:text-[40px] mb-2.5 text-[#FFFFFF]">
          {collectionsContent.sectionName}
        </h2>
        <p className="font-medium sm:text-[20px] leading-[120%] text-[#FFFFFF80] sm:max-w-105.75">
          {collectionsContent.secDesc}
        </p>
      </div>

      <div className="flex w-full gap-3.75 justify-between">
        {collectionsContent.btns.map((btn, idx) => {
          return (
            <>
              {btnsLen[btn.name] > 0 && (
                <Button
                  label={btn.name}
                  varient={activeBtn === btn.name ? "gradient" : "default"}
                  OnClick={handleSetActiveBtn}
                  style={
                    "text-[#FFFFFF] w-full px-full py-[2px] sm:py-[5px] text-[12px]! rounded-[5px]!"
                  }
                  id={idx}
                />
              )}
            </>
          );
        })}
      </div>

      <div className="w-full justify-center flex flex-wrap  md:justify-start md:flex-nowrap  gap-3.75">
        {cards
          .filter((card) => {
            return card.section === activeBtn;
          })
          .map((card) => {
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

export default Collections;
