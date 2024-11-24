"use client";

import { ExternalLink } from "@/components/atoms/ExternalLink";
import { Job, JOBS } from "@/data/cv/jobs";
import { useTagHoverStore } from "@/store/TagHover/store";

export const JobRecords = () =>
  JOBS.map((job) => <JobRecord key={"jobrecord" + job.name} {...job} />);

const JobRecord = (props: Job) => {
  const hoveredTag = useTagHoverStore((store) => store.hoveredTag);
  const nothingIsSelected = hoveredTag === "";

  // fade out unmatching jobs, if tag is specified
  const isHovered = props.skills.includes(hoveredTag) || nothingIsSelected;
  const opacity = isHovered ? "opacity-100" : "opacity-20";

  return (
    <div
      className={`flex flex-col gap-1 mb-8 transition-all duration-500 ${opacity}`}
    >
      <p className="text-mono font-bold">{props.date}</p>
      <div className="w-full grid grid-cols-[1fr_10fr] gap-2">
        <img
          src={props.logo}
          className="w-[2rem] h-[2rem] rounded-full overflow-hidden"
        />
        <div className="flex flex-col gap-2">
          <ExternalLink name={props.name} url={props.url} />
          <p className="break-all">{props.pitch}</p>
          <div
            key={props.name}
            className="flex font-mono items-center gap-0 flex-wrap tracking-tighter"
          >
            <p className="bg-shadow py-0.25 px-4 rounded-full mr-2">
              {props.role}
            </p>
            {props.skills.map((skill, i) => (
              <span key={skill + i + props.name} className="text-sm opacity-70">
                {skill}

                {i < props.skills.length - 1 && (
                  <span className="mx-1 opacity-40">*</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
