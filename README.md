# 尼崎こども食堂ネットワーク サイト

## 開発環境

### ローカルサーバー起動

`pnpm dev`

### ビルド

`pnpm build`

### プレビュー

`pnpm start`

### デプロイ

- [x] 手動でデプロイ
- [ ] GitHub Actionsで自動デプロイ

## 使用技術

- フレームワーク：Astro
- 言語：TypeScript
- CSS：Vanilla-extract
- HeadlessCMS：Newt

## ディレクトリ構成

```
root/
│
├── public/                 # ルートディレクトリに出力される静的ファイル
│   │
│   ├── images/             # 画像
│   │
│   └── documents/          # PDFなどのファイル
│
└── src/                    # Viteでバンドルされる
    │
    ├── components/         # 全コンポーネント
    │   │
    │   ├── common/         # 汎用コンポーネント
    │   │
    │   ├── layouts/        # 共通レイアウトコンポーネント
    │   │
    │   └── pages/          # ページごとの固有コンポーネント
    │
    ├── consts/             # 共通の変数
    │
    ├── pages/              # ページのルーティングとデータロード
    │
    ├── service/            # 外部APIと連携
    │
    ├── styles/             # 共通のCSSファイル
    │
    ├── types/              # 共通の型定義
    │
    └── utils/              # 汎用関数
```

## コンポーネント構成

Astroファイル名をindex.astroにすると、コンポーネントを使用する時に、vscodeで補完が効かないのでComponent.astroにする

```
Component/
│
├── Component.astro         # JSとHTMLを記述するAstroコンポーネント
│
└── Component.css.ts        # CSSはVanilla-extractを使用して定義
```
