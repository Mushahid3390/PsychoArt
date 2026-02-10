import React from "react";
import Button from "../buttons/Button";

const Card = ({ card, id, varient = "default", active, setActive }) => {
  return (
    <>
      {varient === "profile" ? (
        <div
          id={id}
          key={id}
          className={`lg:w-97.25 flex flex-col ${active ? "bg-[#8b8ea0]" : "bg-[#00000040]"} items-center mt-7.5 lg:h-131.25 rounded-[10px]`}
        >
          <div className="w-full sm:h-65.25 rounded-[10px]  relative">
            <img
              className="w-full rounded-[10px] object-center object-cover h-full"
              src={card.CardImg}
            />
            <img
              className="w-24.75 h-24.75 rounded-full object-center object-cover absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] "
              src={card.profileImg}
            />
          </div>

          <div className=" w-full lg:mb-10.5 p-2 lg:px-6.5 flex flex-col">
            <h2 className="font-bold text-center text-[18px] sm:text-[20px] mt-16 text-white">
              {card.creatorName}
            </h2>
            <p className="font-medium text-[16px] text-center mt-2.5 mb-5.5 text-[#FFFFFF80]">
              {card.description}
            </p>
            <Button
              id={id}
              label={"+ Follow"}
              varient={`${active ? "gradientBoder" : "gradient"}`}
              style={`w-full font-medium text-[16px] sm:text-[20px] py-1.5 sm:py-2.5  ${!active ? "text-white" : ""}`}
              OnClick={setActive}
            />
          </div>
        </div>
      ) : (
        <div
          id={id}
          key={id}
          className={`lg:w-97.25 lg:h-148.75 p-3 lg:p-6.5 ${active ? "bg-[#8b8ea0]" : "bg-[#00000040]"} flex flex-col rounded-[10px]`}
        >
          <img
            src={card.img}
            className="lg:w-84.25 md:h-50 lg:h-95 rounded-[10px] mb-5 object-center object-cover"
          />
          <div className="flex justify-between gap-5 mb-5.75 w-full">
            <div>
              <p className="font-medium text-[18px] sm:text-[20px] mb-2.5 text-[#FFFFFF80]">
                {card.owner}
              </p>
              <p className="font-bold text-[18px] sm:text-[20px] text-white">
                {card.productName}
              </p>
            </div>
            <div>
              <p className="font-medium text-[15px] text-[#FFFFFF80]">
                {card.billType}
              </p>
              <p className="font-bold text[18px] sm:text-[20px] text-white">
                {card.bill}
              </p>
            </div>
          </div>
          <Button
            id={id}
            label={"Place a bid"}
            varient={`${active ? "gradientBoder" : "gradient"}`}
            style={`w-full font-medium sm:text-[20px] py-1.5 sm:py-2.5 ${!active ? "text-white" : ""}`}
            OnClick={setActive}
          />
        </div>
      )}
    </>
  );
};

export default Card;
