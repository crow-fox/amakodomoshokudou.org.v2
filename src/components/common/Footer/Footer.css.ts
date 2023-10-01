import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

const footer = style({
  display: "grid",
  gridTemplateColumns: `auto min(100%, ${cssVars.width.container}) auto`,
  paddingBlock: "2rem",
  paddingInline: "1rem",
  backgroundColor: cssVars.color.grayLight,
  borderBlockStart: `1px solid ${cssVars.color.grayDark}`,
  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundColor: cssVars.color.blackDark,
      borderBlockStartColor: cssVars.color.blackLight,
    },
  },
});

const inner = style({
  gridColumn: "2",
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "space-between",
});

const list = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  listStyle: "none",
});

const link = style({
  display: "inline-block",
  paddingBlock: "0.25rem",
  paddingInline: "0.25rem",
  marginBlock: "-0.25rem",
  marginInline: "-0.25rem",
  color: cssVars.color.blue,
  textDecoration: "underline",
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

const copy = style({
  fontSize: cssVars.fontSize.sm,
  lineHeight: cssVars.lineHeight.tight,
});

export default {
  footer,
  inner,
  list,
  link,
  copy,
};
