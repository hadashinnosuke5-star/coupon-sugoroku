import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'クーポンすごろく',
  description: 'サイコロを振ってクーポンを獲得するゲーム',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
