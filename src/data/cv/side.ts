import { Job } from "./jobs";
import { SKILL } from "./skill";

export type Side = Job & { video?: string };
export const SIDES: Side[] = [
  {
    date: "2019-now",
    name: "Innkeeper",
    url: "https://innkeeper.link",
    logo: "logos/innkeeper.png",
    pitch: "Metaverse club, streaming artists from across the world",
    role: "founder",
    // video: "thumbvideos/inn.webp",
    skills: [
      SKILL.ETH,
      SKILL.DCL,
      SKILL.BLENDER,
      SKILL.THREE,
      SKILL.WAGMI,
      SKILL.RAINBOWKIT,
      SKILL.REACTQUERY,
      SKILL.CHAKRA,
      SKILL.NEXTJS,
    ],
  },

  {
    date: "",
    name: "Unbrewed",
    url: "https://unbrewed.xyz",
    logo: "logos/unbrewed.png",
    pitch: "Play Unmatched (boardgame) online with 1000+ variant decks",
    role: "founder",
    skills: [
      SKILL.NEXTJS,
      SKILL.REACTQUERY,
      SKILL.CHAKRA,
      SKILL.WEBSOCKET,
      SKILL.GO,
    ],
  },
  {
    date: "",
    name: "Spells Bar",
    url: "https://spells.bar",
    logo: "logos/spellsbar.png",
    pitch: "Play Sorcery TCG online against friends & draft",
    role: "founder",
    skills: [
      SKILL.NEXTJS,
      SKILL.REACTQUERY,
      SKILL.PANDA,
      SKILL.WEBSOCKET,
      SKILL.GO,
    ],
  },
  {
    date: "",
    name: "Royal Game of Ur (3d)",
    url: "https://ur3d.dean.lol",
    logo: "logos/ur.png",
    pitch: "Implementing the royal game of ur using svelte & threejs",
    role: "founder",
    skills: [SKILL.THREE, SKILL.SVELTE],
  },
  {
    date: "",
    name: "Teamplay",
    url: "https://demo.teamplay.games/game-events",
    logo: "logos/teamplay.png",
    pitch: "Game agnostic matchmaking tool. Schedule sessions in advance.",
    role: "frontend",
    skills: [SKILL.SOL, SKILL.TAILWIND, SKILL.NEXTJS, SKILL.REACTQUERY],
  },
  {
    date: "",
    name: "Ollama Experiments",
    url: "https://github.com/JollyGrin/ollama-experiments",
    logo: "logos/ollama.png",
    pitch: "Experimenting with local LLMs & Go to create local ai tools.",
    role: "experimenter",
    skills: [SKILL.GO, SKILL.OLLAMA],
  },
];
