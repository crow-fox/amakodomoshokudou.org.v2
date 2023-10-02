import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

const openButton = style({
  display: "inline-grid",
  gridTemplateColumns: "repeat(2, auto)",
  columnGap: "0.5rem",
  alignItems: "center",
  padding: "0.5rem",
  fontWeight: 700,
  lineHeight: cssVars.lineHeight.tight,
  color: cssVars.color.blueDark,
  backgroundColor: cssVars.color.orange,
  border: 0,
  borderRadius: 2,

  "@media": {
    "(prefers-color-scheme: dark)": {
      color: cssVars.color.gray,
      backgroundColor: cssVars.color.orangeDark,
    },
    "screen and (min-width: 64em)": {
      display: "none",
    },
  },
});

const closeButton = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, auto)",
  columnGap: "0.5rem",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5rem",
  fontWeight: 700,
  lineHeight: cssVars.lineHeight.tight,
  color: cssVars.color.blueDark,
  backgroundColor: cssVars.color.orange,
  border: 0,
  borderRadius: 2,
  "@media": {
    "(prefers-color-scheme: dark)": {
      color: cssVars.color.gray,
      backgroundColor: cssVars.color.orangeDark,
    },
  },
});

const dialog = style({
  "::backdrop": {
    backgroundColor: "rgb(252, 238, 199, 0.5)",
    backdropFilter: "blur(4px)",
  },
  "@media": {
    "(prefers-color-scheme: dark)": {
      "::backdrop": {
        backgroundColor: "rgb(56, 54, 51, 0.5)",
        backdropFilter: "blur(4px)",
      },
    },
  },
  selectors: {
    "&[open]": {
      position: "fixed",
      inset: "1rem",
      display: "flex",
      flexDirection: "column",
      rowGap: "2rem",
      inlineSize: "calc(100% - 2rem)",
      maxInlineSize: "calc(100% - 2rem)",
      padding: "1rem",
      overflowY: "auto",
      overscrollBehaviorY: "none",
      color: "inherit",
      backgroundColor: cssVars.color.white,
      border: `1px solid ${cssVars.color.gray}`,
      borderRadius: 4,
      maxBlockSize: "calc(100svh - 2rem)",
      "@media": {
        "(prefers-color-scheme: dark)": {
          backgroundColor: cssVars.color.black,
          borderColor: cssVars.color.blackLight,
        },
      },
    },
  },
});

export default {
  openButton,
  closeButton,
  dialog,
};
