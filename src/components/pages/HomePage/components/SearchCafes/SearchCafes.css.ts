import { cssVars } from "@/styles/app.css";
import { globalStyle, style } from "@vanilla-extract/css";

const search = style({
  display: "grid",
  gap: "1.5rem",
});

const descs = style({
  display: "grid",
  gap: "1rem",
});

globalStyle(`${descs} > p`, {
  lineHeight: cssVars.lineHeight.relaxed,
  maxInlineSize: cssVars.width.prose,
});

export default {
  search,
  descs,
};
