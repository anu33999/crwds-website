import { Link } from 'react-router-dom'
import { ArrowUpRight, Droplets, Zap, Wind, Trash2, ShoppingBag, TreePine, Laptop, Smartphone, Scissors, Users } from 'lucide-react'
import { images, publishedStats, stories } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CtaBand, PageHero, SourceNote } from '../components/Blocks'
import { ButtonLink, CountUp, DemoTag, Eyebrow, Reveal, SafeImage, SectionHeading, Underlined } from '../components/ui'

const reach = [
  { icon: Scissors, value: '30', label: 'women trained in tailoring', note: 'Chinthalapally, Thorrur Mandal' },
  { icon: Laptop, value: '50', label: 'youth trained in computers', note: 'Computer basics, MS Office, DTP' },
  { icon: Smartphone, value: '40', label: 'trainees in mobile repair', note: 'With IRDP Trust, Hyderabad' },
  { icon: Users, value: '350+', label: 'people at one cultural programme', note: 'Nekkonda Mandal' },
  { icon: Trash2, value: '20', label: 'waste-segregation dustbins', note: 'Green & red, for villages' },
  { icon: ShoppingBag, value: '5', label: 'villages receiving Goonj kits', note: 'Thorrur, Rayaparthi, Kothaguda' },
]

const awd = [
  { icon: Droplets, value: 30, label: 'Less irrigation water' },
  { icon: Zap, value: 30, label: 'Less energy for pumping' },
  { icon: Wind, value: 0, label: 'Lower methane, same yield' },
]

export default function Impact() {
  useSeo('Our impact', 'What CRWDS has achieved for women, farmers, youth and the environment across rural Telangana and beyond.')
  const featured = stories.slice(0, 3)
  return (
    <>
      <PageHero
        eyebrow="Our impact"
        title={<>Skills that become <Underlined>livelihoods.</Underlined></>}
        lede="From a tailoring shop in Chinthalapally to paddy fields using a third less water — here is what CRWDS’s work looks like on the ground."
      />

      <section className="container-x pb-20 md:pb-28">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-media)] bg-line lg:grid-cols-4">
          {publishedStats.map((s) => (
            <div key={s.label} className="bg-white p-6 md:p-8">
              <p className="font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-none text-maroon-800">
                <CountUp value={s.value} />
                <span className="text-rust">{s.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-semibold text-muted">{s.label}</p>
            </div>
          ))}
        </div>
        <SourceNote className="mt-3">Figures as published on crwds.1ngo.in.</SourceNote>
      </section>

      {/* Reach grid */}
      <section className="bg-peach/55 section-y">
        <div className="container-x">
          <SectionHeading eyebrow="People reached" title="Numbers from recent programmes" lede="Each figure comes from a specific programme CRWDS has reported on its website." />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reach.map(({ icon: Icon, ...r }, i) => (
              <Reveal as="li" key={r.label} delay={(i % 3) * 70} className="flex gap-5 rounded-[var(--radius-media)] bg-white p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[12px] bg-rust-soft text-rust"><Icon size={22} aria-hidden /></span>
                <div>
                  <p className="font-display text-4xl leading-none text-maroon-800">{r.value}</p>
                  <p className="mt-2 font-semibold text-ink">{r.label}</p>
                  <p className="mt-1 text-sm text-muted">{r.note}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* AWD */}
      <section className="on-dark bg-maroon-900 text-peach section-y">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>Climate-smart rice</Eyebrow>
            <h2 className="display-lg mt-4 text-white">Same harvest. A third less water.</h2>
            <p className="lede mt-5">
              Flooded paddy fields release methane. With Alternate Wetting and Drying, farmers let fields dry for a few days before re-irrigating — cutting water and power use without cutting yields.
            </p>
            <ul className="mt-10 grid grid-cols-3 gap-4">
              {awd.map(({ icon: Icon, ...a }) => (
                <li key={a.label} className="rounded-[var(--radius-media)] border border-line-dark p-5">
                  <Icon size={22} className="text-gold" aria-hidden />
                  <p className="font-display mt-4 text-3xl text-white">{a.value ? `${a.value}%` : '↓ CH₄'}</p>
                  <p className="mt-1 text-xs font-semibold text-peach/70">{a.label}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-peach/55">Programme figures as described by CRWDS for its AWD work with Core CarbonX.</p>
            <div className="mt-8"><ButtonLink to="/programs/sustainable-agriculture" variant="light">About the agriculture program</ButtonLink></div>
          </Reveal>
          <Reveal delay={100}>
            <SafeImage src={images.awdField} alt="A farmer and CRWDS staff inspecting a paddy field" className="blob-a aspect-[5/4]" />
          </Reveal>
        </div>
      </section>

      {/* Mounika */}
      <section className="container-x section-y">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SafeImage src={images.tailoring} alt="Women at a CRWDS tailoring training" className="shape-leaf aspect-[5/4]" />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Before &amp; after</Eyebrow>
            <h2 className="display-lg mt-4">One woman’s training, one family’s income.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[var(--radius-media)] border border-line bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Before</p>
                <p className="mt-3 text-ink">Homemaker, no income of her own. Family below the poverty line on a farm labourer’s wage.</p>
              </div>
              <div className="rounded-[var(--radius-media)] bg-maroon-900 p-6 text-peach">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">After</p>
                <p className="mt-3">Runs a tailoring shop earning ₹8,000–12,000 a month, with orders from Thorrur apparel stores.</p>
              </div>
            </div>
            <div className="mt-8"><ButtonLink to="/stories/mounika-tailoring-shop" variant="secondary" icon="arrow">Read Mounika’s story</ButtonLink></div>
          </Reveal>
        </div>
      </section>

      {/* Environment */}
      <section className="bg-sand/55 section-y">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Environment" title="Cleaner villages, in three states" />
            <span className="flex items-center gap-2 text-sm font-semibold text-muted"><TreePine size={16} className="text-maroon-700" aria-hidden /> Telangana · Andhra Pradesh · Kerala</span>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[images.envMeeting, images.ewasteStudents, images.clothBags].map((src, i) => (
              <SafeImage key={src} src={src} alt={['A village environmental awareness meeting', 'Students at an e-waste seminar', 'Cloth bags distributed at a market'][i]} className="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="container-x section-y">
        <SectionHeading eyebrow="Read more" title="Stories behind the numbers" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <Link to={`/stories/${s.slug}`} className="group flex h-full flex-col rounded-[var(--radius-media)] border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_50px_-36px_rgb(76_22_11/0.5)]">
                <span className="font-display text-5xl leading-none text-gold">“</span>
                <h3 className="display-sm mt-2">{s.title}</h3>
                <p className="mt-4 flex-1 text-muted">{s.excerpt}</p>
                <span className="link-arrow mt-6 self-start">Read the story <ArrowUpRight size={16} aria-hidden /></span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius-media)] bg-peach/60 p-6">
          <p className="font-display text-xl">Annual Report 2024–25</p>
          <div className="flex items-center gap-3">
            <DemoTag>To be uploaded</DemoTag>
            <ButtonLink to="/transparency" variant="secondary" icon="arrow" size="sm">Transparency hub</ButtonLink>
          </div>
        </div>
      </section>

      <div className="pt-4">
        <CtaBand title="The next 30 women are waiting for their chance." />
      </div>
    </>
  )
}
