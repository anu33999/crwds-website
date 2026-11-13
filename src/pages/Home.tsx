import { Link } from 'react-router-dom'
import {
  ArrowUpRight, FileText, HandHeart, Building2, Users, ShieldCheck, Quote, Heart, Sprout, MapPin,
  Scissors, Droplets, CalendarClock, HeartHandshake, Leaf, Landmark, GraduationCap,
} from 'lucide-react'
import { documents, formatINR, images, partners, programs, publishedStats, steps, stories, type Program } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { ContourLines } from '../components/Footer'
import { StoryCard, SourceNote } from '../components/Blocks'
import DonationWidget from '../components/DonationWidget'
import { ButtonLink, CountUp, DemoTag, Eyebrow, Reveal, SafeImage, SectionHeading, TextLink, Underlined } from '../components/ui'

export default function Home() {
  useSeo('', 'Cheyutha Rural Women’s Development Society (CRWDS) empowers rural women, farmers and youth in Warangal and Mahabubabad, Telangana, since 1987.')
  return (
    <>
      <Hero />
      <Stats />
      <Intro />
      <Statement />
      <ProgramsGrid />
      <FeaturedStory />
      <Causes />
      <HowItWorks />
      <Partners />
      <GetInvolvedTeaser />
      <DonateSection />
      <Transparency />
      <LatestStories />
    </>
  )
}

/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="on-dark relative overflow-hidden bg-maroon-900 text-peach">
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden>
        <path d="M640 900 C 760 640, 820 420, 1040 300 C 1210 205, 1330 120, 1440 40 L 1440 900 Z" fill="var(--color-maroon-800)" />
      </svg>
      <ContourLines className="pointer-events-none absolute -bottom-10 -left-28 w-[620px] opacity-[0.2]" stroke="#d9a27a" />

      <div className="container-x relative grid items-center gap-16 pb-20 pt-32 md:pt-44 lg:min-h-[min(100svh,940px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24">
        <div className="max-w-[640px]">
          <p className="font-script animate-fade-in text-[1.7rem] text-gold">Cheyutha — a helping hand</p>
          <h1 className="display-xl mt-4 text-white">
            When a woman rises, <Underlined>a village</Underlined> rises with her.
          </h1>
          <p className="lede mt-7 max-w-[540px]">
            Since 1987, Cheyutha Rural Women’s Development Society has helped women in rural Telangana earn, save and lead — alongside farmers, young people and the land they depend on.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/donate" variant="primary">Donate now</ButtonLink>
            <ButtonLink to="/programs" variant="outline-light" icon="arrow">Explore our work</ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-peach/75">
            <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-gold" aria-hidden /> 80G &amp; 12A registered</li>
            <li className="flex items-center gap-2"><MapPin size={16} className="text-gold" aria-hidden /> 10 mandals · Warangal &amp; Mahabubabad</li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:mr-0">
          <div aria-hidden className="blob-morph absolute inset-[6%_0_4%_6%] bg-rust" />
          <div aria-hidden className="blob-a absolute inset-[0_5%_8%_0] border-2 border-dashed border-gold/50" />
          <SafeImage
            src={images.hero}
            alt="Hundreds of rural women gathered at a CRWDS community meeting"
            eager
            className="blob-c relative mx-auto aspect-[1/0.92] w-[90%] shadow-[0_40px_70px_-35px_rgb(0_0_0/0.7)]"
          />
          <Spark className="absolute -top-5 right-3 w-14 text-gold" />
          <div className="float-y absolute -bottom-6 left-0 w-[34%] sm:-left-3">
            <SafeImage src={images.youthComputers} alt="Young people learning at computers" eager className="aspect-square rounded-full! ring-[6px] ring-maroon-900" />
          </div>
          <div className="absolute -right-1 bottom-[10%] rotate-[-4deg] rounded-[16px] bg-ivory px-5 py-3 shadow-[0_20px_40px_-20px_rgb(0_0_0/0.6)] sm:-right-5">
            <p className="font-script flex items-center gap-2 text-[1.7rem] text-maroon-800">
              <Heart size={20} className="fill-rust text-rust" aria-hidden /> Her skills,
            </p>
            <p className="font-script -mt-1 pl-7 text-[1.7rem] text-rust">her future</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Spark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" className={className} aria-hidden>
      <path d="M14 30 L 6 12" />
      <path d="M28 26 L 40 6" />
      <path d="M36 40 L 54 36" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */

function Stats() {
  const icons = [CalendarClock, MapPin, Scissors, Droplets]
  return (
    <section aria-labelledby="stats-heading" className="on-dark relative z-10 bg-maroon-950 text-peach">
      <h2 id="stats-heading" className="sr-only">CRWDS at a glance</h2>
      <div className="container-x grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4 lg:py-12">
        {publishedStats.map((s, i) => {
          const Icon = icons[i]
          return (
            <Reveal key={s.label} delay={i * 80} className={`flex items-center gap-4 px-2 sm:px-6 ${i ? 'lg:border-l lg:border-line-dark' : ''}`}>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-rust text-white">
                <Icon size={24} strokeWidth={1.8} aria-hidden />
              </span>
              <span>
                <span className="font-display block text-[clamp(1.9rem,3.2vw,2.6rem)] leading-none text-white">
                  <CountUp value={s.value} />
                  <span className="text-gold">{s.suffix}</span>
                </span>
                <span className="mt-1.5 block text-[0.85rem] font-semibold leading-snug text-peach/75">{s.label}</span>
              </span>
            </Reveal>
          )
        })}
      </div>
      <p className="container-x pb-4 text-[0.7rem] text-peach/45">Figures as published on crwds.1ngo.in — to be verified by the CRWDS team before launch.</p>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Intro() {
  const pillars = [
    { icon: HeartHandshake, title: 'Women’s empowerment', text: 'Self-help groups, skills and a women’s credit cooperative.' },
    { icon: Sprout, title: 'Agriculture', text: 'Water-saving rice, women farmers’ clubs and animal husbandry.' },
    { icon: Leaf, title: 'Environment', text: 'Clean villages, trees, cloth bags and e-waste awareness.' },
    { icon: GraduationCap, title: 'Youth skills', text: 'Computer, vocational and mobile-repair training for jobs.' },
  ]
  return (
    <section className="container-x section-y">
      <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal>
          <Eyebrow>About CRWDS</Eyebrow>
          <h2 className="display-lg mt-4">
            Seven visionaries. <em className="font-display italic text-rust">Nearly four decades in the same villages.</em>
          </h2>
          <div className="mt-7 space-y-5 text-[1.05rem] text-muted">
            <p>
              CRWDS was founded in 1987 by seven people from different walks of life who were already active in public welfare. It is registered under the Public Societies Act.
            </p>
            <p>
              From the start it has worked with marginalised communities in 10 mandals across Warangal and Mahabubabad districts — on women’s empowerment, farming, the environment and livelihoods.
            </p>
          </div>
          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li key={title} className="group rounded-[14px] border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-rust/30 hover:shadow-[0_18px_36px_-26px_rgb(76_22_11/0.45)]">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-rust-soft text-rust transition-colors group-hover:bg-rust group-hover:text-white">
                    <Icon size={18} strokeWidth={2} aria-hidden />
                  </span>
                  <h3 className="font-sans text-[0.98rem] font-bold tracking-normal">{title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted">{text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <ButtonLink to="/about" variant="secondary" icon="arrow">Read our story</ButtonLink>
            <p className="text-sm text-muted">Founded by <strong className="text-ink">Musipatla Yakaiah</strong> &amp; six others</p>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative mx-auto w-full max-w-[540px]">
          <div aria-hidden className="blob-b absolute inset-[6%_-2%_0_6%] bg-gold-soft" />
          <div aria-hidden className="absolute -left-2 top-6 h-5 w-5 rounded-full bg-rust" />
          <div aria-hidden className="absolute right-6 top-0 h-3 w-3 rounded-full bg-maroon-700" />
          <div aria-hidden className="absolute bottom-10 right-0 h-8 w-8 rounded-full border-[3px] border-gold" />
          <SafeImage src={images.riceField} alt="Farmers and CRWDS staff in a green paddy field" className="blob-a relative aspect-[1/1.02]" />
          <div className="absolute -bottom-6 left-2 rounded-[16px] bg-white px-5 py-4 shadow-[0_24px_48px_-24px_rgb(76_22_11/0.5)] sm:left-[-1.5rem]">
            <p className="font-display text-4xl leading-none text-maroon-800">1987</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">Founded in Telangana</p>
          </div>
          <p className="font-script absolute -top-8 right-4 rotate-[5deg] text-[1.9rem] text-rust">rooted locally ♥</p>
        </Reveal>
      </div>
    </section>
  )
}

function Statement() {
  return (
    <section className="container-x pb-24 md:pb-32">
      <Reveal>
        <p className="font-display max-w-[980px] text-[clamp(1.7rem,3.4vw,2.85rem)] leading-[1.22] text-ink">
          Our vision: to create an impact on poverty <span className="text-maroon-700">by increasing access to financial services for the marginalised</span> — and the skills to turn them into a livelihood.
        </p>
      </Reveal>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function ProgramsGrid() {
  const [first, ...rest] = programs
  return (
    <section className="bg-peach/55 section-y">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Our programs" title={<>An integrated approach to an <br className="hidden md:block" />equitable, empowered society.</>} />
          <ButtonLink to="/programs" variant="secondary" icon="arrow" className="self-start md:self-auto">All programs</ButtonLink>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-7">
          <Reveal className="lg:col-span-5 lg:row-span-2">
            <ProgramFeature p={first} />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 80}>
                <ProgramTile p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProgramFeature({ p }: { p: Program }) {
  return (
    <article className="on-dark group relative flex h-full flex-col overflow-hidden rounded-[22px] bg-maroon-900 text-peach">
      <SafeImage src={p.image} alt={p.imageAlt} className="media-zoom aspect-[16/10] rounded-none!" />
      <div className="flex flex-1 flex-col p-7 md:p-8">
        <span className="font-script text-[1.6rem] text-gold">At the heart of our work</span>
        <h3 className="display-md mt-1 text-white">
          <Link to={`/programs/${p.slug}`} className="after:absolute after:inset-0">{p.title}</Link>
        </h3>
        <p className="mt-3 text-peach/80">{p.short}</p>
        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line-dark pt-6">
          <div>
            <p className="font-display text-3xl text-white">30</p>
            <p className="text-xs font-semibold text-peach/65">women trained as tailors</p>
          </div>
          <div>
            <p className="font-display text-3xl text-white">₹8–12k</p>
            <p className="text-xs font-semibold text-peach/65">monthly earnings reported by a graduate</p>
          </div>
        </div>
        <span className="link-arrow mt-auto self-start pt-6" aria-hidden>Explore the program <ArrowUpRight size={16} /></span>
      </div>
    </article>
  )
}

function ProgramTile({ p }: { p: Program }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[18px] bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-28px_rgb(76_22_11/0.45)]">
      <SafeImage src={p.image} alt={p.imageAlt} className="media-zoom aspect-[16/9] rounded-none!" />
      <div className="flex flex-1 flex-col p-5">
        <span className="font-display text-sm text-rust">{p.number}</span>
        <h3 className="font-display text-[1.3rem] leading-tight">
          <Link to={`/programs/${p.slug}`} className="after:absolute after:inset-0">{p.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-[0.9rem] leading-snug text-muted">{p.short}</p>
        <span className="mt-auto flex items-center gap-1 pt-3 text-[0.85rem] font-bold text-maroon-800 group-hover:text-rust" aria-hidden>
          Learn more <ArrowUpRight size={14} />
        </span>
      </div>
    </article>
  )
}

/* ------------------------------------------------------------------ */

function FeaturedStory() {
  const story = stories[0]
  return (
    <section className="on-dark relative overflow-hidden bg-maroon-950 text-peach">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[380px] lg:min-h-[640px]">
          <SafeImage src={images.tailoring} alt="Women at a CRWDS tailoring training programme" className="absolute! inset-0 rounded-none!" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-maroon-950/40" />
        </div>
        <div className="relative flex items-center px-5 py-16 sm:px-10 md:px-16 lg:py-24">
          <ContourLines className="pointer-events-none absolute -right-28 bottom-0 w-[460px] opacity-[0.12]" />
          <Reveal className="relative max-w-xl">
            <Eyebrow>Case study · NABARD-MEDP</Eyebrow>
            <Quote size={36} className="mt-8 text-gold" aria-hidden />
            <h2 className="display-lg mt-4 text-white">{story.title}</h2>
            <p className="lede mt-6">
              Mounika, 26, was a homemaker in Chinthalapally village with no way to earn. After 15 days of CRWDS tailoring training, she opened her own shop — and now takes orders from apparel stores in Thorrur town.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-line-dark py-6">
              {[['15', 'days of training'], ['₹8–12k', 'earned per month'], ['30', 'women in her batch']].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-2xl text-white sm:text-3xl">{n}</p>
                  <p className="text-xs font-semibold text-peach/65">{l}</p>
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to={`/stories/${story.slug}`} variant="light">Read her story</ButtonLink>
              <ButtonLink to="/programs/women-empowerment" variant="outline-light" icon="arrow">Women’s programs</ButtonLink>
            </div>
            <p className="mt-6 text-xs text-peach/55">Case study as published by CRWDS. The photograph shows a CRWDS tailoring class.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Causes() {
  const causes = [
    { icon: Scissors, title: 'Sewing machines for 30 women', text: 'Help the next tailoring batch start earning from day one with a machine of their own.', image: images.womenHall, raised: 135000, goal: 225000 },
    { icon: Sprout, title: 'Water-saving rice for farmers', text: 'Train more paddy farmers in Alternate Wetting and Drying — 30% less water and power.', image: images.cherlapalem, raised: 82000, goal: 200000 },
    { icon: Leaf, title: 'Plastic-free village markets', text: 'Cloth bags, segregation bins and awareness drives for weekly markets.', image: images.clothBags, raised: 41000, goal: 80000 },
  ]
  return (
    <section className="relative overflow-hidden section-y">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-script text-[1.7rem] text-rust">Donate to</p>
            <h2 className="display-lg mt-1">Causes that need your support</h2>
            <p className="lede mt-4">Choose a cause close to your heart. Every donation is eligible for 80G tax savings.</p>
          </div>
          <DemoTag>Sample campaigns &amp; progress</DemoTag>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {causes.map(({ icon: Icon, ...c }, i) => {
            const pct = Math.round((c.raised / c.goal) * 100)
            return (
              <Reveal as="article" key={c.title} delay={i * 90} className="group relative flex flex-col overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_24px_50px_-36px_rgb(76_22_11/0.45)] transition-transform duration-300 hover:-translate-y-1">
                <div className="relative">
                  <SafeImage src={c.image} alt="" className="media-zoom aspect-[16/10] rounded-none!" />
                  <span className="absolute -bottom-6 left-6 grid h-12 w-12 place-items-center rounded-[14px] bg-rust text-white shadow-lg">
                    <Icon size={22} strokeWidth={1.9} aria-hidden />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 pt-10">
                  <h3 className="display-sm">{c.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-muted">{c.text}</p>
                  <div className="mt-6">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-maroon-800">{pct}% funded</span>
                      <span className="text-muted">Goal {formatINR(c.goal)}</span>
                    </div>
                    <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-sand" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${c.title}: ${pct}% funded (sample)`}>
                      <div className="h-full rounded-full bg-gradient-to-r from-gold to-rust" style={{ width: `${pct}%` }} />
                    </div>
                    <p className="mt-2 text-xs text-muted">{formatINR(c.raised)} raised</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
                    <ButtonLink to="/donate" variant="primary" size="sm">Donate</ButtonLink>
                    <TextLink to="/programs">Learn more</TextLink>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function HowItWorks() {
  return (
    <section className="bg-sand/50 section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="How change happens"
          title="Community-based institutions that keep working long after we leave."
          lede="Our mission is to promote sustainable community institutions and employable skills — so progress doesn’t depend on any one project."
        />
        <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div aria-hidden className="absolute left-0 right-0 top-[27px] hidden h-px bg-[repeating-linear-gradient(90deg,var(--color-line)_0_8px,transparent_8px_14px)] lg:block" />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 110} className="relative">
              <span className={`font-display relative grid h-14 w-14 place-items-center rounded-full border-[1.5px] text-xl ${i === 3 ? 'border-rust bg-rust text-white' : 'border-maroon-800 bg-ivory text-maroon-800'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="display-sm mt-6">{s.title}</h3>
              <p className="mt-3 text-muted">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section className="container-x py-16 md:py-20">
      <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-muted">Programmes delivered with</p>
      <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4">
        {partners.map((p) => (
          <li key={p} className="font-display text-[1.15rem] text-maroon-800/80">{p}</li>
        ))}
      </ul>
      <p className="mt-6 text-center text-xs text-muted">Partners as named on crwds.1ngo.in. Logos can be added with each partner’s permission.</p>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function GetInvolvedTeaser() {
  const paths = [
    { icon: Users, title: 'Volunteer with us', text: 'Teach computer skills, support women’s groups, or join an environmental drive in the villages.', cta: 'Volunteer', to: '/get-involved#volunteer' },
    { icon: Building2, title: 'Partner through CSR', text: 'Fund skills batches, sustainable agriculture or climate campaigns — with 80G and 12A in place.', cta: 'Explore partnerships', to: '/get-involved#partner' },
    { icon: HandHeart, title: 'Donate', text: 'Give once, give monthly, or fund something specific like a sewing machine or a clean cookstove.', cta: 'Ways to give', to: '/donate' },
  ]
  return (
    <section className="bg-gold-soft/45 section-y">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="Get involved"
            title={<>Lend a hand — <em className="italic text-maroon-700">that’s what Cheyutha means.</em></>}
            lede="Volunteers, companies and donors have helped CRWDS reach more villages. There’s a place for you."
          />
          <SafeImage src={images.team} alt="CRWDS field team and volunteers in Mahabubabad" className="blob-c mt-10 aspect-[16/11]" />
        </Reveal>
        <ul className="flex flex-col justify-center divide-y divide-maroon-900/15 border-y border-maroon-900/15">
          {paths.map(({ icon: Icon, ...p }, i) => (
            <Reveal as="li" key={p.title} delay={i * 90} className="group grid gap-5 py-9 sm:grid-cols-[auto_1fr_auto] sm:items-center">
              <span className="grid h-14 w-14 place-items-center rounded-[14px] bg-ivory text-rust transition-colors group-hover:bg-rust group-hover:text-white">
                <Icon size={24} strokeWidth={1.8} aria-hidden />
              </span>
              <div>
                <h3 className="display-sm">{p.title}</h3>
                <p className="mt-2 max-w-md text-muted">{p.text}</p>
              </div>
              <ButtonLink to={p.to} variant={i === 2 ? 'primary' : 'secondary'} size="sm" icon="arrow" className="justify-self-start">
                {p.cta}
              </ButtonLink>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function DonateSection() {
  const uses = [
    { label: 'Women’s livelihoods', note: 'Tailoring training, machines and access to credit' },
    { label: 'Sustainable farming', note: 'Water-saving rice and women farmers’ clubs' },
    { label: 'Youth skills', note: 'Computer, vocational and repair courses' },
    { label: 'Health & environment', note: 'Health camps, clean villages and cookstoves' },
  ]
  return (
    <section id="donate" className="on-dark relative overflow-hidden bg-maroon-900 text-peach">
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden>
        <path d="M0 0 L 620 0 C 520 260, 420 560, 0 760 Z" fill="var(--color-maroon-800)" />
      </svg>
      <div className="container-x section-y relative grid gap-14 lg:grid-cols-[1fr_minmax(0,500px)] lg:gap-20">
        <Reveal>
          <Eyebrow>Give today</Eyebrow>
          <h2 className="display-lg mt-4 text-white">
            Help a woman <Underlined>start earning.</Underlined>
          </h2>
          <p className="lede mt-6 max-w-lg">
            A small gift can fund training, a machine or a market stall — and the income that follows changes a whole household.
          </p>
          <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {uses.map((u) => (
              <li key={u.label} className="border-t border-line-dark pt-4">
                <p className="font-bold text-white">{u.label}</p>
                <p className="mt-1 text-sm text-peach/70">{u.note}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-4 rounded-[var(--radius-media)] border border-line-dark p-5">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-[12px] bg-gold text-maroon-950">
              <Landmark size={26} aria-hidden />
            </span>
            <div className="min-w-[12rem] flex-1">
              <p className="font-bold text-white">80G tax benefit</p>
              <p className="text-sm text-peach/70">All donations to CRWDS are eligible for tax savings under Section 80G.</p>
            </div>
            <TextLink to="/donate#wishlist">Fund an item</TextLink>
          </div>
        </Reveal>

        <Reveal delay={120} className="rounded-[22px] border border-line-dark bg-maroon-950/50 p-6 shadow-[0_40px_80px_-40px_rgb(0_0_0/0.6)] backdrop-blur-sm sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h3 className="font-display text-2xl text-white">Make a gift</h3>
            <DemoTag>Simulated</DemoTag>
          </div>
          <DonationWidget tone="dark" />
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Transparency() {
  return (
    <section className="container-x section-y">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="Transparency"
            title="Registered, certified, accountable."
            lede="CRWDS is registered under the Public Societies Act and holds 12A and 80G certifications. Reports and statements live in one place."
          />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink to="/transparency" variant="secondary" icon="arrow">Visit the transparency hub</ButtonLink>
            <span className="flex items-center gap-2 text-sm font-semibold text-muted"><ShieldCheck size={16} className="text-maroon-700" aria-hidden /> 80G · 12A</span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ul className="divide-y divide-line border-y border-line">
            {documents.slice(0, 5).map((d) => (
              <li key={d.title}>
                <Link to="/transparency#documents" className="group flex items-center gap-5 py-5 transition-colors hover:bg-peach/40 sm:px-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-peach text-maroon-800">
                    <FileText size={20} strokeWidth={1.8} aria-hidden />
                  </span>
                  <span className="flex-1">
                    <span className="block font-bold text-ink">{d.title}</span>
                    <span className="text-sm text-muted">{d.type}</span>
                  </span>
                  {d.href ? (
                    <span className="hidden text-xs font-bold uppercase tracking-[0.08em] text-maroon-700 sm:inline">Available</span>
                  ) : (
                    <DemoTag className="hidden sm:inline-flex">Sample</DemoTag>
                  )}
                  <ArrowUpRight size={18} className="text-maroon-800 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <SourceNote className="mt-3">80G and 12A certificates link to the copies on CRWDS’s current site. Other entries are placeholders.</SourceNote>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function LatestStories() {
  const picks = [stories[1], stories[5], stories[6]]
  return (
    <section className="border-t border-line bg-white/50 section-y">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Stories & updates" title="News from the field" />
          <TextLink to="/stories">All stories</TextLink>
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-8">
          {picks.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90} className={i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <StoryCard story={s} large={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
