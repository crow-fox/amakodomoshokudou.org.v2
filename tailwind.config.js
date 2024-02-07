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
      // スペースを登録
      // フィボナッチ数列と4の倍数を基準にする
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
