# SAIYO Recruitment LP

採用用ランディングページのプロトタイプです。HTML / CSS / Vanilla JavaScript で構築しています。

## 構成

- `index.html` … マークアップ（ヒーロー、会社紹介、募集職種、社員の声、応募フォーム）
- `styles.css` … モダン＆シンプルなデザイン、レスポンシブ対応
- `script.js` … ヘッダー追従、モバイルナビ、スクロール表示アニメーション、フォームバリデーション

## セクション

1. **Hero** — キャッチコピーとCTA
2. **About** — 会社紹介＋数値指標
3. **Jobs** — 募集職種カード（エンジニア / デザイナー / 営業 / 新卒）
4. **Voice** — 社員インタビュー
5. **Entry** — 応募フォーム（クライアント側バリデーションのみ）

## ローカル確認

```bash
# 任意の静的サーバで起動
python3 -m http.server 8000
# → http://localhost:8000
```

## 今後の拡張案

- Next.js 化（`app/` ルーターと `components/` 分割）
- フォーム送信先を API Route / 外部サービス（Formspree 等）に接続
- CMS（microCMS / Notion）連携で求人情報を動的化
- アクセシビリティ対応の強化（フォーカスリング、ARIA）
- OGP / meta タグの整備
