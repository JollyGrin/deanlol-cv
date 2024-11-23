"use client";

import { Job } from "@/data/cv/jobs";
import { SIDES } from "@/data/cv/side";
import { useRef, useState } from "react";

export const SideProjects = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-1">
      {SIDES.map((side, i) => (
        <Card key={side.name + i + "side"} {...side} />
      ))}
    </div>
  );
};

const Card = () => (
  <div className="perspective-distant">
    <article className="... transform-3d rotate-x-51 rotate-z-43 shadow-xl transition-all duration-500 hover:-translate-y-4 hover:rotate-x-49 hover:rotate-z-38 hover:shadow-2xl">
      dhsajk
    </article>
  </div>
);

const SideProject = (job: Job) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  function flip() {
    setIsFlipped((prev) => !prev);
    setIsTransitioning(true);
  }

  function mainRef(node: HTMLDivElement) {
    if (!node) return; // Guard clause for when component unmounts

    const handleTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName === "transform") {
        console.log("Rotation transition finished");
        setIsTransitioning(false);
      }
    };

    const handleTransitionStart = (event: TransitionEvent) => {
      if (event.propertyName === "transform") {
        console.log("Rotation transition finished");
        setIsTransitioning(true);
      }
    };

    node.addEventListener("transitionstart", handleTransitionStart);
    node.addEventListener("transitionend", handleTransitionEnd);

    // Cleanup
    return () => {
      node.removeEventListener("transitionstart", handleTransitionStart);
      node.removeEventListener("transitionend", handleTransitionEnd);
    };
  }

  return (
    <div
      className="relative group"
      // onMouseOver={() => setIsFlipped(true)}
      // onMouseOut={() => setIsFlipped(false)}
    >
      <div
        // ref={mainRef}
        // onClick={flip}
        className="relative w-full bg-highlight rounded-lg min-h-[10rem] flex flex-col gap-2 group-hover:rotate-y-180"
        style={{
          backgroundImage: 'url("thumbvideos/inn.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
          transition: "all 0.25s ease",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        <div className="rounded-lg bg-gradient-to-b from-indigo-400 h-full flex flex-col text-highlight">
          <div className="flex items-center text-xl font-bold font-mono">
            <img src={job.logo} alt="logo" className="w-[4rem] h-[4rem]" />
            <p>{job.name}</p>
          </div>
          <div className="p-2">
            <p>{job.pitch}</p>
          </div>
        </div>
      </div>

      <div
        onClick={flip}
        className="absolute top-0 w-full bg-highlight rounded-lg h-[10rem] flex flex-col gap-2"
        style={{
          transform: `rotateY(${isFlipped ? 0 : 90}deg)`,
          transition: "all 0.25s ease",
        }}
      >
        <div className=" p-1 flex flex-wrap gap-x-3 text-shadow text-sm">
          <p className="font-bold">Used:</p>
          {job.skills.map((skill) => (
            <p key={"sideskill" + skill + job.name} className="h-fit">
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
