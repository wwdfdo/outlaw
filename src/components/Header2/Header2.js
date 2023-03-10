import React from "react";
import logo from "../../images/logov4.png";
import { menus } from "../../arrays/menus";
import { Link } from "react-router-dom";
// import { navButtons } from "../../arrays/navButtons";
import { useEffect, useState } from "react";
import SocialSideMenu from "../SocialSideMenu";

function Header2() {
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
        className={` fixed flex justify-around min-h-[80px] items-center w-full  z-[1000]  ${
          headerColor ? "bg-[#eb3c27]" : "bg-transparent"
        }`}
      >
        <div className="p-2  rounded-md">
          <Link to="/">
            {" "}
            {/* <img className="w-[60px] " src={logo} alt="" /> */}
            <img className="w-[150px] " src={logo} alt="" />
            {/* <p className="text-white uppercase font-extrabold text-sm">
              The Outlaw's Last Ride
            </p> */}
          </Link>
        </div>
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
}

export default Header2;
