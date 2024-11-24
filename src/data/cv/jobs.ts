import { SKILL } from "./skill";

export type Job = {
  date: string;
  name: string;
  logo: string;
  pitch: string;
  role: string;
  skills: string[];
  url?: string;
};

export const JOBS: Job[] = [
  {
    date: "2020-24",
    name: "Hyfen",
    url: "https://www.hyfen.eu/",
    logo: "logos/hyfen.jpeg",
    pitch:
      "Ecosystem infrastructure: realtime data and streamlined processes, while greatly reducing operating costs and maintaining the privacy of individual ecosystem partners.",
    role: "front-end",
    skills: [
      SKILL.NEXTJS,
      SKILL.REACTQUERY,
      SKILL.CHAKRA,
      SKILL.PANDA,
      SKILL.ANGULAR,
    ],
  },
  {
    date: "2017-2019",
    name: "NestEgg",
    logo: "logos/nestegg.jpeg",
    pitch:
      "Crowdfund sustainable energy infrastructure (windmills, solar panels) and lower your energy bill from your yields.",
    role: "co-founder",
    skills: [SKILL.FIGMA, SKILL.REACT],
  },
  {
    date: "2015-17",
    name: "Blockchain Education Network",
    logo: "logos/ben.png",
    pitch:
      "nonprofit organization dedicated to forming a robust network of student groups for blockchain education, development, and innovation.",
    role: "exec director",
    skills: [SKILL.FIGMA],
  },
];
