import type { Config } from "tailwindcss";

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
        foreground: "var(--background)",
        highlight: "var(--highlight)",
        shadow: "var(--shadow)",
      },
    },
  },
  plugins: [],
} satisfies Config;
