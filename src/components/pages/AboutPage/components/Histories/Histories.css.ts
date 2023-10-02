import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

const histories = style({
  listStyle: "none",
});

const history = style({
  display: "grid",
  gridTemplateRows:
    "[border-start content-start] 0.5rem [circle-start] auto [circle-end content-end] 1.5rem [border-end]",
  gridTemplateColumns:
    "[circle-start] 0.25rem [border-start] 1px [border-end] 0.25rem [circle-end] 1rem [content-start] 1fr [content-end]",
  ":last-child": {
    gridTemplateRows:
      "[border-start content-start] 0.5rem [circle-start] auto [circle-end content-end border-end]",
  },

  ":before": {
    // border部分
    gridRow: "border-start / border-end",
    gridColumn: "border-start / border-end",
    inlineSize: 1,
    blockSize: "100%",
    content: "",
    backgroundColor: cssVars.color.grayDark,
  },
  ":after": {
    // circle部分
    gridRow: "circle-start / circle-end",
    gridColumn: "circle-start / circle-end",
    inlineSize: "calc(0.25rem + 1px + 0.25rem)",
    blockSize: "calc(0.25rem + 1px + 0.25rem)",
    content: "",
    borderRadius: "100%",
    backgroundColor: cssVars.color.blueDark,
  },
  "@media": {
    "(prefers-color-scheme: dark)": {
      ":before": {
        backgroundColor: cssVars.color.blackLight,
      },
      ":after": {
        backgroundColor: cssVars.color.gray,
      },
    },
  },
});

const body = style({
  gridRow: "content-start / content-end",
  gridColumn: "content-start / content-end",
  display: "grid",
  rowGap: "0.5rem",
});

const desc = style({
  maxInlineSize: cssVars.width.prose,
  lineHeight: cssVars.lineHeight.loose,
});

export default {
  histories,
  history,
  body,
  desc,
};
