import { cssVars } from "@/styles/app.css";
import { style } from "@vanilla-extract/css";

const contact = style({
  display: "grid",
  rowGap: "0.5rem",
  padding: "1rem",
  borderBlockStart: `1px solid ${cssVars.color.grayDark}`,
  "@media": {
    "(prefers-color-scheme: dark)": {
      borderBlockStartColor: cssVars.color.blackLight,
    },
  },
});

const title = style({
  fontWeight: 700,
});

const mail = style({
  lineHeight: cssVars.lineHeight.tight,
});

export default {
  contact,
  title,
  mail,
};
