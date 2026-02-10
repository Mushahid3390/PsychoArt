import Button from "../buttons/Button";

const CollectNft = () => {
  return (
    <div className="w-full flex flex-col items-center mt-15 lg:mt-50 py-5 sm:py-12.5 bg-linear-to-tr from-[#671AE4] to-[#B75CFF]">
      <h1 className="font-bold max-w-124.5 text-center text-3xl sm:text-[50px] text-white">
        Get ready to collect our NFT
      </h1>
      <Button
        label={"Get Started"}
        style={
          "w-fit text-[#FFFFFF] mt-5 bg-[#FFFFFF80] sm:text-[20px]  font-medium"
        }
      />
    </div>
  );
};

export default CollectNft;
