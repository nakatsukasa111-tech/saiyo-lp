# NeeDS 採用ランディングページ

株式会社エヌデイエス（NeeDS）向けの採用LPです。神戸のパーソナルトレーニングジムNeeDSの採用情報を発信します。

## 構成

- `index.html` … マークアップ
- `styles.css` … NeeDSブランド（青 #4A89C7）を基調としたモダンデザイン
- `script.js` … スクロール演出、モバイルナビ、画像自動設定、フォームバリデーション
- `assets/` … 画像格納フォルダ（詳細は `assets/README.md`）

## セクション

1. **Hero** — キャッチコピー「自分のことが好きになる場所、NeeDS」
2. **会社紹介（ABOUT US）** — 会社概要・数値指標・3つのサービス・Mission / Vision / Value
3. **3つの特徴（FEATURES）** — マンツーマン指導・独自メソッド・実績と継続率
4. **募集職種（JOBS）** — トレーナー / アスリート担当 / ジュニアコーチ / 運営スタッフ
5. **社員の声（MEMBER'S VOICE）** — スタッフインタビュー
6. **代表メッセージ（MESSAGE）** — 代表取締役 中務 正幸より
7. **応募フォーム（ENTRY）**

## 画像の差し替え

`assets/` フォルダに下記ファイル名で画像を置くだけで反映されます：

- `logo.png` — ロゴ
- `hero.jpg` — ヒーロー背景
- `feature1.jpg` / `feature2.jpg` / `feature3.jpg` — 3つの特徴
- `ceo.jpg` — 代表メッセージの写真

画像が無い場合は、青のプレースホルダで表示されます。詳細は `assets/README.md`。

## ローカル確認

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

または `index.html` をブラウザでダブルクリックでもOK。
