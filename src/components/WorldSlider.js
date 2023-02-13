import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoPrimitiveDot } from "react-icons/go";

import { useState } from "react";
import banner1 from "../images/horsebg.png";
import banner2 from "../images/horsebg-girl.png";
import "./WorldSlider.css";
import SocialSideMenu from "./SocialSideMenu";

function WorldSlider() {
  const slides = [
    {
      bgImg: "bg-horse-bg",
      title: `Embark on a Journey with  Abigail Marston in 
      The Outlaw's Last Ride`,
      subtitle: ` Discover the Untold Story of the Wild West as You Track Down
      Your Former Gang and Make a Final Stand`,
    },
    {
      bgImg: "bg-horse-bg-girl",
      title: `Embark on a Journey with  Abigail Marston in 
      The Outlaw's Last Ride`,
      subtitle: ` Discover the Untold Story of the Wild West as You Track Down
      Your Former Gang and Make a Final Stand`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  //   const leftArrowHandler = () => {
  //     const isFistIndex = currentIndex === 0;
  //     const newIndex = isFistIndex ? slides.length - 1 : currentIndex - 1;
  //     setCurrentIndex(newIndex);
  //   };
  //   const rightArrowHandler = () => {
  //     const isLastIndex = currentIndex === slides.length - 1;
  //     const newIndex = isLastIndex ? 0 : currentIndex + 1;
  //     setCurrentIndex(newIndex);
  //   };

  const dotsHandler = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full">
      {/* <div
          className=" absolute top-[50%] left-20 text-white text-3xl cursor-pointer"
          onClick={leftArrowHandler}
        >
          a{" "}
        </div>
        <div
          className=" absolute top-[50%] right-20 text-white text-3xl cursor-pointer"
          onClick={rightArrowHandler}
        >
          b{" "}
        </div> */}

      <div
        className={`${slides[currentIndex].bgImg} w-full h-screen flex justify-center items-center transition delay-300 duration-300 ease-in-out`}
      >
        <div className="  w-full flex pl-[20%]     ">
          <div className="  flex flex-col gap-5 justify-start w-1/2 ">
            <h2 className="text-[4.4rem] xl-text-[4.6rem]  ">{`${slides[currentIndex].title}`}</h2>
            <h2 className="text-xl ">{`${slides[currentIndex].subtitle}`}</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center absolute left-[50%] bottom-6 gap-5">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className=" text-center text-5xl cursor-pointer "
            onClick={() => dotsHandler(slideIndex)}
          >
            <GoPrimitiveDot size={22} />
          </div>
        ))}
      </div>
      <SocialSideMenu />
    </div>
  );
}

export default WorldSlider;
