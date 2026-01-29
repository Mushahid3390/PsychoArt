import Button from "../buttons/Button";
import Banner7 from "../../assets/images/Banner7.svg";
import { homeData } from "../../utils/content";

const home = () => {
  return (
    <div className="w-full flex">
      {/* //Left Div */}
      <div className="w-1/2 flex flex-col justify-center gap-10 h-129.25">
        <div className="w-122.5 flex flex-col">
          <h1 className="font-bold text-[50px] leading-[120%] text-[#FFFFFF]">
            {homeData.tittle}
          </h1>
          <p className="font-medium text-[20px] leading-[180%] mt-2.5 text-[#FFFFFF80]">
            {homeData.description}
          </p>
          <div className="flex gap-5 mt-7.5 text-[20px] text-[#FFFFFF] font-medium leading-[100%]">
            <Button label="Explor Now" />
            <button className="py-2.5 px-5 hover:opacity-85 rounded-[10px] bg-[#FFFFFF1A]">
              {homeData.btnLabel}
            </button>
          </div>
        </div>
        <div className="gap-27.75 flex">
          {homeData.statistics.map((statistic, idx) => {
            return (
              <div key={idx} className="flex flex-col items-center ">
                <h2 className="font-bold pb-2.5 text-3xl leading-[100%] text-[#FFFFFF]">
                  {statistic.counts}
                </h2>
                <p className="font-medium text-[20px] leading-[100%] text-[#FFFFFF80]">
                  {statistic.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Banner Div */}
      <div className="w-1/2 h-129.25 gap-3 flex flex-col flex-wrap ">
        {homeData.images.map((image, idx) => {
          return <img src={image.src} alt={image.alt} />;
        })}
        <img className="my-auto" src={Banner7} alt="bannner7" />
      </div>
    </div>
  );
};

export default home;
