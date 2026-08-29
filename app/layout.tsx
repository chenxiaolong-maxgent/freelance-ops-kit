import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chenxiaolong-maxgent.github.io/freelance-ops-kit/'),
  title: '接单经营全家桶 — 从访谈到回款与口碑，一套守住',
  description: '十个完整商品覆盖需求访谈、报价、客户启动、反馈改稿、月费、范围、利润、交付验收、回款与客户口碑，另含独家经营工作流。',
  alternates: { canonical: 'https://chenxiaolong-maxgent.github.io/freelance-ops-kit/' },
  openGraph: {
    type: 'website',
    title: '接单经营全家桶 — 报价 · 变更 · 利润 · 回款 · 口碑',
    description: '十个完整商品加独家工作流，一套守住自由职业项目利润与口碑。',
    url: 'https://chenxiaolong-maxgent.github.io/freelance-ops-kit/',
    images: [{ url: 'https://chenxiaolong-maxgent.github.io/freelance-ops-kit/og.png', width: 1731, height: 909, alt: '接单经营全家桶' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '接单经营全家桶 — 报价 · 变更 · 利润 · 回款 · 口碑',
    description: '十个完整商品加独家工作流，一套守住自由职业项目利润与口碑。',
    images: ['https://chenxiaolong-maxgent.github.io/freelance-ops-kit/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
