import React from "react";
import { Link } from "react-router-dom";
import { footerContent } from "../../utils/content";

const Footer = () => {
  return (
    <div className="mt-50 flex gap-32.75 *:font-bold *:text-[20px] *:text-white w-full">
      <div className="flex  flex-col gap-5">
        <h1>
          <img
            className="w-26.75 h-7.5"
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
                className="font-medium text-[15px] text-[#FFFFFF80]"
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
          {footerContent.company.map((page, idx) => {
            return (
              <Link
                className="font-medium text-[15px] text-[#FFFFFF80]"
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
          <p className="font-medium text-[15px] text-[#FFFFFF80]">{footerContent.contact.phoneNumber}</p>
          <p className="font-medium text-[15px] text-[#FFFFFF80]">{footerContent.contact.email}</p>
          {footerContent.contact.socialMedias?.length >0 && (
              <div className="flex gap-10">
                {footerContent.contact.socialMedias.map((media, idx) => {
                  return (
                    <Link key={idx} to={media.Link}>
                      <img src={media.plateform} alt="logo" />
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
