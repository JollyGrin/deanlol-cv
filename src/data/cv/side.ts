import { Job } from "./jobs";
import { SKILL } from "./skill";

export type Side = Job & { video?: string };
export const SIDES: Side[] = [
  {
    date: "2019-now",
    name: "Innkeeper",
    logo: "logos/innkeeper.png",
    pitch: "Metaverse club, streaming artists from across the world",
    role: "founder",
    // video: "thumbvideos/inn.webp",
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

  {
    date: "",
    name: "Unbrewed",
    logo: "logos/unbrewed.png",
    pitch: "Play Unmatched (boardgame) with 1000+ variant decks online",
    role: "founder",
    skills: [SKILL.NEXTJS, SKILL.REACTQUERY, SKILL.CHAKRA],
  },
  {
    date: "",
    name: "Spells Bar",
    logo: "logos/spellsbar.png",
    pitch: "Play Sorcery TCG online against friends & draft",
    role: "founder",
    skills: [SKILL.NEXTJS, SKILL.REACTQUERY, SKILL.CHAKRA],
  },
];
