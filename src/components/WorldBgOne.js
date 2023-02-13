import React from "react";

function WorldBgOne() {
  return (
    <div className="relative bg-horse-bg-girl w-full h-screen bg-cover flex  items-center xl-items-center max-w-[3000px]">
      {/* <video loop autoPlay muted className="w-full h-screen object-cover">
      <source src={worldbg} type="video/mp4" />
    </video> */}

      <div className="  w-full flex pl-[20%]     ">
        <div className="  flex flex-col gap-5 justify-start ">
          <h2 className="text-[4.4rem] xl-text-[4.6rem]  ">
            Embark on a Journey with <br /> Abigail Marston in <br />
            The Outlaw's Last Ride
          </h2>
          <h2 className="text-xl ">
            Discover the Untold Story of the Wild West as You Track Down <br />
            Your Former Gang and Make a Final Stand
          </h2>
        </div>
      </div>
    </div>
  );
}

export default WorldBgOne;
