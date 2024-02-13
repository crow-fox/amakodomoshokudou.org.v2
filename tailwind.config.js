import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    margin: false,
    padding: false,
    width: false,
    maxWidth: false,
    height: false,
    maxHeight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx,astro,html}"],
  theme: {
    colors: {
      accent: "var(--accent)",
      danger: "var(--danger)",
      link: "var(--link)",
      primary: {
        background: "var(--primary-background)",
        text: "var(--primary-text)",
        border: "var(--primary-border)",
      },
      secondary: {
        background: "var(--secondary-background)",
        border: "var(--secondary-border)",
      },
      tertiary: {
        background: "var(--tertiary-background)",
      },
    },
    spacing: {
      // 8の倍数のフィボナッチ数列と、0, 4 ,12を登録
      0: "0",
      4: ".25rem",
      8: ".5rem",
      12: ".75rem",
      16: "1rem",
      24: "1.5rem",
      40: "2.5rem",
      64: "4rem",
      104: "6.5rem",
    },
    fontFamily: {
      // 元のフォントを継承した上で、一番優先のフォントをGoogleフォントにする
      sans: ["Noto Sans JP Variable", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      sm: ["0.75rem", "1.5"],
      base: ["1rem", "1.5"],
      lg: ["1.25rem", "1.5"],
      xl: ["1.5rem", "1.5"],
      "2xl": ["2rem", "1.25"],
      "3xl": ["2.75rem", "1.25"],
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      base: "1.5",
      relaxed: "1.75",
      loose: "2",
    },
    maxWidth: {
      container: "63.5rem",
      prose: "40rem",
      sidebar: "16rem",
    },
    screens: {
      sm: "40rem",
      md: "48rem",
      lg: "64rem",
    },
    extend: {},
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        // margin-inline-start, margin-inline-endは、デフォルトで ms-[] me-[] でサポートされているのでここでは追加しない
        {
          mt: (value) => ({
            marginBlockStart: value,
          }),
          mb: (value) => ({
            marginBlockEnd: value,
          }),
          ml: (value) => ({
            marginInlineStart: value,
          }),
          mr: (value) => ({
            marginInlineEnd: value,
          }),
          mx: (value) => ({
            marginInline: value,
          }),
          my: (value) => ({
            marginBlock: value,
          }),
        },
        {
          values: theme("margin"),
          supportsNegativeValues: true,
        },
      );
      matchUtilities(
        // padding-inline-start, padding-inline-endは、デフォルトで ps-[] pe-[] でサポートされているのでここでは追加しない
        {
          pt: (value) => ({
            paddingBlockStart: value,
          }),
          pb: (value) => ({
            paddingBlockEnd: value,
          }),
          pl: (value) => ({
            paddingInlineStart: value,
          }),
          pr: (value) => ({
            paddingInlineEnd: value,
          }),
          px: (value) => ({
            paddingInline: value,
          }),
          py: (value) => ({
            paddingBlock: value,
          }),
        },
        {
          values: theme("padding"),
        },
      );
      matchUtilities(
        {
          "max-w": (value) => ({
            maxInlineSize: value,
          }),
        },
        {
          values: theme("maxWidth"),
        },
      );
      matchUtilities(
        {
          w: (value) => ({
            inlineSize: value,
          }),
        },
        {
          values: theme("width"),
        },
      );
      matchUtilities(
        {
          h: (value) => ({
            blockSize: value,
          }),
        },
        {
          values: theme("height"),
        },
      );
      matchUtilities(
        {
          "max-h": (value) => ({
            maxBlockSize: value,
          }),
        },
        {
          values: theme("maxHeight"),
        },
      );
    }),
  ],
};
