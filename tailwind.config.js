import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
import containerQuery from "@tailwindcss/container-queries";

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
      20: "1.25rem",
      32: "2rem",
      52: "3.25rem",
      84: "5.25rem",
      136: "8.5rem",
      220: "13.75rem",
      356: "22.25rem",
      576: "36rem",
      932: "58.25rem",
      // 特別に追加
      // 長文の一行の最大幅を指定するため
      640: "40rem",
    },
    fontFamily: {
      // 元のフォントを継承した上で、一番優先のフォントをGoogleフォントにする
      sans: ["Noto Sans JP Variable", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: ["calc(1rem * 8 / 10)", "1rem"],
      sm: ["calc(1rem * 8 / 9)", "1.25rem"],
      md: ["1rem", "1.5rem"],
      lg: ["calc(1rem * 8 / 7)", "1.5rem"],
      xl: ["calc(1rem * 8 / 6)", "1.75rem"],
      "2xl": ["calc(1rem * 8 / 5)", "2rem"],
      "3xl": ["calc(1rem * 8 / 4)", "2.5rem"],
      "4xl": ["calc(1rem * 8 / 3)", "3.25rem"],
    },
    fontWeight: {
      normal: "400",
      bold: "500",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      base: "1.5",
      relaxed: "1.75",
      loose: "2",
    },
    screens: {
      sm: "40em",
      // => @media (min-width: 640px) { ... }
      md: "48em",
      // => @media (min-width: 768px) { ... }
      lg: "64em",
      // => @media (min-width: 1024px) { ... }
      xl: "80em",
      // => @media (min-width: 1280px) { ... }
      "2xl": "96em",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      containers: (theme) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [
    containerQuery,
    plugin(({ matchUtilities, theme }) => {
      // デフォルトのユーティリティを論理プロパティで上書き
      // もし不都合な場合は、この部分とcorePluginsの設定をコメントアウトすればデフォルトの状態に戻る
      matchUtilities(
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
          m: (value) => ({
            margin: value,
          }),
        },
        {
          values: theme("margin"),
          supportsNegativeValues: true,
        },
      );
      matchUtilities(
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
          p: (value) => ({
            padding: value,
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
