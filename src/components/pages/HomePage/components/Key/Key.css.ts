import { cssVars } from "@/styles/app.css";
import { globalStyle, style } from "@vanilla-extract/css";

const key = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(24rem, 100%), 1fr))",
  gap: "1rem",
  alignItems: "center",
  "@media": {
    "screen and (min-width: 64em)": {
      gap: "2rem",
    },
  },
});

const body = style({
  display: "grid",
  gap: "1rem",
});

const image = style({});

globalStyle(`${image} > img`, {
  borderRadius: "8px",
});

const title = style({
  fontSize: cssVars.fontSize["3xl"],
  fontWeight: 700,
  lineHeight: cssVars.lineHeight.tight,
  "@media": {
    "screen and (min-width: 64em)": {
      fontSize: cssVars.fontSize["4xl"],
    },
  },
});

globalStyle(`${title} > span`, {
  display: "inline-block",
});

const desc = style({
  lineHeight: cssVars.lineHeight.relaxed,
});

export default {
  key,
  body,
  image,
  title,
  desc,
};
