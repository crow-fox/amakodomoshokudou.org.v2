# 尼崎こども食堂ネットワーク サイト

## 開発環境

### 環境変数の設定

[Newt](https://www.newt.so/)というHeadlessCMSを使用しています。

`.env`ファイルをルートディレクトリに作成し、以下の環境変数を設定してください。

```
NEWT_SPACE_UID=xxxx
NEWT_CDN_API_TOKEN=xxxx
```

### 依存関係のインストール

`pnpm i`

### ローカルサーバー起動

#### Mockなし

`pnpm run dev`

#### Mockあり

`pnpm run dev:mock`

### ビルド

#### Mockなし

`pnpm run build`

#### Mockあり

`pnpm run build:mock`

### プレビュー

`pnpm run start`

### デプロイ

- [x] 手動でデプロイ
- [ ] GitHub Actionsで自動デプロイ

#### 手動でデプロイ

1. `pnpm run build`
2. /\_distディレクトリ以下のファイルを全てサーバーにアップロード

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
└── src/
    │
    ├── pages/              # webサイトを構成する基本的に全ての要素
    │   │
    │   ├── _assets/        # 共通アセット
    │   │
    │   ├── 404/            # エラーページ
    │   │
    │   ├── about/          # 尼崎こども食堂ネットワークについて
    │   │
    │   ├── cafes/          # 尼崎市のこども食堂（地区ごとの一覧も含む）
    │   │
    │   ├── charity/        # 尼崎のこども食堂への寄付
    │   │
    │   ├── privacy-policy/ # プライバシーポリシー
    │   │
    ├── components/         # 共通コンポーネント
    │
    ├── consts/             # 共通定数
    │
    ├── layouts/            # 共通レイアウト
    │
    ├── libs/               # 共通関数
    |
    ├── mock/               # モック用の関数
    │
    ├── schemas/            # 型定義など
    │
    └── styles/             # 共通スタイル
```
