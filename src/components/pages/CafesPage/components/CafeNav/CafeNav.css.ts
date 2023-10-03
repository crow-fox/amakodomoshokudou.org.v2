import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

const nav = style({
  display: "grid",
  rowGap: "1rem",
  padding: "1rem",
  border: `1px solid ${cssVars.color.grayDark}`,
  borderRadius: 2,
  "@media": {
    "(prefers-color-scheme: dark)": {
      borderColor: cssVars.color.blackLight,
    },
  },
});

const title = style({
  "@media": {
    "screen and (min-width: 64em)": {
      fontSize: cssVars.fontSize.lg,
    },
  },
});

const list = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  listStyle: "none",
});

const link = style({
  display: "inline-block",
  // padding: "1rem",
  paddingInline: "1rem",
  paddingBlock: "0.5rem",
  fontWeight: 700,
  textDecoration: "none",
  border: "2px solid",
  borderRadius: 2,
  selectors: {
    "&:not([data-active='true'])": {
      color: cssVars.color.blueDark,
      borderColor: cssVars.color.grayDark,
      "@media": {
        "(prefers-color-scheme: dark)": {
          color: cssVars.color.gray,
          borderColor: cssVars.color.blackLight,
        },
      },
    },
    "&:not([data-active='true']):focus-visible": {
      backgroundColor: cssVars.color.orangeLight,
      borderColor: "currentcolor",
      "@media": {
        "(prefers-color-scheme: dark)": {
          backgroundColor: cssVars.color.orangeDarkest,
          borderColor: cssVars.color.gray,
        },
      },
    },
    "&:not([data-active='true']):hover": {
      "@media": {
        "(hover: hover)": {
          backgroundColor: cssVars.color.orangeLight,
          borderColor: "currentcolor",
        },
        "(prefers-color-scheme: dark) and (hover: hover)": {
          backgroundColor: cssVars.color.orangeDarkest,
          borderColor: cssVars.color.gray,
        },
      },
    },
    "&[data-active='true']": {
      color: cssVars.color.blueDark,
      backgroundColor: cssVars.color.orange,
      borderColor: "currentcolor",
      "@media": {
        "(prefers-color-scheme: dark)": {
          color: cssVars.color.gray,
          backgroundColor: cssVars.color.orangeDark,
        },
      },
    },
  },
});

export default {
  nav,
  title,
  list,
  link,
};
