"use client";

import { Job } from "@/data/cv/jobs";
import { Side, SIDES } from "@/data/cv/side";
import { useRef, useState } from "react";

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
    <div className="relative">
      <div
        className="relative w-full rounded-lg flex flex-col gap-2 hover:scale-110 hover:z-50 transition-all"
        style={{
          backgroundImage: `url("${job.video}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={`rounded-lg h-full flex flex-col ${job.video ? "text-white bg-gradient-to-b from-indigo-400" : "text-foreground"}`}
        >
          <div className="flex items-center text-xl font-bold font-mono">
            {job.logo === "" ? (
              <div className="w-[2rem] h-[2rem]" />
            ) : (
              <img src={job.logo} alt="logo" className="w-[2rem] h-[2rem]" />
            )}
            <p>{job.name}</p>
          </div>
          <div className="">
            <div className="py-2">
              <p>{job.pitch}</p>
            </div>
            <div className="flex flex-wrap">
              {job.skills.map((skill, index) => {
                const isNotLast = index < job.skills.length - 1;
                return (
                  <>
                    <p key={skill + index + job.name}>{skill}</p>
                    {isNotLast && <span className="mx-2"> *</span>}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
