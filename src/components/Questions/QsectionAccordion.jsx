import React from "react";
import { useState } from "react";

const QsectionAccordion = ({ QuestionArray }) => {
  const [visibleAccordionId, setVisibleAccordionId] = useState(null);
  return (
    <>
      {QuestionArray.map((Question) => (
        <div
          key={Question.id}
          className="md:w-3/4 w-[95%] bg-white px-8 py-6 rounded-lg text-[#000] cursor-pointer"
        >
          <div
            className="flex justify-between"
            onClick={() =>
              setVisibleAccordionId(
                visibleAccordionId === Question.id ? null : Question.id
              )
            }
          >
            <h3 className="md:text-[1.625rem] text-[1rem] ">
              {Question.qtitle}
            </h3>
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
              visibleAccordionId === Question.id ? "" : "hidden"
            } mt-8`}
          >
            <p className=" text-[1.4rem] tracking-wider">{Question.answer}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default QsectionAccordion;
