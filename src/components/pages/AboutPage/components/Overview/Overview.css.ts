import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

const list = style({
  display: "grid",
});

const item = style({
  display: "flex",
  flexWrap: "wrap",
  border: `1px solid ${cssVars.color.grayDark}`,
  selectors: {
    "&:not(:first-child)": {
      marginBlockStart: "-1px",
    },
  },
  "@media": {
    "(prefers-color-scheme: dark)": {
      borderColor: cssVars.color.blackLight,
    },
  },
});

const title = style({
  flex: "1 0 calc(1rem * 2 + 6rem)", // 余白 + 6文字分を確保
  padding: "1rem",
  fontWeight: "bold",
  backgroundColor: cssVars.color.grayLight,
  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundColor: cssVars.color.blackDark,
    },
  },
});

const desc = style({
  flex: "999 0 0", // 可能な限り伸びる
  minInlineSize: "70%", // 70%を下回ると縦並びになる
  padding: "1rem",
});

export default {
  list,
  item,
  title,
  desc,
};
