import { cssVars } from "@/styles/app.css";
import { srOnly } from "@/styles/utils.css";
import { style } from "@vanilla-extract/css";

const list = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  listStyle: "none",
});

const pageBlock = style({
  display: "grid",
  placeContent: "center",
  inlineSize: "3rem",
  blockSize: "3rem",
  fontSize: cssVars.fontSize.lg,
  fontWeight: 700,
  border: "2px solid currentcolor",
  borderRadius: 2,
});

const link = style([
  pageBlock,
  {
    color: cssVars.color.blueDark,
    backgroundColor: cssVars.color.white,
    textDecoration: "none",
    ":focus-visible": {
      backgroundColor: cssVars.color.orangeLight,
    },
    "@media": {
      "(prefers-color-scheme: dark)": {
        color: cssVars.color.gray,
        backgroundColor: cssVars.color.black,
        ":focus-visible": {
          backgroundColor: cssVars.color.orangeDarkest,
        },
      },
      "(hover: hover)": {
        ":hover": {
          backgroundColor: cssVars.color.orangeLight,
        },
      },
      "(prefers-color-scheme: dark) and (hover: hover)": {
        ":hover": {
          backgroundColor: cssVars.color.orangeDarkest,
        },
      },
    },
  },
]);

const current = style([
  pageBlock,
  {
    color: cssVars.color.blueDark,
    backgroundColor: cssVars.color.orange,
    "@media": {
      "(prefers-color-scheme: dark)": {
        color: cssVars.color.gray,
        backgroundColor: cssVars.color.orangeDark,
      },
    },
  },
]);

const pageVoice = style([srOnly]);

export default {
  list,
  link,
  current,
  pageVoice,
};
