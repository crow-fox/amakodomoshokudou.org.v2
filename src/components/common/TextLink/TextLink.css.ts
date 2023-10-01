import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

export default {
  link: style({
    paddingBlockEnd: 2,
    color: cssVars.color.blue,
    textDecoration: "none",
    borderBottom: "1px solid currentcolor",
    "@media": {
      "(prefers-color-scheme: dark)": {
        color: cssVars.color.blueLight,
      },
      "(hover: hover)": {
        ":hover": {
          boxShadow: `0 0 0 2px ${cssVars.color.white}, 0 0 0 4px ${cssVars.color.blue}`,
        },
      },
      "(hover: hover) and (prefers-color-scheme: dark)": {
        ":hover": {
          boxShadow: `0 0 0 2px ${cssVars.color.black}, 0 0 0 4px ${cssVars.color.blueLight}`,
        },
      },
    },
  }),
};
