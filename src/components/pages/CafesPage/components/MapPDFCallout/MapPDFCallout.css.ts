import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

const callout = style({
  display: "grid",
  rowGap: "0.5rem",
  padding: "1rem",
  backgroundColor: cssVars.color.grayLight,
  borderRadius: 2,
  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundColor: cssVars.color.blackDark,
    },
  },
});

export default {
  callout,
};
