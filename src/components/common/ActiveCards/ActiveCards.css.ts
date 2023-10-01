import { cssVars } from "@/styles/app.css";
import { globalStyle, style } from "@vanilla-extract/css";

const activities = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(10rem, 100%), 1fr))",
  gap: "2rem",
  alignItems: "flex-start",
});

const activity = style({
  display: "grid",
  gridTemplateAreas: '"image" "body"',
  rowGap: "0.75rem",
});

const activity__title = style({
  fontSize: cssVars.fontSize.lg,
  "@media": {
    "screen and (min-width: 64em)": {
      fontSize: cssVars.fontSize["xl"],
    },
  },
});

const activity__body = style({
  gridArea: "body",
  display: "grid",
  gap: "0.5rem",
  padding: "0.5rem",
});

const activity__image = style({
  gridArea: "image",
  borderRadius: 4,
  boxShadow: `0.5rem 0.5rem ${cssVars.color.orangeLight}`,
  inlineSize: "calc(100% - 0.5rem)",
  "@media": {
    "(prefers-color-scheme: dark)": {
      boxShadow: `0.5rem 0.5rem ${cssVars.color.orangeDarkest}`,
    },
  },
});

globalStyle(`${activity__image} > img`, {
  borderRadius: "inherit",
});

export default {
  activities,
  activity,
  activity__title,
  activity__body,
  activity__image,
};
