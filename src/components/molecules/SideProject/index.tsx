"use client";

import { ExternalLink } from "@/components/atoms/ExternalLink";
import { Side, SIDES } from "@/data/cv/side";
import { useTagHoverStore } from "@/store/TagHover/store";

export const SideProjects = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-4">
      {SIDES.map((side, i) => (
        <SideProject key={side.name + i + "side"} {...side} />
      ))}
    </div>
  );
};

const SideProject = (job: Side) => {
  const hoveredTag = useTagHoverStore((store) => store.hoveredTag);
  const nothingIsSelected = hoveredTag === "";

  // fade out unmatching jobs, if tag is specified
  const isHovered = job.skills.includes(hoveredTag) || nothingIsSelected;
  const opacity = isHovered ? "opacity-100" : "opacity-20";

  return (
    <div
      className={`grid grid-cols-[1fr_8fr] transition-all duration-500 ${opacity}`}
    >
      <img src={job.logo} alt="logo" className="w-[2rem] h-[2rem]" />
      <div className="flex flex-col">
        <ExternalLink name={job.name} url={job.url} />
        <p>{job.pitch}</p>

        <div
          key={job.name + "sideskills"}
          className="flex flex-wrap text-sm font-mono opacity-70"
        >
          {job.skills.map((skill, index) => {
            const isNotLast = index < job.skills.length - 1;
            return (
              <span key={skill + "span" + index + job.name}>
                <span>{skill}</span>
                {isNotLast && <span className="mx-1">*</span>}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
