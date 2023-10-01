import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

export default {
  title: style({
    display: "grid",
    rowGap: ".5rem",
    fontSize: cssVars.fontSize["3xl"],
    lineHeight: cssVars.lineHeight.tight,
    "@media": {
      "screen and (min-width: 64em)": {
        fontSize: cssVars.fontSize["4xl"],
      },
    },
  }),
  page: style({
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    columnGap: ".5rem",
    alignItems: "center",
    fontSize: cssVars.fontSize.md,
    ":before": {
      inlineSize: "1em",
      blockSize: "2px",
      content: "",
      backgroundColor: "currentColor",
      borderRadius: 2,
    },
  }),
};
