import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

const bankAccount = style({
  display: "grid",
  rowGap: "1rem",
  padding: "1rem",
  border: `1px solid ${cssVars.color.grayDark}`,
  "@media": {
    "(prefers-color-scheme: dark)": {
      borderColor: cssVars.color.blackLight,
    },
  },
});

const title = style({
  fontWeight: "bold",
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
  flex: "1 0 calc(1rem + 4rem + 1rem)",
  paddingBlock: "0.5rem",
  paddingInline: "1rem",
  fontWeight: "bold",
  backgroundColor: cssVars.color.grayLight,
  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundColor: cssVars.color.blackDark,
    },
  },
});

const itemDesc = style({
  flex: "9999 0 0",
  minInlineSize: "70%",
  paddingBlock: "0.5rem",
  paddingInline: "1rem",
});

export default {
  bankAccount,
  title,
  item,
  itemTitle,
  itemDesc,
};
