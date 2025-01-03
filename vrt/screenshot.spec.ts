import { expect, test } from "@playwright/test";

const paths = [
  "/",
  "/about/",
  "/cafes/",
  "/cafes/2/", // ページ分割されているものは2ページ目まではスクリーンショットを撮る // 3ページ以降は同じなので省略
  ...["muko", "tachibana", "sonoda", "osho", "chuo", "oda"].flatMap((slug) => [
    `/cafes/areas/${slug}/`,
    `/cafes/areas/${slug}/2/`,
  ]),
  "/charity/",
  "/privacy-policy/",
  "/start-cafe/",
  "/404/",
];

for (const path of paths) {
  test(`screenshot[${path}]`, async ({ page }) => {
    await page.goto(path);
    await page.evaluate(() => {
      // サイドバーとメイン部分でそれぞれスクロールさせている関係で、fullPageでスクリーンショット撮ってもサイドバー分の高さしか撮れないので、
      // ラッパーの高さをautoにして、ページ全体を撮れるようにする（サイドバーの固定は解除されるが、スクリーンショットのためなので問題ない）
      const wrapper = document.querySelector<HTMLDivElement>("body > div");
      if (!wrapper) throw new Error("Wrapper not found");
      wrapper.style.blockSize = "auto";

      // 画像が読み込まれないことがあるので、強制的に読み込む
      const images = document.querySelectorAll<HTMLImageElement>("img");
      // 画像を同期的に読み込むようにする
      for (const image of images) {
        image.setAttribute("decoding", "sync");
        image.setAttribute("loading", "eager");
      }
      // ページ下部までスクロールすることで、画像が読み込まれる
      const maxHeight = document.documentElement.clientHeight;
      window.scrollTo(0, maxHeight);
    });

    await expect(page).toHaveScreenshot({ fullPage: true });
  });
}
