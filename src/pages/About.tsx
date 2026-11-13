import { board, images, org, publishedStats, staff, values } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CtaBand, PageHero, SourceNote } from '../components/Blocks'
import { ButtonLink, Eyebrow, Reveal, SafeImage, SectionHeading, Underlined } from '../components/ui'

const timeline = [
  { year: '1987', text: 'Seven visionaries engaged in public welfare found Cheyutha Rural Women’s Development Society, registered under the Public Societies Act.' },
  { year: 'Early years', text: 'Work begins in 10 mandals of Warangal and Mahabubabad: women’s empowerment, women farmers’ clubs, agriculture, horticulture and animal husbandry.' },
  { year: '2020', text: 'Vasundhara Mahila Credit Cooperative Society is established on 20 October, giving women members access to credit.' },
  { year: '2022–24', text: 'Health camps, tailoring training with NABARD, and water-saving rice programmes with farmers in Mahabubabad, Warangal and Mulugu.' },
  { year: '2026', text: 'E-waste awareness campaigns reach schools and communities in Andhra Pradesh and Kerala, alongside mobile-repair training in Hyderabad.' },
]

const initials = (n: string) => n.split(' ').filter((w) => /^[A-Z]/.test(w) && w.length > 1).slice(-2).map((w) => w[0]).join('')

export default function About() {
  useSeo('About us', 'Founded in 1987 by seven visionaries, CRWDS works with women, farmers and youth in 10 mandals across Warangal and Mahabubabad, Telangana.')
  return (
    <>
      <PageHero
        eyebrow="About Cheyutha"
        title={<>Nearly four decades of <Underlined>helping hands.</Underlined></>}
        lede="Cheyutha means “helping hand”. Since 1987, CRWDS has helped marginalised women and families in rural Telangana build better lives — on their own terms."
        image={images.womenHall}
        imageAlt="A hall full of women at a CRWDS community meeting"
      />

      <section className="container-x section-y">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="display-lg mt-4">Founded by seven people who had already spent their lives serving others.</h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-[1.05rem] text-muted">
            <p>
              Cheyutha Rural Women’s Development Society is a non-profit organisation registered under the Public Societies Act, established in 1987. It was promoted by seven visionaries from different walks of life, all actively engaged in public welfare.
            </p>
            <p>
              Right from its inception, CRWDS has focused on women’s empowerment, environmental awareness, women farmers’ clubs, agriculture, animal husbandry, horticulture and farmer development.
            </p>
            <p>
              Its work reaches marginalised communities in 10 mandals across Warangal and Mahabubabad districts — and, more recently, schools and communities in Andhra Pradesh and Kerala.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-media)] bg-line lg:grid-cols-4">
          {publishedStats.map((s) => (
            <div key={s.label} className="bg-ivory p-6 md:p-8">
              <p className="font-display text-[clamp(2.2rem,4vw,3.2rem)] leading-none text-maroon-800">
                {s.value}
                <span className="text-rust">{s.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-semibold text-muted">{s.label}</p>
            </div>
          ))}
        </div>
        <SourceNote className="mt-3">Figures as published on crwds.1ngo.in — to be verified before launch.</SourceNote>
      </section>

      <section className="bg-peach/55 section-y">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <SafeImage src={images.shgMeeting} alt="A woman leading a self-help group meeting" className="shape-leaf aspect-[5/4]" />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Vision</Eyebrow>
            <p className="font-display mt-4 text-[clamp(1.5rem,2.6vw,2.1rem)] leading-snug text-ink">
              Create an impact on poverty by increasing access to financial services for the marginalised.
            </p>
            <hr className="rule my-9" />
            <Eyebrow>Mission</Eyebrow>
            <ul className="mt-4 space-y-3 text-[1.05rem] text-muted">
              <li className="flex gap-3"><span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-rust" />Promote sustainable community-based institutions that reach the unreached with suitable financial services, consistently and sustainably.</li>
              <li className="flex gap-3"><span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-rust" />Impart employable skills to rural and urban communities so they can take up income-generating activities.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-x section-y">
        <SectionHeading eyebrow="What we stand for" title="The values behind our work" />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80} className="border-t-2 border-maroon-800 pt-6">
              <span className="font-display text-sm text-rust">0{i + 1}</span>
              <h3 className="display-sm mt-2">{v.title}</h3>
              <p className="mt-3 text-muted">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="on-dark bg-maroon-900 text-peach section-y">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Milestones</Eyebrow>
            <h2 className="display-lg mt-4 text-white">From seven founders to three states.</h2>
            <SafeImage src={images.culture} alt="A mythological drama staged by CRWDS for the community" className="mt-10 hidden aspect-[16/10] lg:block" />
          </div>
          <ol className="relative border-l border-line-dark">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 70} className="relative pb-10 pl-9 last:pb-0">
                <span aria-hidden className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-gold bg-maroon-900" />
                <p className="font-display text-3xl text-gold">{t.year}</p>
                <p className="mt-2 max-w-lg text-peach/85">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x section-y">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Beyond programmes"
              title="Culture, training and readiness."
              lede="CRWDS also brings communities together through culture and builds its own team’s capacity."
            />
            <ul className="mt-9 space-y-4">
              {[
                'A mythological drama on Maya Sabha in Nekkonda Mandal drew more than 350 people.',
                'Drama plays, folk dance, Chekka Bajana and Kolattam celebrate local traditions.',
                'Staff completed three days of basic disaster-management training at MSHRD, Hyderabad.',
                'Field staff receive regular capacity-building training in Mahabubabad.',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[1.02rem]">
                  <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-rust" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/programs">See our programs</ButtonLink>
              <ButtonLink to="/transparency" variant="secondary" icon="arrow">Transparency</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={100} className="grid grid-cols-2 gap-4 self-center">
            <SafeImage src={images.training} alt="CRWDS staff at a disaster-management training" className="aspect-[3/4]" />
            <SafeImage src={images.communityMeeting} alt="Villagers at a CRWDS community meeting" className="mt-12 aspect-[3/4]" />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand/55 section-y">
        <div className="container-x">
          <SectionHeading eyebrow="Leadership" title="Board & team" />
          <h3 className="mt-12 font-sans text-xs font-bold uppercase tracking-[0.16em] text-muted">Board members</h3>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {board.map((p) => (
              <li key={p.name} className="rounded-[var(--radius-media)] bg-ivory p-6">
                <div aria-hidden className="font-display grid h-16 w-16 place-items-center rounded-full bg-peach text-xl text-maroon-700">{initials(p.name)}</div>
                <p className="font-display mt-5 text-lg leading-tight">{p.name}</p>
                <p className="mt-1 text-sm font-bold text-rust">{p.role}</p>
              </li>
            ))}
          </ul>
          <h3 className="mt-12 font-sans text-xs font-bold uppercase tracking-[0.16em] text-muted">Programme team</h3>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {staff.map((p) => (
              <li key={p.name} className="flex items-center gap-4 rounded-[var(--radius-media)] bg-ivory p-5">
                <div aria-hidden className="font-display grid h-12 w-12 shrink-0 place-items-center rounded-full bg-peach text-maroon-700">{initials(p.name)}</div>
                <div>
                  <p className="font-display text-lg leading-tight">{p.name}</p>
                  <p className="text-sm font-bold text-rust">{p.role}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">Names and roles as published on crwds.1ngo.in. Photos can be added with consent. {org.regNo}.</p>
        </div>
      </section>

      <div className="pt-20 md:pt-28">
        <CtaBand />
      </div>
    </>
  )
}
