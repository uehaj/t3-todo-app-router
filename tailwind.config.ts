import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        neon: "0 0 2px #fff, inset 0 0 3px #fff, 0 0 5px #787, 0 0 15px #787, 0 0 30px #787",
      },
    },
  },
  plugins: [],
} satisfies Config;
