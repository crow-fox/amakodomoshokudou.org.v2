import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

const toc = style({
  paddingBlock: "0.5rem",
  paddingInline: "1rem",
  border: `1px solid ${cssVars.color.grayDark}`,
  borderRadius: 2,
  "@media": {
    "(prefers-color-scheme: dark)": {
      borderColor: cssVars.color.blackLight,
    },
  },
});

const list = style({
  listStyle: "none",
  display: "grid",
  rowGap: "0.5rem",
});

const link = style({
  display: "inline-grid",
  gridTemplateColumns: "min-content auto",
  columnGap: "0.5rem",
  paddingBlock: "0.25rem",
  paddingInline: "0.25rem",
  color: cssVars.color.blue,
  textDecoration: "underline",
  textUnderlineOffset: 4,
  borderRadius: 2,
  ":before": {
    display: "inline-block",
    inlineSize: "0.25em",
    marginBlockStart: "calc(1em * 1.5 / 2)",
    content: "",
    backgroundColor: cssVars.color.blackLight,
    borderRadius: "100%",
    blockSize: "0.25em",
  },
  "@media": {
    "(prefers-color-scheme: dark)": {
      color: cssVars.color.blueLight,
      ":before": {
        backgroundColor: cssVars.color.grayDark,
      },
    },
    "(hover: hover)": {
      ":hover": {
        boxShadow: `0 0 0 2px currentcolor`,
      },
    },
  },
});

export default {
  toc,
  list,
  link,
};
