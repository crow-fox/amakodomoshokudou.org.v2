import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

export const contentLayout = style({
  display: "grid",
  gridTemplateColumns: `auto [content-start] min(100%, ${cssVars.width.container}) [content-end] auto`,
});

export const contentLayoutInner = style({
  gridColumn: "content-start / content-end",
});
