import { cssVars } from "@/styles/app.css";
import { globalStyle, style } from "@vanilla-extract/css";

const alert = style({
  display: "grid",
  rowGap: "1rem",
  padding: "1rem",
  border: `1px solid ${cssVars.color.red}`,
  borderRadius: 2,
  "@media": {
    "(prefers-color-scheme: dark)": {
      borderColor: cssVars.color.redDark,
    },
  },
});

const title = style({
  fontWeight: 700,
});

const body = style({});

globalStyle(`${body} > *:first-child`, {
  marginBlockStart: 0,
});

globalStyle(`${body} > *`, {
  marginBlockStart: "1.5rem",
});

globalStyle(`${body} > p`, {
  maxInlineSize: cssVars.width.prose,
  marginBlockStart: "1.25rem",
  lineHeight: cssVars.lineHeight.loose,
});

globalStyle(`${body} > ul`, {
  display: "grid",
  rowGap: "0.5rem",
});

globalStyle(`${body} > ol`, {
  display: "grid",
  rowGap: "0.5rem",
});

globalStyle(`${body} > ul > li, ${body} > ol > li`, {
  maxInlineSize: cssVars.width.prose,
});

export default {
  alert,
  title,
  body,
};
