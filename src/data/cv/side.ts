import { Job } from "./jobs";
import { SKILL } from "./skill";

type Side = Job & { video?: string };
export const SIDES: Side[] = [
  {
    date: "2019-now",
    name: "Innkeeper",
    logo: "logos/innkeeper.png",
    pitch: "Metaverse club, streaming artists from across the world",
    role: "founder",
    video: "thumbvideos/inn.webp",
    skills: [
      SKILL.NEXTJS,
      SKILL.REACTQUERY,
      SKILL.CHAKRA,
      SKILL.WAGMI,
      SKILL.RAINBOWKIT,
      SKILL.DCL,
      SKILL.BLENDER,
    ],
  },
];
