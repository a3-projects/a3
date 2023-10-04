import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: { header: "56px" },
      fontFamily: {
        serif: ["Merriweather", ...fontFamily.serif],
        sans: ["Poppins", ...fontFamily.sans],
      },
      colors: {
        primary: colors.indigo,
        // primary: {
        //   "50": "#E4FDEB",
        //   "100": "#D1F0DA",
        //   "200": "#A6E6B8",
        //   "300": "#8CD1A0",
        //   "400": "#6AB880",
        //   "500": "#54A56B",
        //   "600": "#397E4D",
        //   "700": "#266438",
        //   "800": "#172F1E",
        //   "900": "#133E1F",
        //   "950": "#092C13",
        // },
        neutral: colors.gray,
        destructive: colors.rose,
        positive: colors.emerald,
        warn: colors.amber,
        info: colors.blue,
        black: colors.gray[950],
        white: colors.white,
      },
      /* @ts-ignore*/
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.neutral[400]"),
            "--tw-prose-headings": theme("colors.neutral[50]"),
            "--tw-prose-lead": theme("colors.neutral[400]"),
            "--tw-prose-links": theme("colors.neutral[50]"),
            "--tw-prose-bullets": theme("colors.primary[500]"),
            "--tw-prose-hr": theme("colors.primary[200]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-hero-patterns")],
} satisfies Config;