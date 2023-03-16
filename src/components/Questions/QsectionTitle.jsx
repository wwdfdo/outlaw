import React from "react";

const QsectionTitle = () => {
  return (
    <div className="flex flex-col lg:gap-10 gap-5 justify-center">
      <div>
        <h2 className=" md:text-[3em] text-[1.7em] text-center">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="text-center lg:mb-10">
        <p className=" lg:text-xl text-[.9rem] ">
          Any questions you have we are here to answer.
        </p>
      </div>
    </div>
  );
};

export default QsectionTitle;
