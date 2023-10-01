import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

export default {
  heading: style({
    paddingBlockEnd: "0.25rem",
    fontSize: cssVars.fontSize.xl,
    borderBlockEnd: `2px solid ${cssVars.color.orange}`,
    "@media": {
      "screen and (min-width: 64em)": {
        fontSize: cssVars.fontSize["3xl"],
        paddingBlockEnd: "0.5rem",
      },
      "(prefers-color-scheme: dark)": {
        borderBlockEndColor: cssVars.color.orangeDark,
      },
    },
  }),
};
