import React from "react";
import { menuButtons } from "../arrays/menuButtons";
import { Link } from "react-router-dom";

function SocialSideMenu() {
  return (
    <ul className="flex flex-col gap-5 items-center absolute right-5 bottom-10">
      <div className="h-32 w-[1px] bg-white"></div>
      {menuButtons.map((menuButton) => (
        <Link
          key={menuButton.id}
          to={menuButton.url}
          className="tracking-[.1825rem] font-bold text-[0.8rem] px-3 h-7 text-center rounded-md flex items-center cursor-pointer uppercase "
        >
          <li> {menuButton.name}</li>
        </Link>
      ))}
    </ul>
  );
}

export default SocialSideMenu;
