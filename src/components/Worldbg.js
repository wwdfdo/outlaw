import React from "react";
// import worldbg from "../images/world1.mp4";
// import horsebg from "../images/horsebg.png";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import smokingirl from "../images/character-animated-transparent.gif";

import SocialSideMenu from "./SocialSideMenu";
// import cowboy from "../audios/Cowboy.mp3";

function Worldbg() {
  return (
    <div className="relative bg-horse-bg-girl-pantom bg-cover w-full h-screen  flex justify-around  items-center xl-items-center max-w-[3000px]">
      {/* <video loop autoPlay muted className="w-full h-screen object-cover">
        <source src={worldbg} type="video/mp4" />
      </video> */}

      <div className=" flex  pl-[4%]   ">
        <div className="  flex flex-col gap-5 justify-start ">
          <h2 className="text-[6rem] xl-text-[4.6rem] leading-[6rem]   ">
            {/* Embark on a Journey with <br /> Abigail Marston in <br /> */}
            The Outlaw's <br /> Last Ride
          </h2>
          {/* <h2 className="text-[5.8rem] xl-text-[4.6rem] leading-tight  ">
            From the garden <br /> to the alley
          </h2> */}
          <h2 className="text-xl font-light ">
            Discover the Untold Story of the Wild West as You Track Down <br />
            Your Former Gang and Make a Final Stand
          </h2>
          <div className="flex gap-4 mt-5">
            <div className="flex items-center gap-1 bg-black px-5 py-3 rounded-3xl bg-opacity-70 hover:bg-opacity-80 cursor-pointer ">
              <span>A THIRSTY SIDEKICK</span>
              <HiOutlineArrowNarrowDown />
            </div>
            <div className="flex items-center gap-1 bg-white bg-opacity-20 hover:bg-opacity-30 px-5 py-3 rounded-3xl cursor-pointer ">
              <span>VIEW GALLERY</span>
              <HiOutlineArrowNarrowRight />
            </div>
            <div className="flex items-center gap-1 bg-white bg-opacity-20 hover:bg-opacity-30 px-5 py-3 rounded-3xl cursor-pointer">
              <span>OPENSEA</span>
              <HiOutlineArrowNarrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className=" self-end lg:w-[35%] w-[540px]">
        <img src={smokingirl} className=" " alt="" />
      </div>
      <SocialSideMenu />
    </div>
  );
}

export default Worldbg;
