"use client";

import { Job } from "@/data/cv/jobs";
import { Side, SIDES } from "@/data/cv/side";
import { useRef, useState } from "react";

export const SideProjects = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-1">
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
        className="relative w-full bg-shadow rounded-lg min-h-[10rem] flex flex-col gap-2 hover:scale-110 hover:z-50 transition-all"
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
              <div className="w-[1rem] h-[4rem]" />
            ) : (
              <img src={job.logo} alt="logo" className="w-[4rem] h-[4rem]" />
            )}
            <p>{job.name}</p>
          </div>
          <div className="p-2">
            <p>{job.pitch}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
