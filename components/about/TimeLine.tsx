import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "@data/experience";
import { BsRocket } from "react-icons/bs";

export const TimeLine: React.FC = () => {
  const formatDate = (date: string | number | Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "numeric",
      year: "numeric",
    }).format(new Date(date));
  };

  return (
    <VerticalTimeline lineColor="#e4c341">
      {experience.map(point => (
        <VerticalTimelineElement
          key={point.id}
          className="text-black "
          date={`${formatDate(point.dateStart)} - ${formatDate(point.dateEnd)}`}
          dateClassName="text-white"
          iconClassName="bg-secondary text-black"
          icon={<point.icon />}
        >
          <div className="flex flex-col gap-2">
            <div className="text-[32px] font-bold">{point.title}</div>
            <div className="flex gap-2">
              <div>{point.location}</div>
              <a href={point.link} className="text-blue-400">
                {point.linkTitle}
              </a>
            </div>
            <div>
              <b>{point.position}</b>
            </div>
            <div>{point.description}</div>
            <div>
              <p>Technologies i`m worked with:</p>
              <ul>
                {point.stack.map((t, i) => (
                  <li key={i}>🪛{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </VerticalTimelineElement>
      ))}
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)" }}
        icon={<BsRocket />}
      />
    </VerticalTimeline>
  );
};
