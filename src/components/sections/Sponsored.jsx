import { icons } from "../../utils/content";

const Sponsored = () => {
  return (
    <div className="w-full mt-15 lg:mt-37.5 flex *:w-22.5 sm:*:w-45 md:*:w-55 lg:*:W-[300PX] justify-between">
      {icons.map((icon, idx) => {
        return (
          <img key={idx} className={icon.style} src={icon.src} alt={icon.alt} />
        );
      })}
    </div>
  );
};

export default Sponsored;
