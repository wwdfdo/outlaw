import React from "react";

// import Logo from "../Header/Logo";
import Footerlogo from "../../images/logov5.png";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" flex  justify-around gap-10 mx-auto full items-center   py-4 bg-white bg-opacity-10 ">
      {/* <h2 className="text-center text-2xl">PedalsPay</h2> */}
      {/* <div>
        <img className="w-[90px]" src={Footerlogo} alt="" />
      </div> */}

      <h2 className="text-center text-[.7rem] lg:text-[1.2rem]">
        Copyright © 2022.Outlaw Labs All Rights Reserved.
      </h2>
      {/* <div className="flex gap-5">
        <div>
          <a href="#">
            <AiFillInstagram size={24} className="text-[#f0c942]" />
          </a>
        </div>
        <div>
          <a href="#">
            {" "}
            <AiOutlineTwitter size={24} className="text-[#f0c942]" />
          </a>
        </div>
        <div>
          <a href="#">
            {" "}
            <FaDiscord size={24} className="text-[#f0c942]" />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
