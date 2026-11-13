import { ClipboardList as Clock, Mail, MapPin, Phone } from 'lucide-react'
import { org } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { PageHero } from '../components/Blocks'
import EnquiryForm from '../components/EnquiryForm'
import { Eyebrow } from '../components/ui'

export default function Contact() {
  useSeo('Contact', 'Contact Cheyutha Rural Women’s Development Society about donations, volunteering or CSR partnerships. Thorrur, Mahabubabad, Telangana.')
  const cards = [
    { icon: Mail, label: 'Email', value: org.email, href: `mailto:${org.email}` },
    { icon: Phone, label: 'Phone', value: org.phone, href: org.phoneHref },
    { icon: MapPin, label: 'Address', value: org.address, href: org.mapsHref },
    { icon: Clock, label: 'Certifications', value: '80G & 12A registered — view in the transparency hub', href: '/transparency' },
  ]
  return (
    <>
      <PageHero
        eyebrow="Talk with us"
        title="We’d love to hear from you."
        lede="Contact the CRWDS team about donations, volunteering, CSR partnerships or our programmes."
      />
      <section className="container-x pb-20 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="space-y-4 lg:-mt-10">
            {cards.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[12px] bg-peach text-rust">
                    <Icon size={22} strokeWidth={1.8} aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-muted">{label}</span>
                    <span className="mt-1 block break-words font-semibold text-ink">{value}</span>
                  </span>
                </>
              )
              return href ? (
                <a key={label} href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})} className="relative z-10 flex gap-4 rounded-[var(--radius-media)] border border-line bg-white p-5 transition-colors hover:border-rust/40">
                  {inner}
                </a>
              ) : (
                <div key={label} className="relative z-10 flex gap-4 rounded-[var(--radius-media)] border border-line bg-white p-5">{inner}</div>
              )
            })}
            <p className="text-xs text-muted">Contact details as published on crwds.1ngo.in.</p>
          </div>
          <div className="pt-6 lg:pt-14">
            <Eyebrow>How can we help?</Eyebrow>
            <h2 className="display-md mb-8 mt-4">Send us a message</h2>
            <EnquiryForm topics={['General question', 'Donations & 80G receipts', 'Volunteering', 'CSR partnership', 'Women’s programmes', 'Agriculture programmes', 'Media']} />
          </div>
        </div>
      </section>
      <section className="border-t border-line">
        <iframe
          title="Map showing CRWDS’s office on Annaram Road, Thorrur"
          src="https://www.google.com/maps?q=Annaram+Road,+Thorrur,+Telangana+506163&output=embed"
          className="block h-[380px] w-full border-0 grayscale-[35%] sepia-[15%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
