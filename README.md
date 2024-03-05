# 尼崎こども食堂ネットワーク サイト

## 開発環境

### 環境変数の設定

[Newt](https://www.newt.so/)というHeadlessCMSを使用しています。

`.env`ファイルをルートディレクトリに作成し、以下の環墩変数を設定してください。

```
NEWT_SPACE_UID=xxxx
NEWT_CDN_API_TOKEN=xxxx
```

### ローカルサーバー起動

`bun run dev`

### ビルド

`bun run build`

### プレビュー

`bun run start`

### デプロイ

- [x] 手動でデプロイ
- [ ] GitHub Actionsで自動デプロイ

## 使用技術

- フレームワーク：Astro
- 言語：TypeScript
- CSS：TailwindCSS
- HeadlessCMS：Newt

## ディレクトリ構成

\_で始まるディレクトリはpages配下で使用してもページとして出力されないため、必要な関数やコンポーネントはページのディレクトリに配置する

```
root/
│
├── public/                 # ルートディレクトリに出力される静的ファイル
│   │
│   ├── images/             # 画像
│   │
│   └── documents/          # PDFなどのファイル
│
|__ src/
    |
    ├── pages/             # webサイトを構成する基本的に全ての要素
    |   |
    │   ├── _assets        # 共通アセット
    │   |
    │   ├── _components    # 共通コンポーネント
    |   |
    │   ├── _consts        # 共通定数
    |   |
    │   ├── _layouts       # 共通レイアウト
    |   |
    │   ├── _libs          # 共通関数
    |   |
    │   ├── _schemas       # 型定義など
    |   |
    │   ├── 404            # エラーページ
    │   |
    │   ├── about          # 尼崎こども食堂ネットワークについて
    │   |
    │   ├── cafes          # 尼崎市のこども食堂（地区ごとの一覧も含む）
    │   |
    │   ├── charity        # 尼崎のこども食堂への寄付
    │   |
    │   ├── privacy-policy # プライバシーポリシー
    │   |
    │   ├── start-cafe     # こども食堂の立ち上げ
    │   |
    │   ├── index.astro    # トップページ
    │
    ├── styles/            # 共通スタイル
```
