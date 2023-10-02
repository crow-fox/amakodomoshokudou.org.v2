import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

const logo = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, auto)",
  placeItems: "center",
  ":focus-visible": {
    backgroundColor: cssVars.color.orangeLight,
  },
  "@media": {
    "screen and (min-width: 64em)": {
      gridTemplateColumns: "auto",
      gridTemplateRows: "auto auto",
      paddingBlock: "1rem",
    },
    "(hover: hover)": {
      ":hover": {
        backgroundColor: cssVars.color.orangeLight,
      },
    },
    "(prefers-color-scheme: dark)": {
      ":focus-visible": {
        backgroundColor: cssVars.color.orangeDarkest,
      },
    },
    "(hover: hover) and (prefers-color-scheme: dark)": {
      ":hover": {
        backgroundColor: cssVars.color.orangeDarkest,
      },
    },
  },
});

const icon = style({
  inlineSize: "auto",
  blockSize: "3rem",
  "@media": {
    "screen and (min-width: 64em)": {
      blockSize: "7rem",
    },
  },
});

const name = style({
  inlineSize: "auto",
  blockSize: "2rem",
  "@media": {
    "screen and (min-width: 64em)": {
      blockSize: "3rem",
    },
    "(prefers-color-scheme: dark)": {
      filter: "invert(0.863)",
    },
  },
});

export default {
  logo,
  icon,
  name,
};
