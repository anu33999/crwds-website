import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  Backpack, CheckCircle2, FileCheck2, Flame, Landmark, Laptop, Minus, Package,
  Plus, Scissors, ShoppingBag, Stethoscope, Trash2, type LucideIcon,
} from 'lucide-react'
import { formatINR, images, org, wishlist } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { PageHero, SourceNote } from '../components/Blocks'
import Dialog from '../components/Dialog'
import DonationWidget from '../components/DonationWidget'
import { Button, DemoTag, Eyebrow, Reveal, SafeImage, SectionHeading } from '../components/ui'

const icons: Record<string, LucideIcon> = { scissors: Scissors, package: Package, laptop: Laptop, backpack: Backpack, stethoscope: Stethoscope, trash: Trash2, shopping: ShoppingBag, flame: Flame }

const faqs = [
  { q: 'Is my donation tax-deductible?', a: 'Yes. CRWDS is registered under 80G, and all donations are eligible for tax savings under Section 80G of the Income Tax Act.' },
  { q: 'Can I choose which programme I support?', a: 'Yes. Choose a programme in the donation form, or leave it as “where it’s needed most” so CRWDS can direct it to the most urgent need.' },
  { q: 'Can my company partner with CRWDS?', a: 'CRWDS holds 12A and 80G registration and welcomes CSR partnerships for skills, agriculture, environment and health programmes.' },
  { q: 'Can I donate items instead of money?', a: 'Yes — sewing machines, computers, student kits and other materials are welcome. Contact the team to arrange it.' },
]

export default function Donate() {
  useSeo('Donate', 'Give once, give monthly, or fund a sewing machine, computer course or cookstove. All donations to CRWDS are eligible for 80G tax savings.')
  const [params] = useSearchParams()
  const purpose = params.get('purpose') ?? undefined
  const frequency = params.get('frequency') === 'monthly' ? 'monthly' : 'one-time'

  return (
    <>
      <PageHero
        eyebrow="Donate to CRWDS"
        title="Fund a skill. Grow a livelihood."
        lede="Your donation helps rural women, farmers and young people build income and resilience. All donations are eligible for tax savings under 80G."
      />

      <section id="donation-form" className="container-x scroll-mt-24 pb-20 md:pb-28">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-20">
          <div className="relative z-10 -mt-16 self-start rounded-[22px] border border-line bg-white p-6 shadow-[0_40px_80px_-50px_rgb(19_53_40/0.55)] sm:p-9 md:-mt-24">
            <div className="mb-6 flex items-center justify-between gap-3">
              <h2 className="font-display text-[1.75rem] text-maroon-900">Make your gift</h2>
              <DemoTag>Simulated</DemoTag>
            </div>
            <DonationWidget initialPurpose={purpose} initialFrequency={frequency} />
          </div>

          <div className="pt-4 lg:pt-14">
            <Eyebrow>Where your gift goes</Eyebrow>
            <h2 className="display-md mt-4">Where your gift goes.</h2>
            <p className="mt-5 text-[1.05rem] text-muted">
              Donations support CRWDS’s five programme areas across Warangal, Mahabubabad and beyond.
            </p>
            <ul className="mt-9 space-y-5">
              {[
                ['Women’s livelihoods', 'Tailoring training, sewing machines and the women’s credit cooperative.'],
                ['Sustainable agriculture', 'Water-saving rice and women farmers’ clubs.'],
                ['Youth skills', 'Computer, vocational and mobile-repair training.'],
                ['Health & environment', 'Health camps, clean villages, cloth bags and cookstoves.'],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-rust" aria-hidden />
                  <div>
                    <p className="font-bold">{t}</p>
                    <p className="text-muted">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex gap-4 rounded-[var(--radius-media)] bg-gold-soft/60 p-5">
              <FileCheck2 size={26} className="shrink-0 text-maroon-800" aria-hidden />
              <p className="text-sm">
                <strong className="block text-ink">80G tax benefit</strong>
                <span className="text-muted">All donations to CRWDS are eligible for tax savings under Section 80G.</span>
              </p>
            </div>
            <SafeImage src={images.tailoring} alt="Women at a CRWDS tailoring training" className="mt-10 hidden aspect-[16/9] md:block" />
          </div>
        </div>
      </section>

      <WishList />

      <section className="container-x section-y">
        <SectionHeading eyebrow="Other ways to give" title="Bank transfer, in-kind & CSR" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[var(--radius-media)] border border-line bg-white p-7">
            <Landmark size={26} className="text-rust" strokeWidth={1.7} aria-hidden />
            <h3 className="font-display mt-5 text-xl">Bank transfer</h3>
            <p className="mt-2 text-muted">Transfer to CRWDS’s account as listed on its current site. Full account number to be confirmed with CRWDS.</p>
            <dl className="mt-4 space-y-1 text-sm">
              <div className="flex justify-between gap-4"><dt className="text-muted">Bank</dt><dd className="font-semibold">{org.bank.name}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-muted">Branch</dt><dd className="font-semibold">{org.bank.branch}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-muted">Account</dt><dd className="font-mono">{org.bank.account}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-muted">IFSC</dt><dd className="font-mono">{org.bank.ifsc}</dd></div>
            </dl>
          </div>
          <div className="rounded-[var(--radius-media)] border border-line bg-white p-7">
            <Package size={26} className="text-rust" strokeWidth={1.7} aria-hidden />
            <h3 className="font-display mt-5 text-xl">In-kind donations</h3>
            <p className="mt-2 text-muted">Sewing machines, computers, student kits and training materials are welcome. Call {org.phone} to arrange it.</p>
          </div>
          <div className="rounded-[var(--radius-media)] border border-line bg-white p-7">
            <Landmark size={26} className="text-rust" strokeWidth={1.7} aria-hidden />
            <h3 className="font-display mt-5 text-xl">CSR partnership</h3>
            <p className="mt-2 text-muted">Companies can fund full programmes. CRWDS holds 12A and 80G registration.</p>
          </div>
        </div>
      </section>

      <section className="bg-sand/55 section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Questions" title="Giving, answered" />
          <div className="divide-y divide-maroon-900/15 border-y border-maroon-900/15">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-4 rounded-md text-xl [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-maroon-900/20 text-maroon-800 transition-transform group-open:rotate-45">
                    <Plus size={18} aria-hidden />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */

function WishList() {
  const [cart, setCart] = useState<Record<string, number>>({})
  const [open, setOpen] = useState(false)
  const total = wishlist.reduce((sum, m) => sum + (cart[m.name] ?? 0) * m.price, 0)
  const count = Object.values(cart).reduce((a, b) => a + b, 0)

  const change = (name: string, d: number) =>
    setCart((c) => {
      const n = Math.max(0, Math.min(20, (c[name] ?? 0) + d))
      const next = { ...c, [name]: n }
      if (!n) delete next[name]
      return next
    })

  return (
    <section id="wishlist" className="on-dark scroll-mt-20 bg-maroon-900 text-peach section-y">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Fulfil a need</Eyebrow>
            <h2 className="display-lg mt-4 text-white">Give something specific — and know exactly what it became.</h2>
            <p className="lede mt-5">Pick an item and see exactly what your gift becomes — a machine, a course seat, a cookstove.</p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <DemoTag>Sample items &amp; prices</DemoTag>

          </div>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {wishlist.map((m, i) => {
            const qty = cart[m.name] ?? 0
            const Icon = icons[m.icon] ?? Package
            return (
              <Reveal as="li" key={m.name} delay={(i % 4) * 60} className={`flex flex-col rounded-[var(--radius-media)] bg-maroon-950/50 p-6 ring-1 transition-shadow ${qty ? 'ring-gold' : 'ring-line-dark'}`}>
                <span className={`grid h-14 w-14 place-items-center rounded-[14px] transition-colors ${qty ? 'bg-gold text-maroon-950' : 'bg-white/10 text-gold'}`}>
                  <Icon size={26} strokeWidth={1.7} aria-hidden />
                </span>
                <h3 className="font-display mt-5 text-xl text-white">{m.name}</h3>
                <p className="mt-1 text-sm text-peach/70">{m.detail}</p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  <p className="text-lg font-bold text-gold">{formatINR(m.price)}</p>
                  {qty ? (
                    <div className="flex items-center gap-1" role="group" aria-label={`Quantity of ${m.name}`}>
                      <button type="button" onClick={() => change(m.name, -1)} className="grid h-9 w-9 place-items-center rounded-[8px] border border-peach/30 hover:bg-white/10" aria-label={`Remove one ${m.name}`}>
                        <Minus size={16} aria-hidden />
                      </button>
                      <span className="w-7 text-center font-bold text-white" aria-live="polite">{qty}</span>
                      <button type="button" onClick={() => change(m.name, 1)} className="grid h-9 w-9 place-items-center rounded-[8px] border border-peach/30 hover:bg-white/10" aria-label={`Add one more ${m.name}`}>
                        <Plus size={16} aria-hidden />
                      </button>
                    </div>
                  ) : (
                    <button type="button" onClick={() => change(m.name, 1)} className="btn btn-outline-light btn-sm min-h-[38px]! px-3.5!">
                      <Plus size={15} aria-hidden /> Add <span className="sr-only">{m.name}</span>
                    </button>
                  )}
                </div>
              </Reveal>
            )
          })}
        </ul>

        <div className="sticky bottom-4 z-20 mt-10">
          <div className="flex flex-col gap-4 rounded-[18px] bg-ivory p-4 text-ink shadow-[0_20px_50px_-20px_rgb(0_0_0/0.6)] sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <p aria-live="polite" className="px-1">
              {count ? (
                <>
                  <strong>{count}</strong> item{count > 1 ? 's' : ''} · <strong className="font-display text-xl text-maroon-900">{formatINR(total)}</strong>
                </>
              ) : (
                <span className="text-muted">Add items above to fulfil them.</span>
              )}
            </p>
            <Button variant="primary" disabled={!count} onClick={() => setOpen(true)}>
              Fulfil {count ? formatINR(total) : 'a need'}
            </Button>
          </div>
        </div>
        <SourceNote className="mt-4 text-peach/55!">Items and prices are illustrative — to be confirmed with CRWDS before launch.</SourceNote>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} title="Your gift to CRWDS">
        <ul className="divide-y divide-line">
          {wishlist.filter((m) => cart[m.name]).map((m) => (
            <li key={m.name} className="flex justify-between gap-4 py-3">
              <span>{m.name} × {cart[m.name]}</span>
              <strong>{formatINR(m.price * (cart[m.name] ?? 0))}</strong>
            </li>
          ))}
        </ul>
        <p className="font-display mt-3 flex justify-between border-t-2 border-maroon-900 pt-3 text-2xl text-maroon-900">
          <span>Total</span> <span>{formatINR(total)}</span>
        </p>
        <p className="mt-6 rounded-[var(--radius-ui)] border border-dashed border-gold/70 bg-gold-soft/40 p-4 text-sm text-[#6b4a0d]">
          <strong>Demonstration only.</strong> On the live site, this would continue to a secure checkout, and CRWDS would send an 80G receipt.
        </p>
        <Button variant="primary" block className="mt-5" onClick={() => { setOpen(false); setCart({}) }}>
          Finish demo
        </Button>
      </Dialog>
    </section>
  )
}
