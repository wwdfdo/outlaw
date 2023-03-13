import React from "react";
import { useState } from "react";

const QsectionAccordion = ({ QuestionArray }) => {
  const [visibleAccordionId, setVisibleAccordionId] = useState(null);
  return (
    <>
      {QuestionArray.map((Question) => (
        <div
          key={Question.id}
          className="md:w-4/5 w-[95%] bg-[#f0c942] px-8 py-6 rounded-xl text-[#000] cursor-pointer"
        >
          <div
            className="flex justify-between"
            onClick={() =>
              setVisibleAccordionId(
                visibleAccordionId === Question.id ? null : Question.id
              )
            }
          >
            <h3 className="md:text-[1rem] text-[1rem] ">{Question.qtitle}</h3>
            <span className="text-2xl flex items-center">
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
            } mt-8`}
          >
            <p className=" text-[1rem] tracking-wider leading-loose">
              {Question.answer}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default QsectionAccordion;
