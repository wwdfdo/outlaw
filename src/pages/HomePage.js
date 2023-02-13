import React from "react";
import QuestionSection from "../components/Questions/QuestionSection";
// import VideoBg from "../components/VideoBg";
import Worldbg from "../components/Worldbg";
import WorldSlider from "../components/WorldSlider";

function HomePage() {
  return (
    <div>
      {/* <VideoBg /> */}
      {/* <Worldbg /> */}

      <WorldSlider />
      <QuestionSection />
    </div>
  );
}

export default HomePage;
