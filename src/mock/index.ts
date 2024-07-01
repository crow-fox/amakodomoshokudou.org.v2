// Viteの仕様として、vite dev --mode <xxx>, vite build --mode <xxx> とすると、import.meta.env.MODEに xxx が設定されるが、
// Astroの仕様として、astro dev --mode <xxx>の際には、import.meta.env.MODEに xxx ではなく必ず development が設定されてしまう
// なお、astro buildの際には vite buildのときと同じように --mode <xxx> が設定される

// そのためmockを使用するかどうかは、実行中のnpm scriptを取得して、--mode mock が指定されているかどうかで判定する
// 実行中の npm script を取得
const _run_npm_script = import.meta.env.npm_lifecycle_script;
// --mode mock が指定されている場合、mock モードとして動作する
const _use_mock =
  typeof _run_npm_script === "string"
    ? _run_npm_script.includes("--mode mock")
    : (() => {
        throw new Error("npm script not found");
      })();

type Fetcher<T> = () => Promise<T>;
type Mock<T> = () => T | Promise<T>;

type Params<T> = {
  fetcher: Fetcher<T>;
  mock: Mock<T>;
};

export async function mockOrFetch<T>({ fetcher, mock }: Params<T>): Promise<T> {
  if (_use_mock) {
    console.log("moking", fetcher.name);
    return await mock();
  }

  return await fetcher();
}
