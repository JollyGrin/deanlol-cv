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
    pitch: "lorem ipsum",
    role: "front-end",
    skills: ["next.js"],
  },
  {
    date: "2017-2019",
    name: "NestEgg",
    logo: "logos/nestegg.jpeg",
    pitch: "lorem ipsum",
    role: "co-founder",
    skills: ["figma"],
  },
];

export const SKILLS = [...new Set(JOBS.map((job) => job.skills).flat())];
