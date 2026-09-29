# クーポンすごろく プロトタイプ

あとから機能追加しやすいように、画面・ゲームロジック・設定を分離した構成です。

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで以下を開きます。

```text
http://localhost:3000
```

## 主な構成

- `app/page.tsx`
  - トップ画面
- `components/Game.tsx`
  - ゲーム全体の状態管理
- `components/Board.tsx`
  - すごろく盤面
- `components/Dice.tsx`
  - サイコロ表示とアニメーション
- `components/CouponModal.tsx`
  - クーポン結果表示
- `lib/game-config.ts`
  - マスとクーポン内容
- `lib/game-engine.ts`
  - サイコロ・移動ロジック
- `types/game.ts`
  - 型定義

## 今後追加しやすい機能

- Supabase
- LINEログイン
- 1日1回制限
- クーポン発行履歴
- クーポン使用済み処理
- 管理画面
- クーポン内容のDB管理
- 確率調整
- 店舗別キャンペーン
- 来店QRとの連携

## 設計方針

ゲーム設定は `lib/game-config.ts` にまとめてあります。
クーポン内容を変更したい場合は、まずここを書き換えるだけで対応できます。

抽選処理は `lib/game-engine.ts` に分離しているので、
将来的にサーバー側抽選へ変更しやすい構成です。
