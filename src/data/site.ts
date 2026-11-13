/**
 * Central content for the Cheyutha Rural Women's Development Society (CRWDS) demo site.
 *
 * Facts are taken from crwds.1ngo.in and should be re-confirmed with the
 * CRWDS team before launch. Anything marked `demo` is illustrative
 * placeholder content written for this concept.
 */

export const org = {
  name: 'Cheyutha Rural Women’s Development Society',
  short: 'CRWDS',
  founded: 1987,
  regNo: 'Registered under the Public Societies Act, 1987',
  city: 'Thorrur, Mahabubabad',
  email: 'cheyutha.org@gmail.com',
  phone: '+91 99634 67325',
  phoneHref: 'tel:+919963467325',
  address: 'H.No. 14-83/8/A/1, Annaram Road, Thorrur, Mahabubabad District, Telangana 506163',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Annaram+Road+Thorrur+Mahabubabad+Telangana+506163',
  cert80G: 'https://1ngo.sgp1.digitaloceanspaces.com/media/crwds/CRWDS%2080G%20(1).pdf',
  cert12A: 'https://1ngo.sgp1.digitaloceanspaces.com/media/crwds/CRWDS%2012A%20(1).pdf',
  bank: { name: 'State Bank of India', branch: 'Nekkonda', account: 'XXXXXX0809', ifsc: 'SBIN0020315' },
  socials: [
    { label: 'Facebook', href: 'https://facebook.com/crwds' },
    { label: 'Instagram', href: 'https://www.instagram.com/cheyutha_crwds/' },
  ],
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Impact', to: '/impact' },
  { label: 'Stories', to: '/stories' },
  { label: 'Get Involved', to: '/get-involved' },
]

const img = (name: string) => `/images/${name}`

export const images = {
  hero: img('hero-women.jpg'),
  womenHall: img('women-hall.jpg'),
  shgMeeting: img('shg-meeting.jpg'),
  tailoring: img('tailoring.jpg'),
  tailoringClass: img('tailoring-class.jpg'),
  riceField: img('rice-field.jpg'),
  awdField: img('awd-field.jpg'),
  farmersMeeting: img('farmers-meeting.jpg'),
  stakeholders: img('stakeholders.jpg'),
  cherlapalem: img('cherlapalem.jpg'),
  envAwareness: img('env-awareness.jpg'),
  envMeeting: img('env-meeting.jpg'),
  clothBags: img('cloth-bags.jpg'),
  ewasteSchool: img('ewaste-school.jpg'),
  ewasteStudents: img('ewaste-students.jpg'),
  youthComputers: img('youth-computers.jpg'),
  mobileRepair: img('mobile-repair.jpg'),
  healthCamp: img('health-camp.jpg'),
  goonjKits: img('goonj-kits.jpg'),
  cookstove: img('cookstove.jpg'),
  tribal: img('tribal.jpg'),
  culture: img('culture.jpg'),
  communityMeeting: img('community-meeting.jpg'),
  team: img('team.jpg'),
  training: img('training.jpg'),
  youthGirls: img('youth-girls.jpg'),
}

/** Figures published on crwds.1ngo.in. Confirm before launch. */
export const publishedStats = [
  { value: new Date().getFullYear() - 1987, suffix: '+', label: 'Years serving rural Telangana' },
  { value: 10, suffix: '', label: 'Mandals across Warangal & Mahabubabad' },
  { value: 30, suffix: '', label: 'Women trained as tailors in Chinthalapally' },
  { value: 30, suffix: '%', label: 'Less water used with AWD rice farming' },
]

export type Program = {
  slug: string
  number: string
  title: string
  short: string
  summary: string
  image: string
  imageAlt: string
  gallery: { src: string; alt: string }[]
  body: { heading: string; text: string }[]
  highlights: string[]
}

export const programs: Program[] = [
  {
    slug: 'women-empowerment',
    number: '01',
    title: 'Women’s Empowerment & Livelihoods',
    short: 'Self-help groups, a women’s credit cooperative and NABARD-supported tailoring training that turn skills into income.',
    summary:
      'Most women in the villages CRWDS serves have little income of their own. Through self-help groups, skills training and access to credit, they start businesses and support their families.',
    image: images.shgMeeting,
    imageAlt: 'A woman leading a self-help group meeting',
    gallery: [
      { src: images.tailoring, alt: 'Women gathered at a CRWDS tailoring training programme' },
      { src: images.womenHall, alt: 'A hall full of women at a CRWDS community meeting' },
    ],
    body: [
      {
        heading: 'Tailoring training with NABARD',
        text: 'Under NABARD’s Micro Enterprise Development Programme, CRWDS trained 30 women from Chinthalapally village, Thorrur Mandal, to make nighties, pillow covers and bed sheets. Several opened their own shops; others formed a group production unit.',
      },
      {
        heading: 'Vasundhara Mahila Credit Cooperative',
        text: 'Established on 20 October 2020 (Reg. No. AMC/MHBD/DCO/85/2020), the cooperative gives women members access to loans and protects them from exploitation by moneylenders.',
      },
      {
        heading: 'A production centre in Thorrur',
        text: 'CRWDS set up a production centre in Thorrur town, marketing products across Thorrur, Wardhannapet, Mahabubabad, Kesamudram, Palakurthi, Nekkonda and Dhanthalapally mandals.',
      },
    ],
    highlights: ['30 women trained', 'Credit cooperative since 2020', 'Production centre', 'Self-help groups'],
  },
  {
    slug: 'sustainable-agriculture',
    number: '02',
    title: 'Sustainable Agriculture',
    short: 'Helping paddy farmers adopt Alternate Wetting and Drying — 30% less water and energy, lower methane, the same yield.',
    summary:
      'Rice is the backbone of rural livelihoods — and flooded paddy fields are a major source of methane. CRWDS works with farmers in Mahabubabad, Warangal and Mulugu to grow rice with far less water.',
    image: images.riceField,
    imageAlt: 'Farmers and CRWDS staff standing in a green paddy field',
    gallery: [
      { src: images.farmersMeeting, alt: 'Farmers attending a CRWDS awareness meeting' },
      { src: images.stakeholders, alt: 'A stakeholder meeting on sustainable rice in Haripirala village' },
    ],
    body: [
      {
        heading: 'Alternate Wetting and Drying (AWD)',
        text: 'Instead of keeping fields permanently flooded, farmers let them dry for a few days before re-irrigating — without stressing the plants. The method reduces water demand and greenhouse-gas emissions without reducing yields.',
      },
      {
        heading: 'With Core CarbonX and Varaha',
        text: 'CRWDS runs AWD programmes with farmers in Mahabubabad District and a pilot with Varaha in Warangal and Mulugu districts, including stakeholder consultations under Gold Standard procedures.',
      },
      {
        heading: 'Farmers’ clubs and animal husbandry',
        text: 'Women farmers’ clubs, horticulture and animal husbandry development have been part of CRWDS’s agriculture work since its founding.',
      },
    ],
    highlights: ['30% less water', '30% less energy', 'Lower methane', 'Women farmers’ clubs'],
  },
  {
    slug: 'environment',
    number: '03',
    title: 'Environment & Climate Action',
    short: 'Village clean-ups, tree planting, waste segregation, cloth bags instead of plastic, and e-waste campaigns in three states.',
    summary:
      'From village lanes in Telangana to schools in Andhra Pradesh and Kerala, CRWDS helps communities keep their surroundings clean and understand the hidden costs of waste.',
    image: images.envAwareness,
    imageAlt: 'An environmental awareness event with CRWDS staff and villagers',
    gallery: [
      { src: images.ewasteSchool, alt: 'Students at an e-waste awareness seminar' },
      { src: images.clothBags, alt: 'Cloth bags being distributed at a vegetable market' },
    ],
    body: [
      {
        heading: 'Cleaner villages',
        text: 'Waste removal, discouraging open defecation, planting and nurturing trees, and distributing 20 green and red dustbins so villagers can separate biodegradable and non-biodegradable waste.',
      },
      {
        heading: 'Goodbye, single-use plastic',
        text: 'With the Paryavaran national NGO network, CRWDS ran workshops on single-use plastic and distributed cloth bags at Balasamudram vegetable market, Hanamkonda.',
      },
      {
        heading: 'E-waste awareness in three states',
        text: 'School sessions, collection drives and a roadshow in Telangana, Andhra Pradesh and Kerala teach the 3Rs — reduce, reuse, recycle — for phones, computers and batteries.',
      },
    ],
    highlights: ['Tree planting', 'Waste segregation', 'Cloth bags', 'E-waste campaigns'],
  },
  {
    slug: 'youth-skills',
    number: '04',
    title: 'Youth Skill Development',
    short: 'Computer education, spoken English, vocational and mobile-repair training that help young people find work.',
    summary:
      'Computer skills are now essential for jobs — but courses are expensive for families on low incomes. CRWDS offers practical training so young people can earn and support their families.',
    image: images.youthComputers,
    imageAlt: 'Young people learning at computers in a CRWDS training centre',
    gallery: [
      { src: images.mobileRepair, alt: 'Trainees at a mobile-repair skills course' },
      { src: images.youthGirls, alt: 'Young women in uniform attending a training session' },
    ],
    body: [
      {
        heading: 'Computer education',
        text: 'In one year, 50 young people who had completed intermediate education were trained in computer basics, MS Office, desktop publishing and the internet — with printed material to keep.',
      },
      {
        heading: 'Vocational and mobile-repair training',
        text: 'With IRDP, 40 participants were trained in mobile-phone repair in Hyderabad. With GANA Computer Education Society, CRWDS delivered online retail-trade training for physically challenged persons.',
      },
      {
        heading: 'Confidence for careers',
        text: 'Spoken English, personality development and career guidance round out the courses, including classes for children.',
      },
    ],
    highlights: ['50 youth in computers', '40 in mobile repair', 'Spoken English', 'Career guidance'],
  },
  {
    slug: 'health-community',
    number: '05',
    title: 'Health & Community Welfare',
    short: 'Free health camps in remote villages, essential-kit distribution, clean cookstoves for tribal families, and disaster preparedness.',
    summary:
      'Where basic health care and services are absent, CRWDS brings them to the village — and works with tribal communities on safer, cleaner ways to cook.',
    image: images.healthCamp,
    imageAlt: 'Doctors examining villagers at a free health check-up camp',
    gallery: [
      { src: images.goonjKits, alt: 'Schoolchildren receiving student kits' },
      { src: images.cookstove, alt: 'A clean cookstove field visit in a tribal village' },
    ],
    body: [
      {
        heading: 'Free health camps',
        text: 'Regular general and specialised health camps in the remotest villages have become a lifeline where basic health facilities are absent.',
      },
      {
        heading: 'Kits for families and students',
        text: 'With Goonj, CRWDS distributed essential-material kits and student kits in five villages across Thorrur, Rayaparthi and Kothaguda mandals.',
      },
      {
        heading: 'Clean cooking for tribal families',
        text: 'Field studies with the Gutti Koya tribal community in Mulugu District explored clean cookstoves — reducing the indoor smoke that harms women and girls most.',
      },
    ],
    highlights: ['Health camps', 'Goonj kits in 5 villages', 'Clean cookstoves', 'Disaster training'],
  },
]

export type Story = {
  slug: string
  category: 'Women' | 'Agriculture' | 'Environment' | 'Skills' | 'Community'
  date: string
  title: string
  excerpt: string
  image: string
  imageAlt: string
  readTime: string
  /** 'crwds' = written from information published by CRWDS. 'demo' = sample written for this concept. */
  source: 'crwds' | 'demo'
  body: string[]
}

export const stories: Story[] = [
  {
    slug: 'mounika-tailoring-shop',
    category: 'Women',
    date: '2024-03-20',
    title: 'From homemaker to shop owner: Mounika’s tailoring business',
    excerpt:
      'Fifteen days of training. One sewing shop in Chinthalapally village. ₹8,000–12,000 a month for her family.',
    image: images.tailoring,
    imageAlt: 'Women at the NABARD-supported tailoring training',
    readTime: '4 min read',
    source: 'crwds',
    body: [
      'Mounika, 26, lives in Chinthalapally village in Thorrur Mandal with her husband, an agricultural labourer, and their son. The family lived below the poverty line, and there were no income-generating opportunities for women in the village.',
      'When CRWDS representatives visited to select self-help group members for tailoring training, she enrolled in the NABARD Micro Enterprise Development Programme. From 13 February to 6 March 2024 she learned to cut and stitch pillow covers, nighties and Punjabi dresses.',
      'After the training, Mounika opened a tailoring shop in her village. She initially earned ₹8,000 to ₹12,000 a month, and began taking orders from apparel shops in nearby Thorrur town.',
      'She was one of 30 women from Chinthalapally trained through the programme. Some opened their own shops; others started a group unit making pillow covers and nighties — sold through a CRWDS production centre in Thorrur with support from the Vasundhara Mahila Credit Cooperative.',
    ],
  },
  {
    slug: 'ewaste-roadshow-kerala',
    category: 'Environment',
    date: '2026-03-24',
    title: 'An auto-rickshaw roadshow for e-waste awareness in Kerala',
    excerpt: 'Banners, a three-day route along two highways, and a simple message: don’t throw your old phone in the bin.',
    image: images.ewasteStudents,
    imageAlt: 'Students listening to an e-waste awareness session',
    readTime: '3 min read',
    source: 'crwds',
    body: [
      'With partners Cosmic Community Centre and Hulladek, CRWDS organised an e-waste management campaign in Kottarakara, Kerala, from 21 to 24 March 2026.',
      'An auto-rickshaw carrying campaign banners travelled through the Kottarakara junction, along the Main Central Road and the Kollam–Shencottah National Highway.',
      'Earlier that month, school seminars reached senior and junior students — and the senior students went on to lead a session for the juniors themselves. Next time, campaign materials will also be printed in the local language.',
    ],
  },
  {
    slug: 'ewaste-schools-andhra',
    category: 'Environment',
    date: '2026-03-02',
    title: 'What happens to your old phone? Students in Andhra Pradesh find out',
    excerpt: 'E-waste contains lead, mercury and cadmium. School sessions and a collection drive in Kalluru taught the 3Rs.',
    image: images.ewasteSchool,
    imageAlt: 'An e-waste awareness seminar in a school hall',
    readTime: '3 min read',
    source: 'crwds',
    body: [
      'Most of us use a phone for two or three years before replacing it. Too often, the old one ends up in the garbage — where lead, mercury and cadmium leak into soil and water.',
      'CRWDS ran awareness sessions for girls and boys across districts of Andhra Pradesh, followed by an e-waste collection drive at Kalluru with school and community participation.',
      'Students learned the 3Rs: reduce unnecessary purchases, reuse by repairing or donating, and recycle through authorised centres.',
    ],
  },
  {
    slug: 'mobile-repair-training',
    category: 'Skills',
    date: '2026-03-02',
    title: 'Forty young people learn mobile-phone repair in Hyderabad',
    excerpt: 'A practical trade with steady demand — delivered with IRDP Trust.',
    image: images.mobileRepair,
    imageAlt: 'Trainees at a mobile-phone repair course',
    readTime: '2 min read',
    source: 'crwds',
    body: [
      'CRWDS is running mobile-phone repair training for 40 participants in Hyderabad with IRDP Trust.',
      'Repair skills open a direct path to self-employment — and, as CRWDS’s e-waste work shows, keeping devices in use longer is good for the environment too.',
    ],
  },
  {
    slug: 'cloth-bags-balasamudram',
    category: 'Environment',
    date: '2024-06-12',
    title: 'Cloth bags for shoppers at Balasamudram market',
    excerpt: 'Swapping single-use plastic for reusable cloth at a busy vegetable market in Hanamkonda.',
    image: images.clothBags,
    imageAlt: 'Cloth bags being handed out at a vegetable market',
    readTime: '2 min read',
    source: 'crwds',
    body: [
      'As part of the Paryavaran national NGO network, CRWDS ran an awareness drive on the problems caused by single-use plastic bags at Balasamudram vegetable market in Hanamkonda District.',
      'Shoppers and vendors received cloth bags to use instead — following an earlier workshop on removing single-use plastics.',
    ],
  },
  {
    slug: 'clean-cookstoves-gutti-koya',
    category: 'Community',
    date: '2024-06-04',
    title: 'Clean cookstoves and the health of tribal women',
    excerpt: 'A field study with the Gutti Koya community in Mulugu District looked at the hidden cost of smoky kitchens.',
    image: images.cookstove,
    imageAlt: 'A field visit about clean cookstoves in a tribal village',
    readTime: '3 min read',
    source: 'crwds',
    body: [
      'Billions of people cook with kerosene, wood or dung. Indoors and without ventilation, the smoke raises the risk of pneumonia, lung cancer, heart disease and stroke.',
      'Because cooking falls mostly to women and girls, they face the greatest exposure — and lose time they could spend studying, earning or resting.',
      'CRWDS carried out a clean cookstove field study with the Gutti Koya tribal community in Mulugu District, and hosted a technical team visit on distributing smart cookstoves in tribal areas of Warangal and Mulugu.',
    ],
  },
  {
    slug: 'awd-stakeholder-meeting',
    category: 'Agriculture',
    date: '2023-11-01',
    title: 'Farmers, officials and the press meet on water-saving rice',
    excerpt: 'At Haripirala village, a Gold Standard stakeholder meeting explained how AWD saves water, power and methane.',
    image: images.stakeholders,
    imageAlt: 'A stakeholder meeting about sustainable rice farming',
    readTime: '3 min read',
    source: 'crwds',
    body: [
      'Paddy fields are among the largest human-made sources of methane. Alternate Wetting and Drying can cut water use by around 30% and energy use by around 30% without reducing yields.',
      'At Haripirala village, Thorrur Mandal, CRWDS hosted a stakeholder meeting with Core CarbonX, local sarpanches, the mandal agriculture officer, cluster coordinators, farmers and the press.',
      'The session covered the benefits of AWD — saving water and electricity, reducing methane, and improving rice productivity — and demonstrated the field pipes farmers use to know when to irrigate.',
    ],
  },
  {
    slug: 'free-health-camp',
    category: 'Community',
    date: '2022-09-18',
    title: 'A lifeline in remote villages: CRWDS health camps',
    excerpt: 'Where there is no clinic, the camp comes to the village.',
    image: images.healthCamp,
    imageAlt: 'Doctors examining villagers at a health camp',
    readTime: '2 min read',
    source: 'crwds',
    body: [
      'CRWDS regularly organises general and specialised health camps for communities in the remotest villages, where basic health facilities are absent.',
      'For many families, these camps have become their main access to quality health care.',
    ],
  },
]

export const steps = [
  { title: 'Listen', text: 'Field staff meet women’s groups, farmers and village leaders to understand what each community needs.' },
  { title: 'Organise', text: 'Communities form self-help groups, farmers’ clubs and cooperatives that can sustain the work.' },
  { title: 'Train', text: 'Practical skills — tailoring, computers, water-saving farming — delivered in or near the village.' },
  { title: 'Sustain', text: 'Access to credit and markets, follow-up support and partnerships keep progress going.' },
]

export const documents = [
  { title: 'Annual Report 2024–25', type: 'Annual report', size: 'PDF · to be uploaded' },
  { title: '80G Registration Certificate', type: 'Certificate', size: 'PDF · hosted on current site', href: org.cert80G },
  { title: '12A Registration Certificate', type: 'Certificate', size: 'PDF · hosted on current site', href: org.cert12A },
  { title: 'Audited Financial Statements FY 2024–25', type: 'Financial statement', size: 'PDF · sample' },
  { title: 'Society Registration & Bye-laws', type: 'Governance', size: 'PDF · sample' },
  { title: 'Safeguarding & Privacy Policy', type: 'Policy', size: 'PDF · sample' },
] as { title: string; type: string; size: string; href?: string }[]

export const board = [
  { name: 'Musipatla Yakaiah', role: 'Founder cum General Secretary' },
  { name: 'Mohan Varanasi', role: 'President' },
  { name: 'Srinivas Rao Malineneni', role: 'Vice President' },
  { name: 'Bukya Veeramma', role: 'Joint Secretary' },
  { name: 'G. Sridevi', role: 'Treasurer' },
]

export const staff = [
  { name: 'G. Rajesh Kumar', role: 'Program Officer' },
  { name: 'G. Bhaskara Chary', role: 'Program Coordinator' },
]

export const partners = ['NABARD', 'Core CarbonX', 'Varaha', 'Goonj', 'Paryavaran Foundation', 'Hulladek', 'IRDP Trust', 'GANA Computer Education Society', 'Cosmic Community Centre']

/** Illustrative amounts — CRWDS does not publish fixed donation tiers. */
export const oneTimeAmounts = [500, 1000, 2500, 5000, 10000, 25000]
export const monthlyAmounts = [300, 500, 1000, 2000, 5000, 10000]

/** Illustrative only — the CRWDS team should replace these with real costs. */
export const amountImpact: Record<number, string> = {
  300: 'helps towards training materials for one woman',
  500: 'helps towards a student kit for a village child',
  1000: 'helps towards a month of computer classes for a young person',
  2000: 'helps towards a health-camp visit for a family',
  2500: 'helps towards fabric and supplies for a tailoring trainee',
  5000: 'helps towards a sewing machine for a new entrepreneur',
  10000: 'helps towards an environmental awareness drive in a village',
  25000: 'helps towards a full tailoring batch for a self-help group',
}

/** Sample items a donor can fund directly. Prices are illustrative. */
export const wishlist = [
  { name: 'Sewing machine', detail: 'For a newly trained woman tailor', price: 7500, icon: 'scissors' },
  { name: 'Tailoring starter kit', detail: 'Fabric, thread and tools', price: 2500, icon: 'package' },
  { name: 'Computer course seat', detail: 'Three months for one young person', price: 3000, icon: 'laptop' },
  { name: 'Student kit', detail: 'Bag, notebooks and stationery', price: 600, icon: 'backpack' },
  { name: 'Health camp share', detail: 'Check-up and medicines for a family', price: 1000, icon: 'stethoscope' },
  { name: 'Waste-segregation bins', detail: 'A green and red pair for a village lane', price: 1200, icon: 'trash' },
  { name: '100 cloth bags', detail: 'To replace single-use plastic', price: 4000, icon: 'shopping' },
  { name: 'Clean cookstove', detail: 'For a tribal household', price: 3500, icon: 'flame' },
]

export const values = [
  { title: 'Women at the centre', text: 'When women earn, save and lead, whole families and villages move forward.' },
  { title: 'Rooted locally', text: 'Working in the same 10 mandals of Warangal and Mahabubabad for nearly four decades.' },
  { title: 'Sustainable by design', text: 'Groups, cooperatives and skills that keep working long after a project ends.' },
  { title: 'Care for the land', text: 'Farming and living in ways that protect water, soil and air for the next generation.' },
]

export const formatINR = (n: number) => '₹' + n.toLocaleString('en-IN')

export const formatDate = (iso: string) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
