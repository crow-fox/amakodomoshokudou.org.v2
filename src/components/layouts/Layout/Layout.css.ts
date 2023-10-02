import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

const fixedHeaderSize = "16rem";

const root = style({
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  minBlockSize: ["100vh", "100svh"],

  "@media": {
    "screen and (min-width: 64em)": {
      gridTemplateRows: "1fr auto",
    },
  },
});

const skip = style({
  position: "absolute",
  inlineSize: "1px",
  blockSize: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0,

  ":focus": {
    position: "fixed",
    top: "0.5rem",
    left: "0.5rem",
    zIndex: 2,
    display: "inline-block",
    inlineSize: "auto",
    blockSize: "auto",
    paddingBlock: "1rem",
    paddingInline: "1.5rem",
    margin: 0,
    overflow: "visible",
    clip: "auto",
    fontSize: cssVars.fontSize.lg,
    fontWeight: 700,
    color: cssVars.color.blueDark,
    whiteSpace: "normal",
    backgroundColor: cssVars.color.orange,
    border: `2px solid ${cssVars.color.blueDark}`,
    borderRadius: 2,
  },
  "@media": {
    "(prefers-color-scheme: dark)": {
      ":focus": {
        color: cssVars.color.gray,
        backgroundColor: cssVars.color.orangeDark,
        borderColor: cssVars.color.gray,
      },
    },
  },
});

const header = style({
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 1,
  paddingInline: "1rem",
  backgroundColor: cssVars.color.white,
  borderBlockEnd: `1px solid ${cssVars.color.grayDark}`,

  "@media": {
    "screen and (min-width: 64em)": {
      position: "fixed",
      inlineSize: fixedHeaderSize,
      blockSize: ["100vh", "100svh"],
      paddingInline: 0,
      overflowY: "auto",
      borderBlockEnd: 0,
      borderInlineEnd: `1px solid ${cssVars.color.grayDark}`,
    },

    "(prefers-color-scheme: dark)": {
      backgroundColor: cssVars.color.black,
      borderBlockEndColor: cssVars.color.blackLight,
      borderInlineEndColor: cssVars.color.blackLight,
    },
  },
});

const main = style({
  "@media": {
    "screen and (min-width: 64em)": {
      marginInlineStart: fixedHeaderSize,
    },
  },
});

const footer = style({
  "@media": {
    "screen and (min-width: 64em)": {
      marginInlineStart: fixedHeaderSize,
    },
  },
});

export default {
  root,
  skip,
  header,
  main,
  footer,
};
