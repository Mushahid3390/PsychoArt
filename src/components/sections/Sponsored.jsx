import { icons } from "../../utils/content";

const Sponsored = () => {
  return (
    <div className="w-full mt-37.5 flex justify-between gap-[154.5px]">
      {icons.map((icon, idx) => {
        return <img key={idx} className={icon.style} src={icon.src} alt={icon.alt} />;
      })}
    </div>
  );
};

export default Sponsored;
