import React from "react";
import { QuestionArray } from "../../arrays/questionsArray";
import QsectionTitle from "./QsectionTitle";
import QsectionFooter from "./QsectionFooter";
import QsectionAccordion from "./QsectionAccordion";
import "./QuestionAccordion.css";

const QuestionSection = () => {
  return (
    <div className=" lg:pt-[80px] lg:pb-20   ">
      <div className="lg:bg-[#737b7b] lg:bg-opacity-20 flex flex-col lg:w-3/4 w-[95%] mx-auto items-center gap-5 lg:py-20 py-10 lg:rounded-3xl">
        <QsectionTitle />
        <QsectionAccordion QuestionArray={QuestionArray} />
        <QsectionFooter />
      </div>
    </div>
  );
};

export default QuestionSection;
