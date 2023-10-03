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
const title = style([contentLayoutInner]);
const toc = style([contentLayoutInner]);

const contents = style([
  contentLayout,
  {
    rowGap: "2rem",
    paddingBlock: "2rem",
    paddingInline: "1rem",
    backgroundColor: cssVars.color.orangeLight,

    "@media": {
      "screen and (min-width: 64em)": {
        paddingBlock: "3rem",
        paddingInline: "1.5rem",
        rowGap: "3rem",
      },
      "(prefers-color-scheme: dark)": {
        backgroundColor: cssVars.color.orangeDarkest,
      },
    },
  },
]);

const content = style([
  contentLayoutInner,
  {
    display: "grid",
    paddingBlock: "1rem",
    paddingInline: "1rem",
    backgroundColor: cssVars.color.white,
    borderInlineStart: `4px solid ${cssVars.color.orange}`,
    "@media": {
      "screen and (min-width: 64em)": {
        paddingBlock: "2rem",
        paddingInline: "2rem",
      },
      "(prefers-color-scheme: dark)": {
        backgroundColor: cssVars.color.black,
        borderInlineStartColor: cssVars.color.orangeDark,
      },
    },
  },
]);

export default {
  page,
  header,
  title,
  toc,
  contents,
  content,
};
