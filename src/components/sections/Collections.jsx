import { useState } from "react";
import Button from "../buttons/Button";
import Card from "../cards/Card";
import { collectionsContent } from "../../utils/content";

const Collections = () => {
  const [activeBtn, setActiveBtn] = useState(collectionsContent.btns[0].name);
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


  const handleSetActiveBtn = (event) => {
    const btn = event.target.name;
    setActiveBtn(btn);
  };

  return (
    <div className="flex flex-col mt-50 gap-7.5 w-full ">
      <div className="mx-auto text-center">
        <h2 className="font-bold text-[40px] mb-2.5 text-[#FFFFFF]">
          {collectionsContent.sectionName}
        </h2>
        <p className="font-medium text-[20px] leading-[120%] text-[#FFFFFF80] max-w-105.75">
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
                    "text-[#FFFFFF] w-full px-[70px] py-[5px] rounded-[5px]!"
                  }
                  id={idx}
                />
              )}
            </>
          );
        })}
      </div>

      <div className="w-full flex gap-3.75">
        {collectionsContent.cards
          .filter((card) => {
            return card.section === activeBtn;
          })
          .map((card, idx) => {
            return <Card card={card} id={idx} />;
          })}
      </div>
    </div>
  );
};

export default Collections;
