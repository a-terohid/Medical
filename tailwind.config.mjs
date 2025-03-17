import { StyleGuid_Text } from "./src/utils/style_guide/StyleGuid_Text.js";
import { styleGuide_colors } from "./src/utils/style_guide/StyleGuid_Color.js";
import plugin from "tailwindcss/plugin";

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/svg/*.{js,ts,jsx,tsx,mdx,svg}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: styleGuide_colors
    },
    fontFamily: {
      sans: ['var(--font-Plus-Jakarta-Sans)', 'sans-serif'],
    },
    container: {
      center: true,
      padding: "3rem"
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(StyleGuid_Text);
    }),
    require("@tailwindcss/typography"),
    // "prettier-plugin-tailwindcss"
  ],
}

export default config;