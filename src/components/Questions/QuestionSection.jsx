import React from "react";
import { useState, useRef, useEffect } from "react";
import { QuestionArray } from "../../arrays/questionsArray";
import QsectionTitle from "./QsectionTitle";
import QsectionFooter from "./QsectionFooter";
import QsectionAccordion from "./QsectionAccordion";
import "./QuestionAccordion.css";

const QuestionSection = () => {
  const componentRef = useRef(null);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimation(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(componentRef.current);

    return () => {
      observer.unobserve(componentRef.current);
    };
  }, [componentRef]);

  return (
    <div className=" lg:pt-[80px] lg:pb-20   ">
      <div
        ref={componentRef}
        className={`lg:bg-black lg:bg-opacity-[15%]    flex flex-col lg:w-3/4 w-[95%] mx-auto items-center gap-5 lg:py-20 py-10 lg:rounded-3xl ${
          animation ? "questionGlass" : ""
        }`}
      >
        <QsectionTitle />
        <QsectionAccordion QuestionArray={QuestionArray} />
        <QsectionFooter />
      </div>
    </div>
  );
};

export default QuestionSection;
