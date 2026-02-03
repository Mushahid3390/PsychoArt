import React from "react";
import { Link } from "react-router-dom";
import { footerContent } from "../../utils/content";

const Footer = () => {
  return (
    <div className="lg:mt-50 mt-15 grid grid-cols-1 lg:grid-flow-col sm:grid-cols-2 gap-10 sm:gap-15 lg:gap-32.75 *:font-bold *:text-[20px] *:text-white w-full">
      <div className="flex flex-col gap-5">
        <h1>
          <img
            className=""
            src={footerContent.projectDetails.projectName}
            atl="logo"
          />
        </h1>
        <p className="font-medium max-w-[288px] text-[15px] text-[#FFFFFF80]">
          {footerContent.projectDetails.projectOverView}
        </p>
      </div>
      {footerContent?.about && (
        <div className="flex flex-col gap-5">
          <h1>About</h1>
          {footerContent.about.map((page, idx) => {
            return (
              <Link
                className="font-medium hover:text-white text-[15px] text-[#FFFFFF80]"
                to={page.Link}
              >
                {page.page}
              </Link>
            );
          })}
        </div>
      )}

      {footerContent?.company && (
        <div className="flex flex-col gap-5">
          <h1>Company</h1>
          {footerContent.about.map((page, idx) => {
            return (
              <Link
                className="font-medium hover:text-white text-[15px] text-[#FFFFFF80]"
                to={page.Link}
              >
                {page.page}
              </Link>
            );
          })}
        </div>
      )}

      {footerContent?.contact && (
        <div className="flex flex-col gap-5">
          <h1>Contact</h1>
          <p className="hover:text-white font-medium text-[15px] text-[#FFFFFF80]">
            {footerContent.contact.phoneNumber}
          </p>
          <p className="hover:text-white font-medium text-[15px] text-[#FFFFFF80]">
            {footerContent.contact.email}
          </p>
          {footerContent.contact.socialMedias?.length > 0 && (
            <div className="flex gap-10">
              {footerContent.contact.socialMedias.map((media, idx) => {
                return (
                  <Link key={idx} to={media.Link}>
                    <img className="" src={media.plateform} alt="logo" />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Footer;
