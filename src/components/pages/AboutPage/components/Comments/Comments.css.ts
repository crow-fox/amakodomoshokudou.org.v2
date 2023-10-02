import { cssVars } from "@/styles/app.css";
import { globalStyle, style } from "@vanilla-extract/css";

const comments = style({
  display: "grid",
  rowGap: "1rem",
});

const comment = style({
  display: "grid",
  rowGap: "0.5rem",
  padding: "1rem",
  backgroundColor: cssVars.color.grayLight,
  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundColor: cssVars.color.blackDark,
    },
  },
});

const name = style({
  paddingBlockEnd: "0.5rem",
  borderBlockEnd: `1px solid ${cssVars.color.grayDark}`,
  "@media": {
    "(prefers-color-scheme: dark)": {
      borderBlockEndColor: cssVars.color.blackLight,
    },
  },
});

const body = style({
  display: "grid",
  rowGap: "0.75rem",
});

globalStyle(`${body} > p`, {
  maxInlineSize: cssVars.width.prose,
  lineHeight: cssVars.lineHeight.relaxed,
});

export default {
  comments,
  comment,
  name,
  body,
};
