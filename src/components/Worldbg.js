import React from "react";
// import worldbg from "../images/world1.mp4";
// import horsebg from "../images/horsebg.png";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import smokingirl from "../images/character-animated-transparent.gif";
import Logo from "./Header2/Logo";

// import SocialSideMenu from "./SocialSideMenu";
// import cowboy from "../audios/Cowboy.mp3";

function Worldbg() {
  return (
    <div className="relative bg-horse-bg-girl-pantom lg:bg-cover w-full h-screen  flex lg:flex-row lg:justify-around justify-center items-center lg:items-center  max-w-[3000px] flex-col">
      {/* <video loop autoPlay muted className="w-full h-screen object-cover">
        <source src={worldbg} type="video/mp4" />
      </video> */}

      <div className=" flex  lg:pl-[5%] self-start ">
        <div className="  flex flex-col  lg:justify-center justify-center mt-20 lg:mt-0  ">
          <div className="flex justify-start rotate -mb-4  ">
            <Logo width="lg:w-[450px] pt-10  -rotate-12" />
          </div>
          <h2 className="lg:text-[5.8rem]  text-[2.5rem] lg:leading-[6rem] leading-[3rem] mb-[5%]   ">
            {/* Embark on a Journey with <br /> Abigail Marston in <br /> */}
            The Outlaw's <br /> Last Ride
          </h2>
          {/* <h2 className="text-[5.8rem] xl-text-[4.6rem] leading-tight  ">
            From the garden <br /> to the alley
          </h2> */}
          <h2 className="lg:text-xl text-[0.5rem] font-light mb-[1%] ">
            Discover the Untold Story of the Wild West as You Track Down <br />
            Your Former Gang and Make a Final Stand
          </h2>
          <div className="flex lg:flex-nowrap lg:justify-start justify-center  flex-wrap lg:gap-4 gap-2 lg:mt-5 mt-2">
            <div className="flex items-center gap-1 bg-black lg:px-5 lg:py-3 py-2 px-2 lg:text-base  text-[0.5rem] rounded-3xl bg-opacity-70 hover:bg-opacity-80 cursor-pointer ">
              <span>A THIRSTY SIDEKICK</span>
              <HiOutlineArrowNarrowDown />
            </div>
            <div className="flex items-center gap-1 bg-white bg-opacity-20 hover:bg-opacity-30 lg:px-5 px-2 lg:py-3 py-2 lg:text-base text-[0.5rem] rounded-3xl cursor-pointer ">
              <span>VIEW GALLERY</span>
              <HiOutlineArrowNarrowRight />
            </div>
            <div className="flex items-center gap-1 bg-white bg-opacity-20 hover:bg-opacity-30 lg:px-5 px-2 lg:py-3 py-2 rounded-3xl lg:text-base text-[0.5rem] cursor-pointer">
              <span>OPENSEA</span>
              <HiOutlineArrowNarrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:self-end self-center lg:w-[37%] w-full">
        <img src={smokingirl} className=" " alt="" />
      </div>
      {/* <SocialSideMenu /> */}
    </div>
  );
}

export default Worldbg;
