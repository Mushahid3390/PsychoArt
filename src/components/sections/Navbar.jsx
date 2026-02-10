import { navbarContent } from "../../utils/content";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState(true);

  const handleMenu = () => {
    setActive(!active);
  };
  return (
    <div className="relative w-full flex justify-between gap-5 items-center">
      <img
        src={navbarContent.logo.psychoArt}
        alt={navbarContent.logo.alt}
        className="w-full max-w-33.25 h-9.5 font-bold"
      />

      <div className="hidden lg:block md:max-w-[384px] md:w-full py-2.5 pl-2.5 pr-13 rounded-[10px] font-medium bg-[#FFFFFF1A] ">
        <div className="flex gap-2 justify-start items-center">
          <img
            src={navbarContent.icons.magnifyingGlass}
            alt={navbarContent.icons.alt}
            className="text-[#FFFFFF] lg:h-4 xl:w-5 xl:h-5"
          />
          <input
            className="text-[18px] md:text-[20px] text-[#FFFFFF] w-73  outline-none"
            type="text"
            placeholder="Search items and collections"
          />
        </div>
      </div>

      <div className={`hidden lg:block max-w-135.25 max-h-17.5 w-full p-2.5`}>
        <div className="flex items-center gap-5 xl:gap-10 text-[18px] xl:text-[20px] font-medium [&>*:not(.no-hover)]:hover:text-blue-500 text-[#FFFFFF]">
          {navbarContent.navigations.map((navigator, idx) => {
            return (
              <div key={idx} className={`${navigator.style}`}>
                <Link to="#">{navigator.name}</Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:hidden">
        {active ? (
          <FiAlignJustify
            onClick={handleMenu}
            className="text-white font-bold size-8 text-[40px]"
          />
        ) : (
          <div className="fixed w-screen h-screen px-8 text-white text-[20px] left-0 top-0 flex pt-15 flex-col items-center gap-10 bg-transparent backdrop-blur-lg z-50">
            <RxCross1
              onClick={handleMenu}
              className="absolute right-8 text-white top-4 z-50 font-bold size-8 text-[40px]"
            />

            <div className="sm:w-70 pr-3 xl:w-[384px] py-2.5 pl-2.5 lg:pr-13 rounded-[10px] font-medium bg-[#FFFFFF1A] ">
              <div className="flex gap-2 justify-start items-center">
                <img
                  src={navbarContent.icons.magnifyingGlass}
                  alt={navbarContent.icons.alt}
                  className="text-[#FFFFFF] lg:h-4 xl:w-5 xl:h-5"
                />
                <input
                  className="lg:text-[16px] w-full sm:text-[20px] text-[#FFFFFF] lg:w-74.5  outline-none"
                  type="text"
                  placeholder="Search items and collections"
                />
              </div>
            </div>
            {navbarContent.navigations.map((navigator, idx) => {
              return (
                <div key={idx} className={`${navigator.style}`}>
                  <Link to="#">{navigator.name}</Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
