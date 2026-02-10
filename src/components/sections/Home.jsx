import Button from "../buttons/Button";
import { homeData } from "../../utils/content";

const home = () => {
  return (
    <div className="lg:mt-25 w-full flex flex-col lg:flex-row items-center lg:gap-5 lg:justify-between">
      {/* //Left Div */}
      <div className="lg:max-w-122.5 flex flex-col justify-center lg:text-start text-center items-center lg:items-start gap-5 sm:gap-10 h-129.25">
        <div className="max-w-[320px] lg:items-start items-center sm:max-w-126.5 flex flex-col">
          <h1 className="font-bold text-[32px] sm:text-[50px] sm:leading-[120%] text-[#FFFFFF]">
            {homeData.tittle}
          </h1>
          <p className="font-medium text-[16px] lg:text-[20px] lg:leading-[180%] mt-2.5 text-[#FFFFFF80]">
            {homeData.description}
          </p>
          <div className="flex gap-5 mt-7.5 text-[#FFFFFF]">
            <Button label="Explore Now" varient="gradient" style="px-5 py-2.5 lg:text-[20px] font-medium " />
            <Button label={homeData.btnLabel}  style="px-5 py-2.5 lg:text-[20px] font-medium" />
          </div>
        </div>
        <div className="gap-8 lg:gap-27.75 flex">
          {homeData.statistics.map((statistic, idx) => {
            return (
              <div key={idx} className="flex flex-col items-center ">
                <h2 className="font-bold pb-2.5 text-[22px] lg:text-3xl leading-[100%] text-[#FFFFFF]">
                  {statistic.counts}
                </h2>
                <p className="font-medium text-[16px] lg:text-[20px] leading-[100%] text-[#FFFFFF80]">
                  {statistic.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Banner Div */}
      <div className="sm:max-w-126.5 lg:max-w-147.75">
        <img src={homeData.image} alt="logo" />
      </div>
    </div>
  );
};

export default home;
