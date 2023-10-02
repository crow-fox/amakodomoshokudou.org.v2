import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

const list = style({
  listStyle: "none",
});

const item = style({
  selectors: {
    "&:not(:first-child)": {
      marginBlockStart: "-1px",
    },
  },
});

const link = style({
  display: "flex",
  alignItems: "center",
  paddingBlock: "0.75rem",
  paddingInline: "0.5rem",
  fontWeight: 700,
  textDecoration: "none",
  borderBlock: `1px solid ${cssVars.color.grayDark}`,
  borderInlineStart: "2px solid",
  "@media": {
    "(prefers-color-scheme: dark)": {
      borderBlockColor: cssVars.color.blackLight,
    },
  },
  selectors: {
    "&:not([data-active='true'])": {
      color: cssVars.color.blueDark,
      borderInlineStartColor: "transparent",
      "@media": {
        "(prefers-color-scheme: dark)": {
          color: cssVars.color.gray,
        },
      },
    },
    "&:not([data-active='true']):hover": {
      "@media": {
        "(hover: hover)": {
          backgroundColor: cssVars.color.orangeLight,
        },
        "(hover: hover) and (prefers-color-scheme: dark)": {
          backgroundColor: cssVars.color.orangeDarkest,
        },
      },
    },
    "&:not([data-active='true']):focus-visible": {
      backgroundColor: cssVars.color.orangeLight,
      "@media": {
        "(prefers-color-scheme: dark)": {
          backgroundColor: cssVars.color.orangeDarkest,
        },
      },
    },
    "&[data-active='true']": {
      color: cssVars.color.blueDark,
      backgroundColor: cssVars.color.orange,
      borderInlineStartColor: "currentcolor",
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
  list,
  item,
  link,
};
