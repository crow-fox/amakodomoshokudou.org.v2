import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

export default {
  link: style({
    display: "inline-grid",
    gridTemplateColumns: "1fr auto",
    columnGap: ".5rem",
    alignItems: "center",
    padding: "1rem",
    fontWeight: 700,
    color: cssVars.color.blueDark,
    textDecoration: "none",
    backgroundColor: cssVars.color.orangeLight,
    border: `2px solid ${cssVars.color.orange}`,
    borderRadius: 2,
    "@media": {
      "(prefers-color-scheme: dark)": {
        color: cssVars.color.gray,
        backgroundColor: cssVars.color.orangeDarkest,
        borderColor: cssVars.color.orangeDark,
      },
    },
  }),
};
