import { askedQuestionContent } from "../../utils/content";
import { useState } from "react";
const AskedQuestion = () => {
  const [toggleId, setToggleId] = useState("");

  const handleToggle = (target) => {
    setToggleId(target.id);
  };

  return (
    <div className="w-full flex flex-col gap-12.5 mt-15 lg:mt-50">
      <div>
        <h2 className="font-bold mx-auto text-[25px] sm:text-[40px] text-white max-w-96.75 text-center leading-[180%] ">
          {askedQuestionContent.sectionTitle}
        </h2>
        <p className="font-medium text:[16px] sm:text-[20px] text-[#FFFFFF80] text-center">
          {askedQuestionContent.SectionDesceiption}
        </p>
      </div>
      {/*  grid grid-cols-1 md:grid-cols-2 gap-y-12.5 gap-x-3.75 */}
      <div className="w-full lg:flex lg:gap-3.75 text-[#FFFFFF80]">
        <div className="w-fulllg:w-[calc(50%-calc(15px/2px))]">
          {askedQuestionContent.questions.map((question, idx) => {
            return (
              idx % 2 === 0 && (
                <div
                  className={`border-b mb-12.5 border-b-[#FFFFFF80]`}
                >
                  <div className="flex justify-between pb-5 " key={idx}>
                    <p className="font-medium text-[16px] sm:text-[20px] text-[#FFFFFF80]">{question.Ques}</p>
                    {toggleId === question.id ? (<span
                      className="cursor-pointer  font-medium text-[16px] sm:text-[20px] text-[#FFFFFF80]"
                      onClick={({ target }) => {
                       setToggleId("");
                      }}
                      id={question.id}
                    >
                    -
                    </span>) : <span
                      className="cursor-pointer font-medium text-[16px] sm:text-[20px] text-[#FFFFFF80]"
                      onClick={({ target }) => {
                        handleToggle(target);
                      }}
                      id={question.id}
                    >
                      +
                    </span>}
                  </div>

                  <div
                    className={`${toggleId === question.id ? "h-[100.5px] overflow-y-auto" : ""} sidebar-none h-0 transition-all duration-500 backdrop-blur-xl  shadow-lg shadow-white/10 overflow-hidden top-0 left-0   border-b-[#FFFFFF80] w-full`}
                  >
                    <p className="">{question.ans}</p>
                  </div>
                </div>
              )
            );
          })}
        </div>

        <div classname='w-full lg:w-[calc(50%-calc(15px/2px))]'>
          {askedQuestionContent.questions.map((question, idx) => {
            return (
              idx % 2 !== 0 && (
                <div
                  className={`w-full border-b mb-12.5 border-b-[#FFFFFF80] `}
                >
                  <div className="flex justify-between pb-5 " key={idx}>
                    <p className="font-medium text-[16px] sm:text-[20px] text-[#FFFFFF80]">{question.Ques}</p>
                     {toggleId === question.id ? (<span
                      className="cursor-pointer font-medium text-[16px] sm:text-[20px] text-[#FFFFFF80]"
                      onClick={({ target }) => {
                       setToggleId("");
                      }}
                      id={question.id}
                    >
                    -
                    </span>) : <span
                      className="cursor-pointer font-medium text-[16px] sm:text-[20px] text-[#FFFFFF80]"
                      onClick={({ target }) => {
                        handleToggle(target);
                      }}
                      id={question.id}
                    >
                      +
                    </span>}
                  </div>

                  <div
                    className={`${toggleId === question.id ? "h-[100.5px] overflow-y-auto" : ""} sidebar-none h-0 transition-all duration-500 backdrop-blur-xl  shadow-lg shadow-white/10 overflow-hidden top-0 left-0   border-b-[#FFFFFF80] w-full`}
                  >
                    <p className="">{question.ans}</p>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AskedQuestion;