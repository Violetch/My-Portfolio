import React from "react";
import { Mapping } from "../../../mapping";
import { MENU_ICONS } from "../../../constant/menu";
import { Link } from "react-scroll";
import { NAVBAR_LIST } from "../../../constant/navbar";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-center">
      <div className="fo-wrapper-content flex flex-col items-center  w-[1920px]">
        <div className="flex py-7 w-full justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-black">CH.</h1>
            <div className="flex items-center gap-5">
              <Mapping
                of={MENU_ICONS}
                render={(item, index) => (
                  <a key={index} href={item.url}>
                    {item.icon}
                  </a>
                )}
              />
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-16">
            <Mapping
              of={NAVBAR_LIST}
              render={(item, index) => (
                <Link
                  className="text-xl hover:tracking-widest duration-200 cursor-pointer"
                  to={item.link}
                  key={index}
                >
                  {item.title}
                </Link>
              )}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold tracking-wider">Contact Me</h1>
            <ul className="fo-wrapper-contact flex flex-col gap-1">
              <li className="relative opacity-70 hover:opacity-100 cursor-pointer duration-200">
                anyazosen@gmail.com
              </li>
              <li className="relative opacity-70 hover:opacity-100 w-fit cursor-pointer duration-200">
                0823-3889-7053
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-neutral-900/30 mx-auto hr h-[1px]"></div>
        <h1 className="py-7">
          © {currentYear} Chlynhavia. All Right Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
