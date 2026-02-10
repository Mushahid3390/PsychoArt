import { Link } from "react-router-dom";
import { footerContent } from "../../utils/content";

const Footer = () => {
  return (
    <div className="lg:mt-50 mt-15 grid-cols-1 grid gap-10 sm:grid-cols-2 sm:gap-25 lg:grid-cols-none lg:auto-cols-max lg:grid-flow-col lg:gap-0 justify-between *:font-bold *:text-[20px] *:text-white w-full">
      <div className="inline-flex items-start w-fit flex-col gap-5">
        <h1>
          <img
            className="max-w-[107px] w-full h-7.5"
            src={footerContent.projectDetails.projectName}
            alt="logo"
          />
        </h1>
        <p className="font-medium max-w-[288px] w-full text-[15px] text-[#FFFFFF80]">
          {footerContent.projectDetails.projectOverView}
        </p>
      </div>
      {footerContent?.about && (
        <div className="inline-flex items-start w-fit flex-col gap-5">
          <h1 >About</h1>
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
        <div className="inline-flex items-start w-fit flex-col gap-5">
          <h1 className="">Company</h1>
          {footerContent.company.map((page, idx) => {
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
        <div className="inline-flex items-start w-fit flex-col gap-5">
          <h1 className="">Contact</h1>
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
