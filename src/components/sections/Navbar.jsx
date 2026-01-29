import { navbarContent } from "../../utils/content";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center mb-25">
      <img
        src={navbarContent.logo.psychoArt}
        alt={navbarContent.logo.alt}
        className="font-bold text-[25px]"
      />

      <div className=" w-[384px] h-12.5 py-2.5 pl-2.5 pr-13 rounded-[10px] font-medium bg-[#FFFFFF1A] ">
        <div className="flex gap-2 justify-start items-center">
          <img
            src={navbarContent.icons.magnifyingGlass}
            alt={navbarContent.icons.alt}
            className="text-[#FFFFFF] w-5 h-5"
          />
          <input
            className="text-[20px] text-[#FFFFFF] w-74.5  outline-none"
            type="text"
            placeholder="Search items and collections"
          />
        </div>
      </div>

      <div className="p-2.5">
        <div className="flex items-center gap-10 text-[20px] font-medium [&>*:not(.no-hover)]:hover:text-blue-500 text-[#FFFFFF]">
          {navbarContent.navigations.map((navigator, idx) => {
            return (
              <div key={idx} className={`${navigator.style}`}>
                <Link to="#">{navigator.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
