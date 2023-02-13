import React from "react";
import Rock from "../images/rock.png";
import Cowgirl from "../images/maincowgirl1.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function VideoBg() {
  return (
    <div className="relative  w-full h-screen  flex  items-end xl-items-center">
      {/* <video loop autoPlay muted className="w-full h-screen object-cover">
        <source src={Branz} type="video/mp4" />
      </video> */}
      <div className="  w-full flex justify-center gap-[10%]  bottom-0 pb-36 xl-pb-48  ">
        <div className="  flex flex-col gap-5 justify-start ">
          <h2 className="text-[3.8rem] xl-text-[4.2rem] font-bold ">
            Embark on a Journey with <br /> Abigail Marston in <br />
            The Outlaw's Last Ride
          </h2>
          <h2 className="text-xl ">
            Discover the Untold Story of the Wild West as You Track Down <br />
            Your Former Gang and Make a Final Stand
          </h2>
        </div>
        <img
          className="w-[22%] xl-w-[30%] -mt-10 -mr-10"
          src={Cowgirl}
          alt=""
        />
      </div>
      <div className="flex absolute  bottom-5 right-5 w-1/2 bg-red-800 h-24 z-20  items-center justify-between rounded-md shadow-lg">
        <img src={Rock} className="w-20 absolute left-2 bottom-1" alt="" />
        <div className="relative ml-28 text-white font-semibold">
          <p>THE WORD OF</p>
          <h2 className=" uppercase">The Outlaw's Last Ride //</h2>
        </div>
        <button className="bg-white mr-10 px-6 py-2 flex items-center font-bold ">
          DISCOVER{" "}
          <span>
            <MdKeyboardArrowRight size={24} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default VideoBg;
