import { Noto_Sans_JP } from 'next/font/google'
import './globals.css';

// 1. フォントの読み込み
const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

// 2. ページのレイアウト
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      {/* 3. ページやレイアウトの内容を表示 */}
      <body className={NotoSansJP.className}>{children}</body>
    </html>
  )
}
