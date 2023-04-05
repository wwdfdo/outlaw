import React from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import smokingirl from "../../images/character-animated-transparent.gif";

// import SocialSideMenu from "./SocialSideMenu";
// import cowboy from "../audios/Cowboy.mp3";
import "./Tolrbg.css";

const Tolrbg = () => {
  return (
    <div className="relative bg-horse-onlytorl lg:bg-cover w-full h-screen  flex lg:flex-row lg:justify-start justify-start items-center lg:items-center  flex-col">
      {/* <video loop autoPlay muted className="w-full h-screen object-cover">
    <source src={worldbg} type="video/mp4" />
  </video> */}

      <div className=" flex  lg:pl-[10%]  mt-[30%] lg:mt-0  ">
        <div className="  flex flex-col lg:gap-5 gap-3 lg:justify-start justify-center   ">
          <h2 className="lg:text-[6rem]   text-[2.5rem] lg:leading-[6rem] leading-[3rem]   ">
            {/* Embark on a Journey with <br /> Abigail Marston in <br /> */}
            The Outlaw's <br /> Last Ride
          </h2>
          {/* <h2 className="text-[5.8rem] xl-text-[4.6rem] leading-tight  ">
        From the garden <br /> to the alley
      </h2> */}
          <h2 className="lg:text-xl text-[0.5rem] font-light torl-slogan ">
            Discover the Untold Story of the Wild West as You Track Down <br />
            Your Former Gang and Make a Final Stand
          </h2>
          <div className="flex lg:flex-nowrap lg:justify-start justify-center  flex-wrap lg:gap-4 gap-2 lg:mt-5 mt-2">
            <div className="flex items-center gap-1 bg-black lg:px-5 lg:py-3 py-2 px-3 lg:text-base  text-[0.5rem] rounded-3xl bg-opacity-70 hover:bg-opacity-80 lg:tracking-normal tracking-widest cursor-pointer ">
              <span>A THIRSTY SIDEKICK</span>
              <HiOutlineArrowNarrowDown />
            </div>
            <div className="flex items-center gap-1 bg-white bg-opacity-20 hover:bg-opacity-30 lg:px-5 px-3 lg:py-3 py-2 lg:text-base text-[0.5rem] rounded-3xl lg:tracking-normal tracking-widest cursor-pointer ">
              <span>VIEW GALLERY</span>
              <HiOutlineArrowNarrowRight />
            </div>
            <div className="flex items-center gap-1 bg-white bg-opacity-20 hover:bg-opacity-30 lg:px-5 px-3 lg:py-3 py-2 rounded-3xl lg:text-base text-[0.5rem] lg:tracking-normal tracking-widest cursor-pointer">
              <span>OPENSEA</span>
              <HiOutlineArrowNarrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="  lg:w-[37%] w-full torl-girl ">
        <img src={smokingirl} className=" " alt="" />
      </div>
      {/* <SocialSideMenu /> */}
    </div>
  );
};

export default Tolrbg;