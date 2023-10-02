import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

const nav = style({
  display: "grid",
  gridTemplateColumns: `auto min(100%, ${cssVars.width.container}) auto`,
  padding: "1rem",
  borderBlockStart: `1px solid ${cssVars.color.grayDark}`,
  "@media": {
    "(prefers-color-scheme: dark)": {
      borderBlockStartColor: cssVars.color.blackLight,
    },
  },
});

const list = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.25rem",
  gridColumn: "2",
  listStyle: "none",
  alignItems: "center",
});

const item = style({
  display: "inline-grid",
  gridTemplateColumns: "auto min-content",
  columnGap: "0.25rem",
  alignItems: "center",
});

const link = style({
  padding: "0.25rem",
  color: cssVars.color.blue,
  textUnderlineOffset: 4,
  borderRadius: 2,
  "@media": {
    "(prefers-color-scheme: dark)": {
      color: cssVars.color.blueLight,
    },
    "(hover: hover)": {
      ":hover": {
        boxShadow: "0 0 0 2px currentcolor",
      },
    },
  },
});

const current = style({
  display: "inline-block",
  padding: "0.25rem",
});

export default {
  nav,
  list,
  item,
  link,
  current,
};
