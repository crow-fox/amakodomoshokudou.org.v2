import { cssVars } from "@/styles/app.css";
import { globalStyle, style } from "@vanilla-extract/css";

const charity = style({
  display: "grid",
  rowGap: "1.5rem",
});

const descs = style({
  display: "grid",
  gap: "1rem",
});

globalStyle(`${descs} > p`, {
  lineHeight: cssVars.lineHeight.relaxed,
  maxInlineSize: cssVars.width.prose,
});

const links = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.5rem",
  alignItems: "center",
  listStyle: "none",
});

export default {
  charity,
  descs,
  links,
};
