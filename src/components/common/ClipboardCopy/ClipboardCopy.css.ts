import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

const copy = style({
  position: "relative",
  display: "inline-block",
});

const button = style({
  display: "inline-grid",
  gridTemplateColumns: "1fr auto",
  gap: "0.25rem",
  alignItems: "center",
  paddingBlock: "0.5rem",
  paddingInline: "0.5rem",
  fontWeight: 700,
  color: cssVars.color.blueDark,
  backgroundColor: cssVars.color.white,
  border: "1px solid currentcolor",
  borderRadius: 2,
  "@media": {
    "(prefers-color-scheme: dark)": {
      color: cssVars.color.gray,
      backgroundColor: cssVars.color.black,
      borderColor: cssVars.color.gray,
    },
  },
});

const notify = style({
  display: "none",
  padding: "0.25rem",
  fontSize: cssVars.fontSize.sm,
  fontWeight: 700,
  lineHeight: 1,
  color: cssVars.color.white,
  backgroundColor: cssVars.color.blueDark,
  borderRadius: 2,
  "@media": {
    "(prefers-color-scheme: dark)": {
      color: cssVars.color.blueDark,
      backgroundColor: cssVars.color.white,
    },
  },
  selectors: {
    "&[data-open='true']": {
      display: "inline-block",
      position: "absolute",
      inset: "auto 0 calc(100% + 0.25em) auto",
      zIndex: 1,
    },
  },
});

export default {
  copy,
  button,
  notify,
};
