# 尼崎こども食堂ネットワーク サイト

## 使用技術

- フレームワーク：Astro
- 言語：TypeScript
- CSS：Astroテンプレート内のstyleタグ
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
