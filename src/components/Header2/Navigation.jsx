import React from "react";
import SocialSideMenu from "../SocialSideMenu";
import { menus } from "../../arrays/menus";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const Navigation = () => {
  const [headerColor, SetHeaderColor] = useState(false);

  const changeHeaderBg = () => {
    console.log(window.scrollY);
    if (window.scrollY > 0) {
      SetHeaderColor(true);
    } else {
      SetHeaderColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderBg);
  }, []);
  return (
    <div className="w-full lg:flex justify-center hidden ">
      <div
        className={` fixed flex justify-between  px-[10%] min-h-[80px] items-center w-full  z-[1000]  ${
          headerColor ? "bg-[#ed3b4b]" : "bg-transparent"
        }`}
      >
        <Logo width="w-[80px]" />
        <ul className="flex gap-5 items-center text-[#e7ded6] ">
          {menus.map((menu) => (
            <Link
              key={menu.id}
              to={menu.url}
              className="tracking-[.2825rem] font-normal lg:text-[1rem] text-[0.5rem] px-3 h-8 text-center rounded-md flex items-center cursor-pointer uppercase "
            >
              <li> {menu.name}</li>
            </Link>
          ))}
        </ul>

        {/* <ul className="flex gap-5 items-center">
        {navButtons.map((navButton) => (
          <Link
            key={navButton.id}
            to={navButton.url}
            className={` justify-center text-[#e7ded6]  h-8 text-center  flex items-center cursor-pointer uppercase ${navButton.style}`}
          >
            <li> {navButton.name}</li>
          </Link>
        ))}
      </ul> */}

        <SocialSideMenu />
      </div>
    </div>
  );
};

export default Navigation;
