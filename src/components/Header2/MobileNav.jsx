import React from "react";
import { ImMenu } from "react-icons/im";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { menus } from "../../arrays/menus";
import Logo from "./Logo";
import SocialSideMenu from "../SocialSideMenu";
import { Link } from "react-router-dom";
import { menuButtons } from "../../arrays/menuButtons";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <HiOutlineMenu
      className="text-[30px] absolute right-[3%] top-2"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  const closeIcon = (
    <CgClose
      className="text-[30px] absolute right-[3%] top-2"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <div className="flex fixed justify-between w-full lg:hidden bg-[#eb3c27]">
      <Logo width="w-[50px]" />
      <div
        className={`lg:hidden gap-10 lg:h-screen justify-center  items-center text-xl tracking-widest font-semibold flex  flex-col ${
          open ? "bg-[#000000] p-5 absolute w-full h-screen  bg-opacity-95" : ""
        }`}
      >
        {open ? closeIcon : hamburgerIcon}
        {open &&
          menus.map((menu) => (
            <a
              key={menu.id}
              className={`text-[#ffffff]  ${
                menu.id === "button"
                  ? "bg-[#274077] py-3 px-5 rounded-md text-[#ffffff]"
                  : ""
              }`}
              href={menu.url}
              onClick={() => closeMobileMenu()}
            >
              {menu.name}
            </a>
          ))}
        {open && (
          <ul className="flex   items-center ">
            {menuButtons.map((menuButton) => (
              <Link
                key={menuButton.id}
                to={menuButton.url}
                className="tracking-[.1825rem] font-bold text-[0.9rem] px-3 h-8 text-center rounded-md flex items-center cursor-pointer uppercase "
                onClick={() => closeMobileMenu()}
              >
                {menuButton.name}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
