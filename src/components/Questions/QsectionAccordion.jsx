import React from "react";
import { useState } from "react";

const QsectionAccordion = ({ QuestionArray }) => {
  const [visibleAccordionId, setVisibleAccordionId] = useState(null);
  return (
    <>
      {QuestionArray.map((Question) => (
        <div
          key={Question.id}
          className="md:w-4/5 w-[97%] bg-[#f0c942] lg:px-8 px-3 lg:py-6 py-2 rounded-xl text-[#000] cursor-pointer"
        >
          <div
            className="flex justify-between"
            onClick={() =>
              setVisibleAccordionId(
                visibleAccordionId === Question.id ? null : Question.id
              )
            }
          >
            <h3 className="md:text-[1rem] text-[.8275rem] ">
              {Question.qtitle}
            </h3>
            <span className="lg:text-2xl text-lg flex items-center">
              <i
                className={`fa-solid ${
                  visibleAccordionId === Question.id
                    ? "fa-angle-up"
                    : "fa-angle-down"
                } `}
              ></i>
            </span>
          </div>
          <div
            className={`${
              visibleAccordionId === Question.id ? "answer-active" : "hidden"
            } lg:mt-8 mt-4`}
          >
            <p className=" lg:text-[1rem] text-[.8rem] tracking-wider leading-loose">
              {Question.answer}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default QsectionAccordion;
