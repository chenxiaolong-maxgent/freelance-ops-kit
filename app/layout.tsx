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
  title: '接单经营全家桶 — 报价、变更、回款一套守住',
  description: '报价匠 PRO、ScopeGuard PRO 与 CashRadar PRO 组合套装，覆盖自由职业项目从报价到尾款到账的完整经营链路。',
  alternates: { canonical: 'https://chenxiaolong-maxgent.github.io/freelance-ops-kit/' },
  openGraph: {
    type: 'website',
    title: '接单经营全家桶 — 报价 · 变更 · 回款',
    description: '三个完整商品加独家工作流，一套守住自由职业项目利润。',
    url: 'https://chenxiaolong-maxgent.github.io/freelance-ops-kit/',
    images: [{ url: 'https://chenxiaolong-maxgent.github.io/freelance-ops-kit/og.png', width: 1731, height: 909, alt: '接单经营全家桶' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '接单经营全家桶 — 报价 · 变更 · 回款',
    description: '三个完整商品加独家工作流，一套守住自由职业项目利润。',
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
