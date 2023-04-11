import React from "react";
import logo from "../images/logov1.png";
import { menus } from "../arrays/menus";
import { Link } from "react-router-dom";
import { menuButtons } from "../arrays/menuButtons";
import { useEffect, useState } from "react";

function Header() {
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
    <div className="w-full flex justify-center">
      <div
        className={` fixed flex justify-around min-h-[80px] items-center w-full  z-[100]  ${
          headerColor ? "bg-[#d40000]" : "bg-transparent"
        }`}
      >
        <div className="p-2  rounded-md">
          <a href="/">
            {" "}
            {/* <img className="w-[60px] " src={logo} alt="" /> */}
            <img className="w-[60px] " src={logo} alt="" />
            {/* <p className="text-white uppercase font-extrabold text-sm">
              The Outlaw's Last Ride
            </p> */}
          </a>
        </div>
        <ul className="flex gap-5 items-center">
          {menus.map((menu) => (
            <a
              href={menu.url}
              key={menu.id}
              className="tracking-[.1825rem] font-normal text-[0.8rem] px-3 h-7 text-center rounded-md flex items-center cursor-pointer uppercase "
            >
              <li> {menu.name}</li>
            </a>
          ))}
        </ul>

        <ul className="flex gap-5 items-center">
          {menuButtons.map((menuButton) => (
            <a
              key={menuButton.id}
              href={menuButton.url}
              className="tracking-[.1825rem] font-bold text-[0.8rem] px-3 h-7 text-center rounded-md flex items-center cursor-pointer uppercase "
            >
              <li> {menuButton.name}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
