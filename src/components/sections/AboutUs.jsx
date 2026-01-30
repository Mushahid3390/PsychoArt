import AboutImg from "../../assets/images/AboutImg.svg";
import Button from "../buttons/Button";
import { aboutUsContent } from "../../utils/content";

const AboutUs = () => {
  return (
    <div className="mt-37.5 flex flex-col gap-7.5">
      <div>
        {aboutUsContent.section && <h2 className="font-bold text-[40px] leading-[100%] text-center text-[#FFFFFF]">
          {aboutUsContent.section}
        </h2>}
        <p className="font-medium mt-2.5 text-[20px] leading-[120%] text-center text-[#FFFFFF80]">
          {aboutUsContent.sectionDescription}
        </p>
      </div>

      <div className="flex gap-30">
        <img
          className="w-122.5 h-150 object-center object-cover"
          src={AboutImg}
          alt="img"
        />
        <div className="flex justify-center flex-col rounded-2.5">
          <h2 className="font-bold text-3xl leading-[100%] text-[#FFFFFF]">
            {aboutUsContent.tittle}
          </h2>
          <p className="font-medium text-[20px] leading-[180%] text-[#FFFFFF80] mt-2.5">
            {aboutUsContent.Description}
          </p>
          <Button label="Show more" style={"text-white mt-7.5 w-fit"} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
