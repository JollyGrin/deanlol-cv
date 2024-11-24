"use client";

import { Side, SIDES } from "@/data/cv/side";
import Link from "next/link";

import { GoArrowUpRight as IconLink } from "react-icons/go";

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
  return (
    <div className="grid grid-cols-[1fr_8fr]">
      <img src={job.logo} alt="logo" className="w-[2rem] h-[2rem]" />
      <div className="flex flex-col">
        <Link href={job.url ?? "#"}>
          <div className="flex gap-x-2 group cursor-pointer">
            <p className="text-xl font-bold">{job.name}</p>
            <IconLink className="group-hover:translate-x-2 group-hover:translate-y-[-0.25rem] transition-all" />
          </div>
        </Link>
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
