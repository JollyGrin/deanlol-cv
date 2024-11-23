import { JOBS } from "./jobs";

import { IconType } from "react-icons";
import { TbBrandNextjs as IconNext } from "react-icons/tb";

import { TbBrandGolang as IconGo } from "react-icons/tb";
import {
  SiReactquery as IconReactQuery,
  SiChakraui as IconChakra,
  SiFoodpanda as IconPanda,
  SiWagmi as IconWagmi,
  SiReact as IconReact,
  SiDecentraland as IconDecentraland,
  SiThreedotjs as IconThree,
  SiSvelte as IconSvelte,
  SiBlender as IconBlender,
  SiTailwindcss as IconTailwind,
  SiEthereum as IconEthereum,
  SiSolana as IconSolana,
} from "react-icons/si";

import { LuRainbow as IconRainbowKit } from "react-icons/lu";

import {
  PiAngularLogoBold as IconAngular,
  PiFigmaLogoDuotone as IconFigma,
} from "react-icons/pi";

import { SIDES } from "./side";
import { SKILL } from "./skill";

export const SKILLS = () => [
  ...new Set([...SIDES, ...JOBS].map((job) => job.skills).flat()),
];

export const SKILL_MAP: [string, IconType][] = [
  [SKILL.REACT, IconReact],
  [SKILL.NEXTJS, IconNext],
  [SKILL.REACTQUERY, IconReactQuery],
  [SKILL.ANGULAR, IconAngular],
  [SKILL.PANDA, IconPanda],
  [SKILL.CHAKRA, IconChakra],
  [SKILL.FIGMA, IconFigma],
  [SKILL.WAGMI, IconWagmi],
  [SKILL.RAINBOWKIT, IconRainbowKit],
  [SKILL.DCL, IconDecentraland],
  [SKILL.THREE, IconThree],
  [SKILL.SVELTE, IconSvelte],
  [SKILL.BLENDER, IconBlender],
  [SKILL.GO, IconGo],
  [SKILL.TAILWIND, IconTailwind],
  [SKILL.ETH, IconEthereum],
  [SKILL.SOL, IconSolana],
];
