import { Building2, Briefcase, ClipboardList, Mail, Users, GraduationCap, HeartPulse, Megaphone, Package, Laptop, Sprout, Scissors } from 'lucide-react'
import { images, org } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { PageHero } from '../components/Blocks'
import EnquiryForm from '../components/EnquiryForm'
import { ButtonLink, Eyebrow, Reveal, SafeImage, SectionHeading } from '../components/ui'

const roles = [
  { icon: Laptop, label: 'Teach computer or spoken English' },
  { icon: Scissors, label: 'Mentor women entrepreneurs' },
  { icon: Megaphone, label: 'Run environmental awareness drives' },
  { icon: HeartPulse, label: 'Volunteer at health camps' },
  { icon: Sprout, label: 'Support farmers’ training' },
  { icon: ClipboardList, label: 'Help with reports & social media' },
]

const partnerWays = [
  { icon: GraduationCap, title: 'Fund a skills batch', text: 'Sponsor tailoring, computer or mobile-repair training for a group of women or youth.' },
  { icon: Building2, title: 'Climate & agriculture CSR', text: 'Back water-saving rice, clean cookstoves or e-waste campaigns.' },
  { icon: Users, title: 'Employee volunteering', text: 'Bring your team for a tutoring day or a Sevarth visit.' },
  { icon: Package, title: 'In-kind support', text: 'Books, uniforms, groceries, bedding or equipment for the homes.' },
]

export default function GetInvolved() {
  useSeo('Get involved', 'Volunteer with CRWDS, partner through CSR, or fund skills training for rural women and youth in Telangana.')
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Lend a helping hand."
        lede="Cheyutha means helping hand. Share your skills with rural women and youth, or partner with us through CSR."
        image={images.team}
        imageAlt="CRWDS field team in Mahabubabad"
      >
        <ButtonLink to="#volunteer" variant="primary" icon="arrow">Volunteer</ButtonLink>
        <ButtonLink to="#partner" variant="outline-light" icon="arrow">Partner with us</ButtonLink>
      </PageHero>

      <section id="volunteer" className="container-x section-y scroll-mt-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Volunteer your time"
              title="Your skills can become someone’s livelihood."
              lede="Volunteering is a chance to make a difference in somebody’s life — and to give back to society. Pick what suits you."
            />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {roles.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 rounded-[var(--radius-ui)] bg-peach px-4 py-3.5 font-semibold">
                  <Icon size={20} className="shrink-0 text-rust" strokeWidth={1.9} aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink to="#partner-form" variant="primary" icon="arrow">Volunteer with us</ButtonLink>
              <a href={`mailto:${org.email}`} className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-maroon-800"><Mail size={16} aria-hidden /> {org.email}</a>
            </div>
          </Reveal>
          <Reveal delay={100} className="relative">
            <SafeImage src={images.youthComputers} alt="Young people learning at computers" className="shape-arch aspect-[4/5]" />
            <div className="absolute -bottom-6 left-6 right-6 rounded-[var(--radius-media)] bg-maroon-900 p-6 text-peach shadow-xl sm:left-auto sm:max-w-xs">
              <p className="font-script text-[1.7rem] text-gold">Cheyutha!</p>
              <p className="mt-1 text-sm text-peach/80">Tell us what you’d like to share, and we’ll find the right programme for you.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand/55 py-16 md:py-20">
        <div className="container-x grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
          <span className="grid h-16 w-16 place-items-center rounded-[16px] bg-ivory text-rust">
            <Scissors size={30} strokeWidth={1.7} aria-hidden />
          </span>
          <div>
            <h2 className="display-sm">Fund a woman’s first sewing machine</h2>
            <p className="mt-2 max-w-2xl text-muted">After training, a machine of her own is often what turns a skill into income. <span className="font-semibold">Costs to be confirmed by CRWDS.</span></p>
          </div>
          <ButtonLink to="/donate#wishlist" variant="secondary" icon="arrow" size="sm">Fund one</ButtonLink>
        </div>
      </section>

      <section id="partner" className="container-x section-y scroll-mt-20">
        <SectionHeading
          eyebrow="For companies"
          title="Partner with CRWDS"
          lede="With 80G and 12A registration and nearly four decades on the ground, CRWDS is ready for CSR partnerships."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-media)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {partnerWays.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80} className="bg-ivory p-7">
              <Icon size={26} className="text-rust" strokeWidth={1.7} aria-hidden />
              <h3 className="font-display mt-6 text-xl">{title}</h3>
              <p className="mt-3 text-[0.95rem] text-muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="partner-form" className="on-dark bg-maroon-900 text-peach section-y scroll-mt-20">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>Start a conversation</Eyebrow>
            <h2 className="display-lg mt-4 text-white">Partnership &amp; volunteer enquiry</h2>
            <p className="lede mt-5">Tell us about yourself or your organisation and the CRWDS team will be in touch.</p>
            <div className="mt-10 flex items-center gap-4 rounded-[var(--radius-media)] border border-line-dark p-5">
              <Briefcase size={28} className="shrink-0 text-gold" aria-hidden />
              <p className="text-sm text-peach/80">Prefer to give financially? Donate once, monthly, or fund a specific item.</p>
            </div>
            <div className="mt-5">
              <ButtonLink to="/donate" variant="light" size="sm">Ways to donate</ButtonLink>
            </div>
          </div>
          <div className="rounded-[22px] bg-ivory p-6 text-ink sm:p-9">
            <EnquiryForm
              showOrganisation
              topics={['CSR partnership', 'Fund a skills batch', 'Employee volunteering', 'Individual volunteering', 'In-kind donation']}
              submitLabel="Send enquiry"
              successTitle="Enquiry received"
            />
          </div>
        </div>
      </section>
    </>
  )
}
