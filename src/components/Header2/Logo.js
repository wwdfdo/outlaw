import React from "react";
import logo from "../../images/logov4.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
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
  );
};

export default Logo;
