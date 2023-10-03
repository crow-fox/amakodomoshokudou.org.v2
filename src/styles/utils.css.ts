import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

export const contentLayout = style({
  display: "grid",
  gridTemplateColumns: `auto [content-start] min(100%, ${cssVars.width.container}) [content-end] auto`,
});

export const contentLayoutInner = style({
  gridColumn: "content-start / content-end",
});

export const srOnly = style({
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
});
