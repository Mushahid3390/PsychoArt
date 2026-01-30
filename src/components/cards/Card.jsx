import React from "react";
import Button from "../buttons/Button";

const Card = ({ card, id, varient = "default" }) => {
  return (
    <>
      {varient === "profile" ? (
        <div
          key={id}
          className="w-97.25 flex flex-col bg-[#00000040] items-center mt-7.5 h-131.25 rounded-[10px]"
        >
          <div className="w-full h-65.25 rounded-[10px]  relative">
            <img
              className="w-full rounded-[10px] object-center object-cover h-full"
              src={card.CardImg}
            />
            <img
              className="w-24.75 h-24.75 rounded-full object-center object-cover absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] "
              src={card.profileImg}
            />
          </div>

          <div className=" w-full mb-10.5 px-6.5 flex flex-col items-center">
            <h2 className="font-bold text-[20px] mt-16 text-white">
              {card.creatorName}
            </h2>
            <p className="font-medium text-[15px] text-center mt-2.5 text-[#FFFFFF80]">
              {card.description}
            </p>
            <Button
              label={"+ Follow"}
              varient="gradient"
              style={"w-full font-medium text-[20px] mt-5.5 py-2.5 text-white"}
            />
          </div>
           
        </div>
      ) : (
        <div
          key={id}
          className="w-97.25 h-148.75 p-6.5 bg-[#00000040] flex flex-col rounded-[10px]"
        >
          <img
            src={card.img}
            className="w-84.25 h-95] rounded-[10px] mb-5 object-center object-cover"
          />
          <div className="flex justify-between mb-5.75 w-full">
            <div>
              <p className="font-medium text-[20px] mb-2.5 text-[#FFFFFF80]">
                {card.owner}
              </p>
              <p className="font-bold text-[20px] text-white">
                {card.productName}
              </p>
            </div>
            <div>
              <p className="font-medium text-[15px] text-[#FFFFFF80]">
                {card.billType}
              </p>
              <p className="font-bold text-[20px] text-white">{card.bill}</p>
            </div>
          </div>
          <Button
            label={"Place a bid"}
            varient="gradient"
            style={"w-full font-medium text-[20px] py-2.5 text-white"}
          />
        </div>
      )}
    </>
  );
};

export default Card;
