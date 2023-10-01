import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

const area = style({
  display: "grid",
  rowGap: "0.5rem",
  padding: "1rem",
  border: `1px solid ${cssVars.color.grayDark}`,
  borderRadius: 2,
  "@media": {
    "(prefers-color-scheme: dark)": {
      borderColor: cssVars.color.blackLight,
    },
  },
});

const title = style({
  fontWeight: 700,
});

export default {
  area,
  title,
};
