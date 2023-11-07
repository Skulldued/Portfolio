import React from "react";
import "./Education.css";
import { FaSchool } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Education = () => {
  return (
    <>
      <div className="education-tittle " id="education">
        <h3 className="text-center text-uppercase fst-italic">
          Education Details
        </h3>
        <div>
          <hr className="fs-bold" />
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #cb2c31" }}
            date="2018-2020"
            iconStyle={{ background: "#138788", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">Board</h3>
            <p>Central Board Of Secondary School, IN</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #cb2c31" }}
            date="2018 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title">ISC</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bihar Board Of Secondary School
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  red" }}
            date="2020 - 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#black" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title">BCA</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Patliputra University
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
