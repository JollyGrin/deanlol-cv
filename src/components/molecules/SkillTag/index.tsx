import { SKILLS } from "@/data/cv/jobs";

const SkillTag = ({ skill }: { skill: string }) => (
  <p className="bg-gray-200 text-black p-1">{skill}</p>
);

export const SkillTags = () =>
  SKILLS.map((skill, i) => (
    <SkillTag key={skill + i + "skillstag"} {...{ skill }} />
  ));
