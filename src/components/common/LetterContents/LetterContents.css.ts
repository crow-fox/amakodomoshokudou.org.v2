import { cssVars } from "@/styles/app.css";
import { globalStyle, style } from "@vanilla-extract/css";

const contents = style({});

globalStyle(`${contents} > *:first-child`, {
  marginBlockStart: 0,
});

globalStyle(`${contents} > *`, {
  marginBlockStart: "1.5rem",
});

globalStyle(`${contents} > h2`, {
  marginBlockStart: "4.5rem",
  paddingBlockEnd: "0.25rem",
  fontSize: cssVars.fontSize.xl,
  borderBlockEnd: `2px solid ${cssVars.color.orange}`,
  "@media": {
    "screen and (min-width: 64em)": {
      marginBlockStart: "5.5rem",
      fontSize: cssVars.fontSize["3xl"],
      paddingBlockEnd: "0.5rem",
    },
    "(prefers-color-scheme: dark)": {
      borderBlockEndColor: cssVars.color.orangeDark,
    },
  },
});

globalStyle(`${contents} > h2 + *:nth-of-type(n)`, {
  // h2 + * ではなく h2 + *:nth-of-type(n) にすることで、 > p よりも優先度を高くしている
  marginBlockStart: "1.25rem",
});

globalStyle(`${contents} > h3`, {
  marginBlockStart: "3.5rem",
  fontSize: cssVars.fontSize.lg,
  "@media": {
    "screen and (min-width: 64em)": {
      marginBlockStart: "4.5rem",
      fontSize: cssVars.fontSize.xl,
    },
  },
});

globalStyle(`${contents} > h3 + *:nth-of-type(n)`, {
  marginBlockStart: "1rem",
});

globalStyle(`${contents} > h4`, {
  marginBlockStart: "3rem",
  fontSize: cssVars.fontSize.md,
  "@media": {
    "screen and (min-width: 64em)": {
      marginBlockStart: "4rem",
      fontSize: cssVars.fontSize.lg,
    },
  },
});

globalStyle(`${contents} > h4 + *:nth-of-type(n)`, {
  marginBlockStart: "1rem",
});

globalStyle(`${contents} > p`, {
  maxInlineSize: cssVars.width.prose,
  marginBlockStart: "1.25rem",
  lineHeight: cssVars.lineHeight.loose,
});

globalStyle(`${contents} > ul`, {
  display: "grid",
  rowGap: "0.5rem",
});

globalStyle(`${contents} > ol`, {
  display: "grid",
  rowGap: "0.5rem",
});

globalStyle(`${contents} > ul > li, ${contents} > ol > li`, {
  maxInlineSize: cssVars.width.prose,
});

export default {
  contents,
};
