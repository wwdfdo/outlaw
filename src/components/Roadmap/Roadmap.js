import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsFillSkipStartCircleFill } from "react-icons/bs";
import "./Roadmap.css";
import { roadmapItems } from "../../arrays/roadmapArray";

const Roadmap = () => {
  return (
    <div className="pt-40 pb-20 bg-roadmap-bg bg-bottom  bg-cover bg-no-repeat bg-blend-darken bg-black bg-opacity-60  bg-fixed relative">
      <h2 className="text-center text-6xl  mb-20">Road Map</h2>
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
            date={`${roadmapitem.date}`}
            iconStyle={{
              background: "#eb3c27",
              color: "#f0cb43",
              width: "30px",
              height: "30px",
              margin: "15px 0  0 -15px",
            }}
          >
            <h3 className="vertical-timeline-element-title">
              {`${roadmapitem.title}`}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {`${roadmapitem.subTitle}`}
            </h4>
            <p>{`${roadmapitem.description}`}</p>
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
