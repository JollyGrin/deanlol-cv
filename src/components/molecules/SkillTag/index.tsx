import { SKILL_MAP, SKILLS } from "@/data/cv/skills";
import { IconType } from "react-icons";

const SkillTag = ({ skill }: { skill: string }) => {
  const Icon: IconType | undefined = SKILL_MAP.find((record) => {
    const [key] = record;
    return key.toString().toLowerCase() === skill.toLowerCase();
  })?.[1];

  return (
    <div className="flex bg-shadow py-1 px-3 items-center gap-1 text-foreground rounded-full hover:opacity-75 select-none">
      {Icon ? <Icon /> : ""}
      <p>{skill}</p>
    </div>
  );
};

export const SkillTags = () =>
  SKILLS().map((skill, i) => (
    <SkillTag key={skill + i + "skillstag"} {...{ skill }} />
  ));
