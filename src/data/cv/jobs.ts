export type Job = {
  date: string;
  name: string;
  logo: string;
  pitch: string;
  role: string;
  skills: string[];
};
export const JOBS: Job[] = [
  {
    date: "2020-24",
    name: "Hyfen",
    logo: "logos/hyfen.jpeg",
    pitch:
      "ecosystem infrastructure that enables up-to-date data and streamlined processes, while greatly reducing operating costs and maintaining the privacy of individual ecosystem partners",
    role: "front-end",
    skills: ["next.js", "tanstack", "chakra-ui", "panda-ui", "angular"],
  },
  {
    date: "2017-2019",
    name: "NestEgg",
    logo: "logos/nestegg.jpeg",
    pitch:
      "Crowdfund sustainable energy infrastructure (windmills, solar panels) and lower your energy bill from your yields.",
    role: "co-founder",
    skills: ["figma"],
  },
];

export const SKILLS = [...new Set(JOBS.map((job) => job.skills).flat())];
