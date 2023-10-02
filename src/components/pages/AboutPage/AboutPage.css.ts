import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

// 使い回すスタイル
const contentLayout = style({
  display: "grid",
  gridTemplateColumns: `auto [content-start] min(100%, ${cssVars.width.container}) [content-end] auto`,
});

const contentLayoutInner = style({
  gridColumn: "content-start / content-end",
});

const page = style({
  display: "grid",
  borderBlockStart: `8px solid ${cssVars.color.orange}`,
  "@media": {
    "(prefers-color-scheme: dark)": {
      borderBlockStartColor: cssVars.color.orangeDark,
    },
  },
});

const withBg = style([
  contentLayout,
  {
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

// header内のスタイル
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

const callout = style([
  contentLayoutInner,
  {
    display: "grid",
    rowGap: "0.5rem",
    padding: "1rem",
    backgroundColor: cssVars.color.grayLight,
    borderRadius: 2,
    "@media": {
      "(prefers-color-scheme: dark)": {
        backgroundColor: cssVars.color.blackDark,
      },
    },
  },
]);

const toc = style([contentLayoutInner]);

// philosophy内のスタイル
// LetterContentのスタイルを変更後、下記のスタイルを適応する
// const philosophy = style([
//   contentLayoutInner,
//   {
//     display: "grid",
//     rowGap: "1rem",
//     paddingBlock: "1.5rem",
//     paddingInline: "1rem",
//     backgroundColor: cssVars.color.white,
//     borderInlineStart: `4px solid ${cssVars.color.orange}`,
//   },
// ]);

const body = style([
  contentLayout,
  {
    rowGap: "4rem",
    paddingBlock: "4rem",
    paddingInline: "1rem",
    "@media": {
      "screen and (min-width: 64em)": {
        rowGap: "6rem",
        paddingBlock: "6rem",
        paddingInline: "1.5rem",
      },
    },
  },
]);

const activities = style([
  contentLayoutInner,
  {
    display: "grid",
    rowGap: "1.5rem",
  },
]);
const histories = style([
  contentLayoutInner,
  {
    display: "grid",
    rowGap: "1.5rem",
  },
]);
const overview = style([
  contentLayoutInner,
  {
    display: "grid",
    rowGap: "1.5rem",
  },
]);
const comments = style([
  contentLayoutInner,
  {
    display: "grid",
    rowGap: "1.5rem",
  },
]);

export default {
  page,
  withBg,
  contentLayout,
  header,
  title,
  callout,
  toc,
  body,
  activities,
  histories,
  overview,
  comments,
};
