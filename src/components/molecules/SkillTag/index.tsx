import { SKILLS } from "@/data/cv/jobs";

import { TbBrandNextjs as IconNext } from "react-icons/tb";

const SkillTag = ({ skill }: { skill: string }) => (
  <div className="flex bg-shadow p-1 items-center gap-1 text-highlight">
    <IconNext color="inherit" fontSize="1.25rem" />
    <p>{skill}</p>
  </div>
);

export const SkillTags = () =>
  SKILLS.map((skill, i) => (
    <SkillTag key={skill + i + "skillstag"} {...{ skill }} />
  ));
