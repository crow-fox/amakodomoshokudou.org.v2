import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

const page = style({
  display: "grid",
});

const contentLayout = style({
  display: "grid",
  gridTemplateColumns: `auto min(${cssVars.width.container}, 100%) auto`,
});

const header = style([
  contentLayout,
  {
    backgroundColor: cssVars.color.orangeLight,
    border: `4px solid ${cssVars.color.orange}`,
    paddingBlock: "2rem",
    paddingInline: "1rem",
    "@media": {
      "screen and (min-width: 64em)": {
        paddingBlock: "3rem",
        paddingInline: "1.5rem",
      },
      "(prefers-color-scheme: dark)": {
        backgroundColor: cssVars.color.orangeDarkest,
        borderColor: cssVars.color.orangeDark,
      },
    },
  },
]);

const key = style({
  gridColumn: "2",
});

const body = style([
  contentLayout,
  {
    rowGap: "4rem",
    paddingBlockStart: "3rem",
    paddingBlockEnd: "4rem",
    paddingInline: "1rem",
    "@media": {
      "screen and (min-width: 64em)": {
        rowGap: "6rem",
        paddingBlockStart: "4rem",
        paddingBlockEnd: "6rem",
        paddingInline: "1.5rem",
      },
    },
  },
]);

const activities = style({
  gridColumn: "2",
});

const search = style({
  gridColumn: "2",
});

const start = style({
  gridColumn: "2",
});

const charity = style({
  gridColumn: "2",
});

export default {
  page,
  header,
  key,
  body,
  activities,
  search,
  start,
  charity,
};
