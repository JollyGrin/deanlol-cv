import type { Config } from "tailwindcss";

const animation = {
  "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
};
const keyframes = {
  "border-beam": {
    "100%": {
      "offset-distance": "100%",
    },
  },
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: "var(--font-header)",
        sub: "var(--font-sub)",
        body: "var(--font-body)",
        mono: "var(--font-mono)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        highlight: "var(--highlight)",
        shadow: "var(--shadow)",
      },

      animation,
      keyframes,
    },
  },
  plugins: [],
} satisfies Config;
