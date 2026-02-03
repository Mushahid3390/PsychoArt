import { askedQuestionContent } from "../../utils/content";
const AskedQuestion = () => {
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

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-12.5 gap-x-3.75 *:flex *:justify-between *:border-b *:border-b-[#FFFFFF80] *:pb-5 text-[#FFFFFF80]">
        {askedQuestionContent.questions.map((ques, idx) => {
          return (
            <div key={idx}>
              <p>{ques}</p>
              <span>+</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AskedQuestion;
