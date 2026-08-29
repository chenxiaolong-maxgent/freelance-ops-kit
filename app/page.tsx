'use client';

import { ArrowRight, Check, FileCheck2, FolderKanban, Gauge, PackageCheck, ReceiptText, ShieldCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';

const PRODUCTS = [
  {
    step: '01',
    title: '先把价格和边界写清楚',
    product: '报价匠 PRO',
    detail: '6 个行业的 Word 报价模板，写清交付、付款、验收和合作边界。',
    icon: ReceiptText,
  },
  {
    step: '02',
    title: '临时加需求，先确认再开工',
    product: 'ScopeGuard PRO',
    detail: '3 个行业的需求变更单，把新增范围、费用与时间影响留成记录。',
    icon: FileCheck2,
  },
  {
    step: '03',
    title: '开票以后，盯到钱真正到账',
    product: 'CashRadar PRO',
    detail: 'Excel 回款系统，追踪应收、逾期、现金流与催款动作。',
    icon: Gauge,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/75 bg-background/92 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[0_8px_24px_rgba(22,40,59,0.18)]">
              <FolderKanban className="size-4.5" />
            </span>
            <span>接单经营全家桶 <span className="hidden font-normal text-muted-foreground sm:inline">Freelance Ops Kit</span></span>
          </a>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground lg:flex">
              <ShieldCheck className="size-3.5 text-primary" /> 一次购买 · 同团队商业使用
            </span>
            <Button size="sm" onClick={() => window.open('https://github.com/chenxiaolong-maxgent/freelance-ops-kit/issues/1', '_blank', 'noopener,noreferrer')}>¥69 早鸟登记</Button>
          </div>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-[1400px] px-5 py-8 lg:px-8 lg:py-12">
        <div className="grid overflow-hidden rounded-[30px] border border-border bg-card shadow-[0_28px_85px_rgba(24,39,52,0.09)] lg:grid-cols-[1.02fr_0.98fr]">
          <div className="p-6 sm:p-10 lg:p-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/14 px-3 py-1 text-xs font-bold text-accent-foreground">
              <PackageCheck className="size-3.5" /> 3 个完整商品 + 独家成交回款工作流
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">别让项目在报价、加需求和回款三个地方漏钱。</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">从第一次报价到尾款到账，一套覆盖自由职业项目完整经营链路的可编辑工具包。不是零散模板，而是一条可以照着执行的工作流。</p>

            <ul className="mt-7 grid gap-3 text-sm sm:grid-cols-2">
              <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> 9 份 Word 行业模板</li>
              <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> 1 套 Excel 回款系统</li>
              <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> 12 套催款沟通话术</li>
              <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> 7 天落地工作流指南</li>
            </ul>

            <div className="mt-9 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center">
              <div><p className="text-xs text-muted-foreground">首批 20 份早鸟价</p><div className="mt-1 flex items-end gap-3"><span className="text-5xl font-semibold tracking-[-0.05em] text-primary">¥69</span><span className="pb-1 text-sm text-muted-foreground line-through">单买合计 ¥77</span></div></div>
              <Button size="lg" className="h-12 px-6 sm:ml-auto" onClick={() => document.querySelector('#bundle')?.scrollIntoView({ behavior: 'smooth' })}>
                查看完整内容 <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          <div className="ops-grid relative bg-[#18293b] p-6 text-[#f8f2e6] sm:p-9 lg:p-12">
            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f3a35c]">Money leak control</p><p className="mt-2 text-sm text-[#b8c5cf]">一条工作流，守住三道利润关口</p></div>
                <span className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs text-[#d9e1e6]">01 → 02 → 03</span>
              </div>

              <div className="space-y-4">
                {PRODUCTS.map(({ step, title, product, detail, icon: Icon }) => (
                  <article className="grid grid-cols-[44px_1fr] gap-4 rounded-2xl border border-white/10 bg-white/6 p-4 sm:p-5" key={step}>
                    <div className="grid size-11 place-items-center rounded-xl bg-[#f3a35c] text-[#18293b]"><Icon className="size-5" /></div>
                    <div><div className="flex flex-wrap items-center gap-x-3 gap-y-1"><span className="text-xs font-bold text-[#f3a35c]">{step}</span><p className="font-semibold">{title}</p></div><p className="mt-1 text-xs font-medium text-[#d8e2e8]">{product}</p><p className="mt-2 text-xs leading-5 text-[#9fb0bc]">{detail}</p></div>
                  </article>
                ))}
              </div>

              <p className="mt-6 rounded-2xl border border-[#f3a35c]/25 bg-[#f3a35c]/10 px-4 py-3 text-xs leading-5 text-[#edd4bd]">附带“成交回款工作流”：文件夹结构、触发条件、每周复盘和 7 天落地清单都已写好。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="bundle" className="mx-auto max-w-[1400px] px-5 pb-12 lg:px-8 lg:pb-16">
        <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">What is inside</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">买到的是三个完整商品，不是阉割版。</h2></div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">每个子产品都保留原说明、授权、字体或模板文件。组合包额外提供一份把三套工具串起来的工作流。</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {PRODUCTS.map(({ step, product, detail, icon: Icon }, index) => (
            <article className="rounded-[24px] border border-border bg-card p-6" key={step}>
              <div className="flex items-center justify-between"><span className="grid size-11 place-items-center rounded-xl bg-secondary text-secondary-foreground"><Icon className="size-5" /></span><span className="text-xs font-bold text-muted-foreground">商品 {step}</span></div>
              <h3 className="mt-5 text-xl font-semibold">{product}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">{detail}</p>
              <ul className="mt-5 space-y-2.5 border-t border-border pt-5 text-sm">
                {index === 0 && <><li className="flex gap-2"><Check className="mt-0.5 size-4 text-primary" /> 6 个行业 · 12 页模板</li><li className="flex gap-2"><Check className="mt-0.5 size-4 text-primary" /> 付款、验收与合作边界</li></>}
                {index === 1 && <><li className="flex gap-2"><Check className="mt-0.5 size-4 text-primary" /> 3 个行业 · 6 页模板</li><li className="flex gap-2"><Check className="mt-0.5 size-4 text-primary" /> 新增范围、费用与工期影响</li></>}
                {index === 2 && <><li className="flex gap-2"><Check className="mt-0.5 size-4 text-primary" /> 6 张工作表 · 100 行台账</li><li className="flex gap-2"><Check className="mt-0.5 size-4 text-primary" /> 8 个指标 · 12 套催款话术</li></>}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-[#e9ede3]">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-16">
          <figure className="overflow-hidden rounded-[24px] border border-primary/15 bg-[#18293b] shadow-[0_24px_65px_rgba(26,40,53,0.16)]">
            <img src="og.png" alt="接单经营全家桶：报价、变更、回款" className="h-auto w-full" loading="lazy" />
            <figcaption className="border-t border-white/8 bg-[#18293b] px-5 py-3 text-center text-xs text-[#aebbc5]">完整交付包约 54 MB · 付费源文件不会公开下载</figcaption>
          </figure>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Exclusive workflow</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">额外的一份指南，告诉你什么时候用哪一个。</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">《成交回款工作流》不是产品目录，而是一条从底价测算、发报价、确认变更到追踪回款的操作顺序。</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-card p-4"><p className="font-semibold">触发条件</p><p className="mt-1 text-xs leading-5 text-muted-foreground">什么时候应该发变更单，什么时候开始催款。</p></div>
              <div className="rounded-2xl bg-card p-4"><p className="font-semibold">文件结构</p><p className="mt-1 text-xs leading-5 text-muted-foreground">报价、素材、交付、变更、发票各归其位。</p></div>
              <div className="rounded-2xl bg-card p-4"><p className="font-semibold">每周复盘</p><p className="mt-1 text-xs leading-5 text-muted-foreground">20 分钟检查底价、范围、逾期和现金到账。</p></div>
              <div className="rounded-2xl bg-card p-4"><p className="font-semibold">7 天落地</p><p className="mt-1 text-xs leading-5 text-muted-foreground">每天完成一个动作，把工具真正放进项目。</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Best fit</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">适合正在靠项目收入生活的人。</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">如果你已经有报价、合同或财务系统，而且执行稳定，这套工具不是必需品。它最适合还在用聊天记录、临时表格和记忆管理项目的人。</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-primary/15 bg-primary/5 p-5"><p className="font-semibold text-primary">适合</p><ul className="mt-4 space-y-2.5 text-sm"><li className="flex gap-2"><Check className="mt-0.5 size-4 text-primary" /> 自由职业者与独立顾问</li><li className="flex gap-2"><Check className="mt-0.5 size-4 text-primary" /> 2–10 人服务型工作室</li><li className="flex gap-2"><Check className="mt-0.5 size-4 text-primary" /> 经常被加需求或拖尾款</li></ul></div>
            <div className="rounded-2xl border border-border bg-muted/40 p-5"><p className="font-semibold">不太适合</p><ul className="mt-4 space-y-2.5 text-sm text-muted-foreground"><li>· 只销售标准化实物商品</li><li>· 已有成熟 ERP、CRM 与法务流程</li><li>· 希望模板替代法律或财税意见</li></ul></div>
          </div>
        </div>
      </section>

      <section className="bg-[#18293b] text-[#f8f2e6]">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-12 lg:grid-cols-[1fr_460px] lg:items-center lg:px-8 lg:py-16">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f3a35c]">Early bird bundle</p><h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">用一顿饭的钱，把三处漏钱点都补上。</h2><p className="mt-4 max-w-2xl text-sm leading-6 text-[#afbdc7]">报价匠 PRO ¥29 + ScopeGuard PRO ¥19 + CashRadar PRO ¥29，单买早鸟合计 ¥77。组合包 ¥69，并额外包含独家工作流。</p></div>
          <div className="rounded-[26px] border border-white/12 bg-white/7 p-6 sm:p-7">
            <div className="flex items-end justify-between"><div><p className="text-sm text-[#c3ced6]">首批 20 份</p><p className="mt-1 text-5xl font-semibold tracking-[-0.05em]">¥69</p></div><span className="rounded-full bg-[#f3a35c] px-3 py-1 text-xs font-bold text-[#18293b]">省 ¥8 + 独家指南</span></div>
            <Button size="lg" className="mt-6 h-12 w-full bg-[#f3a35c] text-base text-[#18293b] hover:bg-[#ffc188]" onClick={() => window.open('https://github.com/chenxiaolong-maxgent/freelance-ops-kit/issues/1', '_blank', 'noopener,noreferrer')}>
              登记 ¥69 全家桶 <ArrowRight className="size-4" />
            </Button>
            <p className="mt-3 text-center text-xs leading-5 text-[#9fafbb]">登记不自动扣款；确认收款方式后交付完整 ZIP</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-5 py-12 lg:px-8 lg:py-16">
        <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-primary">FAQ</p>
        <h2 className="mt-3 text-center text-3xl font-semibold tracking-[-0.04em]">购买前常见问题</h2>
        <div className="mt-8 divide-y divide-border rounded-[24px] border border-border bg-card px-5 sm:px-7">
          <div className="py-5"><h3 className="font-semibold">文件可以编辑吗？</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">可以。报价单和变更单是 Word 源文件，回款系统是 Excel 源文件；可修改文字、颜色和字段。</p></div>
          <div className="py-5"><h3 className="font-semibold">可以给团队使用吗？</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">可以用于购买者本人或同一团队的商业项目，但不能公开分享、转售或作为模板产品重新分发。</p></div>
          <div className="py-5"><h3 className="font-semibold">Google Docs 和 Sheets 能打开吗？</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">可以导入，但复杂版式、原生图表或条件格式可能出现轻微差异，优先推荐 Microsoft Word 与 Excel。</p></div>
          <div className="py-5"><h3 className="font-semibold">登记后会自动扣款吗？</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">不会。登记页只收集购买意向；双方确认交付方式和收款方式后再完成交易。</p></div>
        </div>
      </section>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-3 px-5 py-7 text-xs text-muted-foreground sm:flex-row lg:px-8"><p>© 2026 接单经营全家桶 Freelance Ops Kit</p><p>经营工具不替代法律、税务、会计或投资建议</p></div>
      </footer>
    </main>
  );
}
