/** @type {import('tailwindcss').Config} */
export default {
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
      // フォントを登録
      // システムフォントとGoogleフォントを基準にする
      // 元のフォントを継承した上で、一番優先のフォントをGoogleフォントにする
    },
    fontSize: {
      // フォントサイズとline-heightを登録
      // 本文のサイズのみline-heightを広めも指定できるようにしたい。
    },
    extend: {},
  },
  plugins: [],
};
