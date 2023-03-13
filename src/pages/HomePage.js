import React from "react";
import Assistance from "../components/Assistance/Assistance";
import { Assistquestions } from "../arrays/faqArray";

import QuestionSection from "../components/Questions/QuestionSection";
import Roadmap from "../components/Roadmap/Roadmap";
// import VideoBg from "../components/VideoBg";
import Worldbg from "../components/Worldbg";
// import WorldSlider2 from "../components/WorldSlider2";
// import WorldSlider from "../components/WorldSlider";

function HomePage() {
  return (
    <div>
      {/* <VideoBg /> */}
      <Worldbg />
      {/* <WorldSlider2 /> */}
      {/* <WorldSlider /> */}
      <Roadmap />
      <QuestionSection />
      {/* <Assistance data={Assistquestions} /> */}
    </div>
  );
}

export default HomePage;
