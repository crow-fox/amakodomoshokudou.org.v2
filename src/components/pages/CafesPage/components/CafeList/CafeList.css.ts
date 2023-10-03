import { cssVars } from "@/styles/app.css";
import { globalStyle, style } from "@vanilla-extract/css";

const cafes = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(min(16.8rem, 100%), 1fr))",
  gap: "1.5rem",
  "@media": {
    "screen and (min-width: 64em)": {
      gap: "2.5rem",
    },
  },
});

const cafe = style({
  display: "grid",
  rowGap: "0.5rem",
  padding: "1rem",
  backgroundColor: cssVars.color.white,
  borderInlineStart: `4px solid ${cssVars.color.orange}`,
  gridTemplateRows: "repeat(3, min-content)",
  "@media": {
    "screen and (min-width: 64em)": {
      paddingInline: "1.5rem",
    },
    "(prefers-color-scheme: dark)": {
      backgroundColor: cssVars.color.black,
      borderInlineStartColor: cssVars.color.orangeDark,
    },
  },
});

const name = style({
  fontSize: cssVars.fontSize.lg,
  "@media": {
    "screen and (min-width: 64em)": {
      fontSize: cssVars.fontSize.xl,
    },
  },
});

const image = style({
  backgroundColor: cssVars.color.grayLight,
  border: `1px solid ${cssVars.color.grayDark}`,
  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundColor: cssVars.color.blackDark,
      borderColor: cssVars.color.blackLight,
    },
  },
});

const item = style({
  display: "flex",
  flexWrap: "wrap",
  border: `1px solid ${cssVars.color.grayDark}`,
  "@media": {
    "(prefers-color-scheme: dark)": {
      borderColor: cssVars.color.blackLight,
    },
  },
  selectors: {
    "&:not(:first-child)": {
      borderBlockStart: 0,
    },
  },
});

const itemTitle = style({
  flex: "1 0 calc(1rem + 3rem + 1rem)",
  paddingBlock: "0.5rem",
  paddingInline: "1rem",
  fontWeight: 700,
  backgroundColor: cssVars.color.grayLight,
  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundColor: cssVars.color.blackDark,
    },
  },
});

const itemDesc = style({
  flex: "999 0 0",
  minInlineSize: "70%",
  paddingBlock: "0.5rem",
  paddingInline: "1rem",
  overflowWrap: "anywhere",
});

globalStyle(`${image} > img`, {
  aspectRatio: "16 / 9",
  objectFit: "contain",
});

export default {
  cafes,
  cafe,
  name,
  image,
  item,
  itemTitle,
  itemDesc,
};
