import React from "react";
import MobileNav from "./MobileNav";

// import { navButtons } from "../../arrays/navButtons";

import Navigation from "./Navigation";

function Header2() {
  return (
    <div className="w-full min-h-[64px] fixed z-20  font-bold  font-montserrat">
      <Navigation />
      <MobileNav />
    </div>
  );
}

export default Header2;
