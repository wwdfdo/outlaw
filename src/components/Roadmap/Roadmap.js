import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Roadmap.css";
import { roadmapItems } from "../../arrays/roadmapArray";

const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="lg:pt-40 pt-20 lg:pb-20 pb-5 lg:bg-roadmap-bg bg-roadmap-bg   bg-top bg-cover bg-no-repeat bg-blend-darken bg-[#eb3c27] bg-opacity-50  bg-fixed relative"
    >
      <h2 className="text-center lg:text-6xl text-4xl  lg:mb-20 mb-10">
        Road Map
      </h2>
      <VerticalTimeline>
        {roadmapItems.map((roadmapitem) => (
          <VerticalTimelineElement
            key={roadmapitem.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#ffffff00", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  #eb3c27",
              top: "12px",
              display: "none",
            }}
            // date={`${roadmapitem.date}`}
            iconStyle={{
              background: "#eb3c27",
              color: "#f0cb43",
              width: "30px",
              height: "30px",
              margin: "15px 0  0 -15px",
            }}
          >
            <h3 className="vertical-timeline-element-title text-[1.3rem] text-[#f0cd43]">
              {`${roadmapitem.title}`}
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle text-[#eb3c27] text-md">
              {`${roadmapitem.subTitle}`}
            </h4> */}
            <ul className="flex flex-col gap-2 list-disc">
              {roadmapitem.description.map((desItem) => (
                <li>{desItem}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{
            background: "#eb3c27",
            color: "#fff",
            width: "30px",
            height: "30px",
            margin: "15px 0  0 -15px",
          }}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Roadmap;
