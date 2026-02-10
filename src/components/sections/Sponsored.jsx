import { icons } from "../../utils/content";

const Sponsored = () => {
  return (
    <div className="w-full mt-15 lg:mt-37.5 flex justify-between">
      {icons.map((icon, idx) => {
        return (
          <img key={idx} className={icon.style} src={icon.src} alt={icon.alt} />
        );
      })}
    </div>
  );
};

export default Sponsored;
