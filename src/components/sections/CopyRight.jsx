import { creator } from "../../utils/content";

const CopyRight = () => {
  return (
    <div className="mt-8 lg:mt-25 font-medium text-[12px] md:text-[20px] text-center w-full">
      <p className="text-[#FFFFFF80]">
        Created by<span className="text-white font-bold"> {creator.name} </span>
        | All Right Reserved!
      </p>
    </div>
  );
};

export default CopyRight;
