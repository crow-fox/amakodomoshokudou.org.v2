import { cssVars } from "@/styles/app.css";
import { globalStyle, style } from "@vanilla-extract/css";

const highlight = style({
  padding: "1rem",
  backgroundColor: cssVars.color.grayLight,
  borderRadius: 2,
  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundColor: cssVars.color.blackDark,
    },
  },
});

globalStyle(`${highlight} > *:first-child`, {
  marginBlockStart: 0,
});

globalStyle(`${highlight} > *`, {
  marginBlockStart: "1.5rem",
});

globalStyle(`${highlight} > p`, {
  maxInlineSize: cssVars.width.prose,
  marginBlockStart: "1.25rem",
  lineHeight: cssVars.lineHeight.loose,
});

globalStyle(`${highlight} > ul`, {
  display: "grid",
  rowGap: "0.5rem",
});

globalStyle(`${highlight} > ol`, {
  display: "grid",
  rowGap: "0.5rem",
});

globalStyle(`${highlight} > ul > li, ${highlight} > ol > li`, {
  maxInlineSize: cssVars.width.prose,
});

export default {
  highlight,
};
