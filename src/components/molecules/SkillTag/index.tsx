"use client";

import { BorderBeam } from "@/components/atoms/BorderBeam";
import { SKILL_MAP, SKILLS } from "@/data/cv/skills";
import { useTagHoverStore } from "@/store/TagHover/store";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";

const SkillTag = ({ skill }: { skill: string }) => {
  const setHoverTag = useTagHoverStore((store) => store.setHoveredTag);
  const isHovering = useTagHoverStore((store) => store.hoveredTag) === skill;
  function setHover() {
    setHoverTag(skill);
  }
  function clearHover() {
    setHoverTag("");
  }

  const Icon: IconType | undefined = SKILL_MAP.find((record) => {
    const [key] = record;
    return key.toString().toLowerCase() === skill.toLowerCase();
  })?.[1];

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      if (isHovering) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    document.addEventListener("mousemove", updateCursorPosition);
    return () =>
      document.removeEventListener("mousemove", updateCursorPosition);
  }, [isHovering]);

  return (
    <>
      <div
        onMouseOver={setHover}
        onMouseOut={clearHover}
        className="flex bg-shadow py-1 px-3 items-center gap-1 text-foreground rounded-full hover:opacity-75 select-none"
      >
        {Icon ? <Icon /> : ""}
        <p>{skill}</p>
      </div>
      {Icon && (
        <div
          className="fixed pointer-events-none z-50 bg-background rounded-full"
          style={{
            left: cursorPosition.x + 15,
            top: cursorPosition.y - 15,
            transform: "translate(0, 0)",
            opacity: isHovering ? 1 : 0,
            rotate: isHovering ? "0deg" : "90deg",
            transitionProperty: "opacity, rotate",
            transitionDuration: "0.35s",
            transitionTimingFunction: "ease",
          }}
        >
          <Icon className="w-6 h-6 text-foreground m-3" />
          <BorderBeam />
        </div>
      )}
    </>
  );
};

export const SkillTags = () =>
  SKILLS().map((skill, i) => (
    <SkillTag key={skill + i + "skillstag"} {...{ skill }} />
  ));
