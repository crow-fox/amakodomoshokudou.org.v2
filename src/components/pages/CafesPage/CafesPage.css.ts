import { cssVars } from "@/styles/app.css";
import { contentLayout, contentLayoutInner } from "@/styles/utils.css";
import { style } from "@vanilla-extract/css";

const page = style({
  display: "grid",
  borderBlockStart: `8px solid ${cssVars.color.orange}`,
  "@media": {
    "(prefers-color-scheme: dark)": {
      borderBlockStartColor: cssVars.color.orangeDark,
    },
  },
});

const header = style([
  contentLayout,
  {
    rowGap: "1rem",
    paddingInline: "1rem",
    paddingBlock: "2rem",
    "@media": {
      "screen and (min-width: 64em)": {
        paddingBlock: "3rem",
        paddingInline: "1.5rem",
        rowGap: "1.5rem",
      },
    },
  },
]);

const top = style([
  contentLayoutInner,
  {
    display: "grid",
    rowGap: "1rem",
  },
]);
const callout = style([contentLayoutInner]);
const nav = style([contentLayoutInner]);

const body = style([
  contentLayout,
  {
    display: "grid",
    paddingBlock: "2rem",
    paddingInline: "1rem",
    backgroundColor: cssVars.color.orangeLight,
    "@media": {
      "screen and (min-width: 64em)": {
        paddingBlock: "3rem",
        paddingInline: "1.5rem",
      },
      "(prefers-color-scheme: dark)": {
        backgroundColor: cssVars.color.orangeDarkest,
      },
    },
  },
]);

const contents = style([
  contentLayoutInner,
  {
    display: "grid",
    rowGap: "2rem",

    "@media": {
      "screen and (min-width: 64em)": {
        rowGap: "3rem",
      },
    },
  },
]);

const cafes = style({
  inlineSize: "min(52.5rem, 100%)",
});

export default {
  page,
  header,
  top,
  callout,
  nav,
  body,
  contents,
  cafes,
};
