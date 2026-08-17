import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'

export const metadata: Metadata = {
  title: 'North Idaho School Districts: Open Enrollment, Charters & District Boundaries | Shirin Abplanalp',
  description:
    "A Realtor's guide to Kootenai County schools for relocating families: how CdA 271, Post Falls 273, and Lakeland 272 compare, how Idaho's 2023 open enrollment law works, and what charter and private options exist.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/articles/north-idaho-school-districts-open-enrollment-charters',
  },
  openGraph: {
    title: "A Parent's Guide to North Idaho Education: Open-Enrollment, Charter Paths, and District Boundaries",
    description:
      "Which school district your address falls into matters far less than it used to — but knowing the lay of the land before you make an offer still saves real headaches later.",
    url: 'https://www.realestatewithshirin.com/articles/north-idaho-school-districts-open-enrollment-charters',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Shirin Abplanalp'],
    images: ['https://www.realestatewithshirin.com/images/north-idaho-school-districts-guide.webp'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-school-districts-open-enrollment-charters#article',
  headline: "A Parent's Guide to North Idaho Education: Open-Enrollment, Charter Paths, and District Boundaries",
  description:
    "A working Realtor's guide to North Idaho school districts for relocating families: how Coeur d'Alene 271, Post Falls 273, and Lakeland 272 compare, how Idaho's 2023 open enrollment law works, and what charter and private options exist in Kootenai County.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/north-idaho-school-districts-guide.webp',
    width: 1536,
    height: 1024,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  datePublished: '2026-05-21T00:00:00-07:00',
  dateModified: '2026-07-07T00:00:00-07:00',
  mainEntityOfPage: 'https://www.realestatewithshirin.com/articles/north-idaho-school-districts-open-enrollment-charters',
  url: 'https://www.realestatewithshirin.com/articles/north-idaho-school-districts-open-enrollment-charters',
  keywords: [
    'North Idaho schools',
    "Coeur d'Alene School District 271",
    'Post Falls School District 273',
    'Lakeland Joint School District 272',
    'Idaho open enrollment law',
    'Kootenai County charter schools',
    'CdA Charter Academy',
    'North Idaho STEM Charter Academy',
    'Idaho homeschool',
    'Kootenai County private schools',
  ],
  articleSection: 'Relocation Guide',
  wordCount: 3800,
  about: [
    {
      '@type': 'EducationalOrganization',
      '@id': 'https://www.cdaschools.org/#district',
      name: "Coeur d'Alene School District 271",
      url: 'https://www.cdaschools.org',
      identifier: '271',
      areaServed: {
        '@type': 'AdministrativeArea',
        name: "Coeur d'Alene, Dalton Gardens, parts of Hayden, Idaho",
      },
    },
    {
      '@type': 'EducationalOrganization',
      '@id': 'https://www.pfsd.com/#district',
      name: 'Post Falls School District 273',
      url: 'https://www.pfsd.com',
      identifier: '273',
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Post Falls, parts of west Kootenai County, Idaho',
      },
    },
    {
      '@type': 'EducationalOrganization',
      '@id': 'https://www.sd272.org/#district',
      name: 'Lakeland Joint School District 272',
      url: 'https://www.sd272.org',
      identifier: '272',
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Rathdrum, Spirit Lake, Athol, parts of Hayden Lake and Twin Lakes, Idaho',
      },
    },
  ],
  mentions: [
    {
      '@type': 'GovernmentOrganization',
      name: 'Idaho State Department of Education',
      url: 'https://www.sde.idaho.gov',
      sameAs: 'https://en.wikipedia.org/wiki/Idaho_State_Department_of_Education',
    },
    {
      '@type': 'GovernmentOrganization',
      name: 'Idaho Public Charter School Commission',
      url: 'https://chartercommission.idaho.gov',
    },
    {
      '@type': 'GovernmentOrganization',
      name: 'Idaho State Board of Education',
      url: 'https://boardofed.idaho.gov',
    },
    {
      '@type': 'EducationalOrganization',
      name: "Coeur d'Alene Charter Academy",
      url: 'https://www.cdacharter.org',
      address: {
        '@type': 'PostalAddress',
        addressLocality: "Coeur d'Alene",
        addressRegion: 'ID',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'EducationalOrganization',
      name: 'North Idaho STEM Charter Academy',
      url: 'https://www.northidahostem.org',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rathdrum',
        addressRegion: 'ID',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Kootenai Classical Academy',
      url: 'https://www.kootenaiclassical.org',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Classical Christian Academy',
      url: 'https://www.classicalchristian.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '6068 Hayden Avenue',
        addressLocality: 'Rathdrum',
        addressRegion: 'ID',
        postalCode: '83858',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'Legislation',
      name: 'Idaho Senate Bill 1125 (2023 Open Enrollment Law)',
      description:
        "Idaho's revised open enrollment law, effective July 1, 2023, allowing students to apply to any public school in the state with available space.",
      legislationDate: '2023-07-01',
    },
  ],
  citation: [
    {
      '@type': 'CreativeWork',
      name: 'Idaho State Department of Education',
      url: 'https://www.sde.idaho.gov',
    },
    {
      '@type': 'CreativeWork',
      name: 'Idaho Public Charter School Commission — Region 1 List',
      url: 'https://chartercommission.idaho.gov/pcsc-schools/by-region/region-1',
    },
    {
      '@type': 'CreativeWork',
      name: 'Idaho Report Card — Post Falls School District 273',
      url: 'https://www.idahoreportcard.org/about-us/district?districtId=273',
    },
    {
      '@type': 'CreativeWork',
      name: "Coeur d'Alene Public Schools — Attendance Zones",
      url: 'https://www.cdaschools.org/page/attendance-zones',
    },
    {
      '@type': 'CreativeWork',
      name: "Coeur d'Alene Charter Academy — Admission",
      url: 'https://www.cdacharter.org/admission',
    },
    {
      '@type': 'CreativeWork',
      name: 'Idaho EdNews — Open Enrollment Law Coverage',
      url: 'https://www.idahoednews.org/school-policy/open-enrollment-a-law-that-won-lofty-praise-but-will-likely-have-little-impact',
    },
    {
      '@type': 'CreativeWork',
      name: 'Private School Review — Kootenai County Private Schools',
      url: 'https://www.privateschoolreview.com/idaho/kootenai-county',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-school-districts-open-enrollment-charters#faq',
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-school-districts-open-enrollment-charters#article' },
  mainEntity: [
    {
      '@type': 'Question',
      name: "What's the difference between Coeur d'Alene School District 271, Post Falls 273, and Lakeland 272?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "District 271 (Coeur d'Alene) is the largest at roughly 9,650 students and covers Coeur d'Alene, Dalton Gardens, and parts of Hayden. District 273 (Post Falls) serves about 5,700 students in one of Idaho's fastest-growing cities. District 272 (Lakeland Joint) serves about 5,780 students across Rathdrum, Spirit Lake, Athol, and rural areas — the most geographically dispersed of the three. Each district sets its own calendar, attendance zones, programs, and bus routes. None is universally best; the right district depends on where you buy and what your family needs.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can my child attend a school in a different district than where we live in Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Idaho's revised open enrollment law, effective July 1, 2023, gives every family the right to apply to any public school in the state with available space — including across district lines. You must apply (priority deadline is February 1 for the following school year), the receiving school must have capacity, and you provide transportation. After the first year you only need to notify; after two years your student is essentially grandfathered. Charter schools continue to operate under their own lottery systems separate from open enrollment.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do the charter schools in Kootenai County work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "All three of the most established public charters — Coeur d'Alene Charter Academy (grades 6–12), North Idaho STEM Charter Academy (K–12 in Rathdrum), and Kootenai Classical Academy — are tuition-free public schools that use lottery-based admission. CdA Charter Academy's application deadline is the second Friday in March. Lottery priority generally goes to returning students, then siblings, then in-area applicants, then everyone else. Because charters are public, no district residency requirement applies — a Post Falls family can apply to a Rathdrum charter and a Coeur d'Alene family can apply to a Post Falls charter.",
      },
    },
    {
      '@type': 'Question',
      name: "Are there magnet schools in Coeur d'Alene School District 271?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. District 271 operates two application-based magnet elementary schools: Sorensen Magnet School of the Arts and Humanities, and Ramsey Magnet School of Science. Both use a lottery enrollment system with priority going to children of staff, siblings of current students, students inside the magnet attendance zone, and finally students outside the zone or outside the district. Unlike charter schools, magnets are part of the regular school district and follow district policies — but the lottery means your home address doesn't automatically determine admission.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many private schools are in Kootenai County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "More than 21, according to Private School Review and the Idaho State Department of Education's annual private schools directory. Options include classical Christian programs like Classical Christian Academy in Rathdrum and Coeur d'Alene Classical Christian School, several Catholic and other denominational schools, and a growing number of smaller private schools and microschools. The SDE publishes an annual private schools list (currently the 2025–2026 directory) that is the most authoritative complete count.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is homeschooling legal and easy in Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, and yes. Idaho is one of the most homeschool-friendly states in the country — there is no state registration requirement, no curriculum approval, no required reporting, and no mandatory testing. Families can homeschool without notifying the state at all. That regulatory simplicity, combined with North Idaho's strong homeschool community and the availability of local hybrid programs (two-to-three days a week in-person plus at-home learning), makes the region a popular destination for families pursuing homeschool or hybrid education.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find out which school a specific address feeds into?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Each district has an online address lookup tool. Coeur d'Alene School District 271, Post Falls School District 273, and Lakeland Joint School District 272 all publish address-based attendance zone identifiers on their websites. Enter the full address (with street directions like N, S, E, W) and the tool returns the assigned elementary, middle, and high school plus bus stop information. I run this lookup for every address my clients consider — it takes 30 seconds and removes any guesswork.",
      },
    },
    {
      '@type': 'Question',
      name: 'When should I think about schools during my North Idaho home search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Early, not late. If your kids attend their assigned neighborhood public school, run the district address lookup before writing an offer. If you're applying for open enrollment to a different district, apply by February 1 for the following school year — that means the school decision often needs to be made before the home decision. If you're pursuing a charter, know the lottery deadline (second Friday in March for CdA Charter Academy) and apply on schedule regardless of where your home search is at. Treating schools and homes as sequential decisions is one of the most common — and most costly — relocation mistakes I see.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-school-districts-open-enrollment-charters#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    {
      '@type': 'ListItem',
      position: 3,
      name: "A Parent's Guide to North Idaho Education: Open-Enrollment, Charter Paths, and District Boundaries",
      item: 'https://www.realestatewithshirin.com/articles/north-idaho-school-districts-open-enrollment-charters',
    },
  ],
}

const districts = [
  { number: '271', name: "Coeur d'Alene", hq: "Coeur d'Alene", enrollment: '~9,650', coverage: "CdA, Dalton Gardens, parts of Hayden" },
  { number: '273', name: 'Post Falls', hq: 'Post Falls', enrollment: '~5,700', coverage: 'Post Falls, parts of west Kootenai County' },
  { number: '272', name: 'Lakeland Joint', hq: 'Rathdrum', enrollment: '~5,780', coverage: 'Rathdrum, Spirit Lake, Athol, parts of Hayden Lake and Twin Lakes' },
]

const openEnrollmentPoints = [
  { bold: 'Apply to any public school, in or out of district', rest: ', as long as there is space.' },
  { bold: 'Priority goes to in-district applicants', rest: ' and to applications submitted by February 1 for the following school year.' },
  { bold: 'The school can require good behavior and attendance records.', rest: ' Bad records can result in denial or revoked acceptance.' },
  { bold: 'You provide transportation.', rest: ' Open enrollment does not entitle you to district bus service to the receiving school.' },
  { bold: 'After two years, the student is essentially grandfathered.', rest: ' First year requires application; second year requires notification; after that, automatic.' },
  { bold: 'Elementary acceptance does not automatically extend to feeder middle schools.', rest: ' You reapply at the next level.' },
  { bold: 'Charter schools continue to use their own lottery systems', rest: ' — open enrollment does not change charter admission rules.' },
  { bold: 'Denials can be appealed', rest: ' to the local school board within five school days, and then to the State Board of Education within ten.' },
]

const faqs = [
  {
    q: "What's the difference between Coeur d'Alene School District 271, Post Falls 273, and Lakeland 272?",
    a: "District 271 (Coeur d'Alene) is the largest at roughly 9,650 students and covers Coeur d'Alene, Dalton Gardens, and parts of Hayden. District 273 (Post Falls) serves about 5,700 students in one of Idaho's fastest-growing cities. District 272 (Lakeland Joint) serves about 5,780 students across Rathdrum, Spirit Lake, Athol, and rural areas — the most geographically dispersed of the three. Each district sets its own calendar, attendance zones, programs, and bus routes. None is universally best; the right district depends on where you buy and what your family needs.",
  },
  {
    q: 'Can my child attend a school in a different district than where we live in Idaho?',
    a: "Yes. Idaho's revised open enrollment law, effective July 1, 2023, gives every family the right to apply to any public school in the state with available space — including across district lines. You must apply (priority deadline is February 1 for the following school year), the receiving school must have capacity, and you provide transportation. After the first year you only need to notify; after two years your student is essentially grandfathered. Charter schools continue to operate under their own lottery systems separate from open enrollment.",
  },
  {
    q: 'How do the charter schools in Kootenai County work?',
    a: "All three of the most established public charters — Coeur d'Alene Charter Academy (grades 6–12), North Idaho STEM Charter Academy (K–12 in Rathdrum), and Kootenai Classical Academy — are tuition-free public schools that use lottery-based admission. CdA Charter Academy's application deadline is the second Friday in March. Lottery priority generally goes to returning students, then siblings, then in-area applicants, then everyone else. Because charters are public, no district residency requirement applies — a Post Falls family can apply to a Rathdrum charter and a Coeur d'Alene family can apply to a Post Falls charter.",
  },
  {
    q: "Are there magnet schools in Coeur d'Alene School District 271?",
    a: "Yes. District 271 operates two application-based magnet elementary schools: Sorensen Magnet School of the Arts and Humanities, and Ramsey Magnet School of Science. Both use a lottery enrollment system with priority going to children of staff, siblings of current students, students inside the magnet attendance zone, and finally students outside the zone or outside the district. Unlike charter schools, magnets are part of the regular school district and follow district policies — but the lottery means your home address doesn't automatically determine admission.",
  },
  {
    q: 'How many private schools are in Kootenai County?',
    a: "More than 21, according to Private School Review and the Idaho State Department of Education's annual private schools directory. Options include classical Christian programs like Classical Christian Academy in Rathdrum and Coeur d'Alene Classical Christian School, several Catholic and other denominational schools, and a growing number of smaller private schools and microschools.",
  },
  {
    q: 'Is homeschooling legal and easy in Idaho?',
    a: "Yes, and yes. Idaho is one of the most homeschool-friendly states in the country — there is no state registration requirement, no curriculum approval, no required reporting, and no mandatory testing. Families can homeschool without notifying the state at all. That regulatory simplicity, combined with North Idaho's strong homeschool community and the availability of local hybrid programs, makes the region a popular destination for families pursuing homeschool or hybrid education.",
  },
  {
    q: 'How do I find out which school a specific address feeds into?',
    a: "Each district has an online address lookup tool. Coeur d'Alene School District 271, Post Falls School District 273, and Lakeland Joint School District 272 all publish address-based attendance zone identifiers on their websites. Enter the full address (with street directions like N, S, E, W) and the tool returns the assigned elementary, middle, and high school plus bus stop information. I run this lookup for every address my clients consider — it takes 30 seconds and removes any guesswork.",
  },
  {
    q: 'When should I think about schools during my North Idaho home search?',
    a: "Early, not late. If your kids attend their assigned neighborhood public school, run the district address lookup before writing an offer. If you're applying for open enrollment to a different district, apply by February 1 for the following school year — that means the school decision often needs to be made before the home decision. If you're pursuing a charter, know the lottery deadline (second Friday in March for CdA Charter Academy) and apply on schedule regardless of where your home search is at. Treating schools and homes as sequential decisions is one of the most common and most costly relocation mistakes I see.",
  },
]

export default function NorthIdahoSchoolDistrictsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#F5EFE6] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#C4842A] transition-colors">Home</Link>
            <span className="mx-2">·</span>
            <a href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</a>
            <span className="mx-2">·</span>
            <span className="text-[#5C5650]">North Idaho Schools Guide</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Relocation Guide</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">15 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">May 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            A Parent&apos;s Guide to North Idaho Education: Open-Enrollment, Charter Paths, and District Boundaries
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            Which school district your address falls into matters far less than it used to — but knowing the lay of the land before you make an offer still saves real headaches later.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, Licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · May 21, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1C1A17] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">3</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Public Districts</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">CdA, Post Falls, Lakeland</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">21+</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Private Schools</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Kootenai County</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">3</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Charter Schools</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Established public charters</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">Feb 1</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">OE Priority Deadline</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Open enrollment applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full overflow-hidden" style={{ maxHeight: '520px' }}>
        <img
          src="/images/north-idaho-school-districts-guide.webp"
          alt="North Idaho School Districts Guide — 271 vs 273 vs 272 comparison"
          className="w-full object-cover object-center"
          style={{ maxHeight: '520px' }}
        />
      </div>

      {/* Article Body */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            {/* Article */}
            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">

              <p className="mb-6">
                The three public school districts most North Idaho relocation families end up comparing —{' '}
                <strong className="text-[#1C1A17]">Coeur d&apos;Alene School District 271</strong> (~9,650 students),{' '}
                <strong className="text-[#1C1A17]">Post Falls School District 273</strong> (~5,700 students), and{' '}
                <strong className="text-[#1C1A17]">Lakeland Joint School District 272</strong> in Rathdrum (~5,780 students) — each serve a different slice of Kootenai County and operate on meaningfully different schedules, programs, and attendance philosophies. Since Idaho&apos;s revised open enrollment law took effect on <strong className="text-[#1C1A17]">July 1, 2023</strong>, families also have the legal right to apply to any public school in the state with available space — across district lines, with priority given to applications submitted by <strong className="text-[#1C1A17]">February 1</strong> for the following school year. The short version: which district your address falls into matters far less than it used to, but knowing the lay of the land before you make an offer still saves real headaches later.
              </p>

              <p className="mb-10">Schools are one part of the relocation decision. The{' '}<a href="/relocating-to-north-idaho" className="text-[#C4842A] hover:underline">complete North Idaho relocation guide for out-of-state buyers</a>{' '}covers everything else &mdash; cost of living, neighborhoods, taxes, and the buying process.</p>

              {/* District Table */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Three Public Districts at a Glance
              </h2>
              <div className="overflow-x-auto my-6 mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: '#2A2722' }}>
                      <th className="text-left px-4 py-3 font-dm-sans font-semibold text-xs uppercase tracking-wide text-[#C4842A]">District</th>
                      <th className="text-left px-4 py-3 font-dm-sans font-semibold text-xs uppercase tracking-wide text-[#C4842A]">#</th>
                      <th className="text-left px-4 py-3 font-dm-sans font-semibold text-xs uppercase tracking-wide text-[#C4842A]">Enrollment</th>
                      <th className="text-left px-4 py-3 font-dm-sans font-semibold text-xs uppercase tracking-wide text-[#C4842A]">Geographic Coverage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {districts.map((d, i) => (
                      <tr key={d.number} style={{ backgroundColor: i % 2 === 0 ? '#F5EFE6' : '#EDE6DA' }}>
                        <td className="px-4 py-3 font-semibold text-[#1C1A17] font-dm-sans">{d.name}</td>
                        <td className="px-4 py-3 text-[#C4842A] font-semibold font-dm-sans">{d.number}</td>
                        <td className="px-4 py-3 text-[#5C5650] font-dm-sans">{d.enrollment}</td>
                        <td className="px-4 py-3 text-[#5C5650] font-dm-sans">{d.coverage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mb-10">
                Each district sets its own school calendar, transportation routes, attendance zones, and program emphases. None of them are &ldquo;best&rdquo; in an absolute sense — they serve different communities with different priorities, and the right fit depends on where you&apos;re buying, what your kids need, and what kind of school culture you want.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">
                Coeur d&apos;Alene School District 271
              </h3>
              <p className="mb-6">
                District 271 is the largest of the three and covers the city of Coeur d&apos;Alene, Dalton Gardens, and portions of southern Hayden. It operates roughly a dozen elementary schools, multiple middle schools, and two comprehensive high schools — Coeur d&apos;Alene High School and Lake City High School — plus an alternative high school program. The district is notable for two <strong className="text-[#1C1A17]">magnet schools</strong> that use application-and-lottery enrollment rather than strict attendance zones:{' '}
                <strong className="text-[#1C1A17]">Sorensen Magnet School of the Arts and Humanities</strong> and{' '}
                <strong className="text-[#1C1A17]">Ramsey Magnet School of Science</strong>. The lottery priority order for both magnets is: children of staff, siblings of current students, students inside the magnet attendance zone, and finally students outside the zone or outside the district.
              </p>
              <p className="mb-10">
                District 271 is the district most relocation families default to assuming they want — partly because Coeur d&apos;Alene is the most recognizable city name, partly because the magnet programs are well-regarded. But &ldquo;the CdA district&rdquo; covers a wide geographic area, and the experience at one elementary school can be substantially different from another five miles away.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">
                Post Falls School District 273
              </h3>
              <p className="mb-6">
                District 273 serves Post Falls and parts of west Kootenai County. It runs seven elementary schools, two middle schools, a comprehensive high school (Post Falls High School), and <strong className="text-[#1C1A17]">New Vision High School</strong> — an alternative 9–12 program for students who need a different academic environment.
              </p>
              <p className="mb-10">
                What out-of-state families often miss: Post Falls is one of the fastest-growing cities in Idaho. The district has been opening new schools at a steady pace — Prairie View Elementary, West Ridge Elementary, and Treaty Rock Elementary are all relatively recent additions. Growth means new facilities and updated programs, but it also means <strong className="text-[#1C1A17]">attendance boundaries shift more often</strong> than they do in slower-growing districts. A neighborhood that feeds one elementary today might feed a new school in three years. If school boundary stability is a priority for you, ask about projected boundary changes during your home search.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">
                Lakeland Joint School District 272
              </h3>
              <p className="mb-6">
                District 272 — officially &ldquo;Lakeland Joint&rdquo; because it spans portions of both Kootenai and Bonner counties — serves Rathdrum, Spirit Lake, Athol, parts of Hayden Lake, Twin Lakes, and outlying rural areas. It&apos;s the most geographically dispersed of the three, which translates into longer bus routes for some families and a more rural school culture overall.
              </p>
              <p className="mb-6">
                Lakeland operates Lakeland High School in Rathdrum, Lakeland Junior High, Timberlake High School in Spirit Lake, Lakes Magnet Middle School, and several elementary schools spread across the district. Because of its size and rural reach, Lakeland is the district most likely to be the right fit for buyers purchasing acreage outside city limits.
              </p>
              <p className="mb-10">
                The district&apos;s official attendance zone identifier is web-based — you enter a home address and it returns the assigned school and bus route. Run it before you write an offer on a home in the Lakeland service area. Boundaries on the edges of the district can be counterintuitive.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Idaho&apos;s Open Enrollment Law: What Actually Changed in 2023
              </h2>
              <p className="mb-6">
                Idaho&apos;s revised open enrollment law (<strong className="text-[#1C1A17]">Senate Bill 1125</strong>), effective <strong className="text-[#1C1A17]">July 1, 2023</strong>, did something significant: it gave every family in the state the legal right to apply to any public school with available space, including schools outside their resident district. Here&apos;s how it actually works:
              </p>
              <div className="my-6 space-y-3 mb-8">
                {openEnrollmentPoints.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#C4842A] font-semibold mt-1 flex-shrink-0">→</span>
                    <span><strong className="text-[#1C1A17]">{item.bold}</strong>{item.rest}</span>
                  </div>
                ))}
              </div>
              <p className="mb-10">
                For relocation families, this is the single most important policy shift in recent Idaho education law. It means the question &ldquo;what district is this house in?&rdquo; is no longer the gatekeeper question it used to be. You can buy a home in Post Falls District 273 and apply to a Coeur d&apos;Alene District 271 magnet school — or vice versa. The catch is that <strong className="text-[#1C1A17]">space and February 1 priority are real constraints</strong>, so families who want a cross-district placement need to plan their move and their application timing together, not sequentially.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Charter Schools in Kootenai County
              </h2>
              <p className="mb-6">
                Idaho has a robust public charter school system overseen by the{' '}
                <a href="https://chartercommission.idaho.gov" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Idaho Public Charter School Commission</a>{' '}
                (IPCSC). Kootenai County families have several well-established public charter options, all tuition-free, all using lottery-based admission.
              </p>
              <p className="mb-4">
                <strong className="text-[#1C1A17]">Coeur d&apos;Alene Charter Academy</strong> (grades 6–12) is a college-preparatory charter located in Coeur d&apos;Alene. Applications for full-time admission are due by the <strong className="text-[#1C1A17]">second Friday in March</strong> for the lottery drawing. Lottery priority order: returning students, then children of founders or full-time employees (capped at 10%), then siblings of enrolled students, then applicants in the primary attendance area, then random lottery.
              </p>
              <p className="mb-4">
                <strong className="text-[#1C1A17]">North Idaho STEM Charter Academy</strong> is a K–12 STEM-focused public charter in Rathdrum, serving approximately <strong className="text-[#1C1A17]">573 students</strong> with an 18:1 student-teacher ratio. It draws from across the county thanks to charter admission rules and is one of the few K–12 charters in the region.
              </p>
              <p className="mb-10">
                <strong className="text-[#1C1A17]">Kootenai Classical Academy</strong> is a newer classical-education public charter operating in the county. The IPCSC maintains the{' '}
                <a href="https://chartercommission.idaho.gov/pcsc-schools/by-region/region-1" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Region 1 charter list</a>{' '}
                covering all charter schools in the North Idaho panhandle.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Private Schools and Religious Education
              </h2>
              <p className="mb-6">
                Kootenai County has more than <strong className="text-[#1C1A17]">21 private schools</strong> serving families looking for religious, classical, or alternative academic environments. A few of the most established:
              </p>
              <div className="my-6 space-y-3 mb-8">
                {[
                  { name: 'Classical Christian Academy', location: 'Rathdrum', desc: 'A full K–12 classical Christian program.' },
                  { name: "Coeur d'Alene Classical Christian School", location: "Coeur d'Alene", desc: 'Another full K–12 classical Christian program.' },
                  { name: 'Catholic, Lutheran, and non-denominational schools', location: "CdA, Hayden, and Post Falls", desc: 'Several options across the county.' },
                  { name: 'Private and micro-schools', location: 'County-wide', desc: 'A growing number of smaller schools, particularly from the post-2020 wave of alternative education growth.' },
                ].map((school, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#C4842A] font-semibold mt-1 flex-shrink-0">→</span>
                    <span><strong className="text-[#1C1A17]">{school.name}</strong> — {school.location}. {school.desc}</span>
                  </div>
                ))}
              </div>
              <p className="mb-10">
                The Idaho State Department of Education publishes an{' '}
                <a href="https://www.sde.idaho.gov" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">annual private schools list</a>{' '}
                (currently the 2025–2026 directory) that documents every registered private school in the state — the canonical source if you want a complete count.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Homeschooling and Hybrid Models
              </h2>
              <p className="mb-6">
                Idaho has one of the most permissive homeschooling environments in the country. There is <strong className="text-[#1C1A17]">no state registration requirement</strong> to homeschool — families are not required to notify the state, submit curriculum, or report attendance. That regulatory simplicity, combined with North Idaho&apos;s strong homeschool community, makes the region a popular destination for families pursuing homeschool, classical-at-home, or hybrid models.
              </p>
              <p className="mb-10">
                Several local organizations offer hybrid programs — two or three days a week of in-person instruction combined with at-home learning — that operate as private schools, microschools, or co-ops. If hybrid education is part of your plan, your real estate search should include proximity to one of these hubs, which are concentrated around Coeur d&apos;Alene, Hayden, and Rathdrum.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What This Means for Your Home Search
              </h2>
              <p className="mb-6">Here is how I think about school district questions with relocating families:</p>
              <div className="my-6 space-y-5 mb-8">
                {[
                  {
                    scenario: 'If your kids will attend public school in their assigned neighborhood school',
                    detail: 'district boundaries still matter. You want to know exactly which elementary, middle, and high school a given address feeds into, and you want to verify it with the district\'s address lookup — not assume based on the listing description.',
                  },
                  {
                    scenario: 'If you\'re considering open enrollment to a different district',
                    detail: 'the address matters less, but timing matters more. Apply by February 1 for the following school year, and have a backup plan if your first-choice school is at capacity.',
                  },
                  {
                    scenario: 'If you\'re pursuing a charter or magnet school',
                    detail: 'the district your home falls into is largely irrelevant. What matters is the lottery deadline (second Friday in March for CdA Charter Academy; varies by school for others), and whether you have flexibility on which charter is your first choice.',
                  },
                  {
                    scenario: 'If you\'re homeschooling or hybrid',
                    detail: 'you have the most geographic flexibility. The home search becomes about lifestyle fit, not school zones — though proximity to a hybrid program or co-op can shape the decision.',
                  },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-[#C4842A] pl-5">
                    <p><strong className="text-[#1C1A17]">{item.scenario}</strong> — {item.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mb-10">
                In any of those scenarios, the school question should not be the last item on the home search checklist. It should be near the top, and it should be researched in parallel with the offer — not after.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Working With a Realtor Who Understands the District Map
              </h2>
              <p className="mb-6">
                There are plenty of Realtors who can pull up the listing&apos;s assigned school in the MLS. What I bring to relocating families is a working knowledge of how each district handles boundary changes, what the open enrollment landscape actually looks like in practice, which charters have realistic lottery odds, and which neighborhoods feed which schools — including the ones where a single street can determine whether your kid goes to one elementary or another five minutes away.
              </p>
              <p className="mb-10">
                If you&apos;re moving to Kootenai County with school-age kids and want to talk through the specific options for your family before you make an offer, reach out. I&apos;ll pull the address-level data, talk through the trade-offs, and help you align the home search with the school search instead of treating them as separate problems.
              </p>

              {/* FAQ */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-6 font-semibold">
                Common Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
                    <h3 className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-3">{faq.q}</h3>
                    <p className="font-dm-sans text-[15px] text-[#5C5650] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="lg:sticky lg:top-8 space-y-6">

                {/* District Quick Reference */}
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">District Quick Reference</p>
                  <div className="space-y-4">
                    {[
                      { num: '271', name: "Coeur d'Alene", students: '~9,650 students', url: 'https://www.cdaschools.org' },
                      { num: '273', name: 'Post Falls', students: '~5,700 students', url: 'https://www.pfsd.com' },
                      { num: '272', name: 'Lakeland Joint', students: '~5,780 students', url: 'https://www.sd272.org' },
                    ].map((d) => (
                      <div key={d.num} className="border-t border-[#2C2A27] pt-4 first:border-0 first:pt-0">
                        <p className="font-dm-sans text-xs text-[#C4842A] font-semibold uppercase tracking-wide mb-0.5">District {d.num}</p>
                        <a href={d.url} target="_blank" rel="noopener noreferrer" className="font-dm-sans text-sm font-semibold text-[#FAFAF8] hover:text-[#C4842A] transition-colors">{d.name} Schools</a>
                        <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">{d.students}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Dates */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Key Enrollment Dates</p>
                  <div className="space-y-3">
                    {[
                      { date: 'February 1', label: 'Open enrollment priority deadline', note: 'For following school year' },
                      { date: '2nd Fri. March', label: "CdA Charter Academy deadline", note: 'Lottery drawing date' },
                      { date: 'July 1, 2023', label: 'SB 1125 effective date', note: 'Idaho open enrollment law' },
                    ].map((item) => (
                      <div key={item.date} className="border-t border-[#E8DDD0] pt-3 first:border-0 first:pt-0">
                        <p className="font-dm-sans text-sm font-semibold text-[#C4842A]">{item.date}</p>
                        <p className="font-dm-sans text-xs text-[#1C1A17] font-semibold mt-0.5">{item.label}</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-0.5">{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Links */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Key Resources</p>
                  <div className="space-y-4">
                    {[
                      { name: 'CdA 271 — Attendance Zones', url: 'https://www.cdaschools.org/page/attendance-zones', desc: 'Address lookup & magnet info' },
                      { name: 'Post Falls 273', url: 'https://www.pfsd.com', desc: 'Boundary maps & school info' },
                      { name: 'Lakeland Joint 272', url: 'https://www.sd272.org', desc: 'Address zone identifier' },
                      { name: "CdA Charter Academy", url: 'https://www.cdacharter.org/admission', desc: 'Lottery admission details' },
                      { name: 'Idaho Charter Commission', url: 'https://chartercommission.idaho.gov/pcsc-schools/by-region/region-1', desc: 'All Region 1 charter schools' },
                      { name: 'Idaho EdNews — Open Enrollment', url: 'https://www.idahoednews.org/school-policy/open-enrollment-a-law-that-won-lofty-praise-but-will-likely-have-little-impact', desc: 'SB 1125 law coverage' },
                    ].map((link) => (
                      <div key={link.name} className="border-t border-[#E8DDD0] pt-3 first:border-0 first:pt-0">
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="font-dm-sans text-sm font-semibold text-[#C4842A] hover:underline">{link.name}</a>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-0.5">{link.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* About Shirin */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your Local Agent</p>
                  <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp, Licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate" className="w-16 h-16 rounded-full object-cover mb-3" />
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
                  <p className="font-dm-sans text-xs text-[#9A9590] mb-3">Licensed REALTOR® · SRES® · Berkshire Hathaway HomeServices Jacklin Real Estate · #1371861</p>
                  <p className="font-dm-sans text-xs text-[#5C5650] leading-relaxed mb-4">
                    Shirin runs the address lookup for every home she shows, knows which neighborhoods are mid-boundary-change, and understands the charter lottery timelines from the inside.
                  </p>
                  <a href="/contact" className="block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    Ask Shirin
                  </a>
                </div>

                {/* Related Articles */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Articles</p>
                  <div className="space-y-4">
                    <a href="/articles/spokane-vs-coeur-dalene-which-is-right-for-you" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Spokane vs. Coeur d&apos;Alene: Why So Many Buyers End Up on the Idaho Side</p>
                      <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Taxes, prices, and lifestyle compared</p>
                    </a>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/best-places-to-live-north-idaho-leaving-california" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Best Places to Live in North Idaho for People Leaving California</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">CdA vs Post Falls vs Hayden vs Sandpoint</p>
                      </a>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/buying-property-prairie-wells-septic-roads" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Buying Property on the Prairie: Wells, Septic, and Roads</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Infrastructure costs on rural acreage</p>
                      </a>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/north-idaho-microclimates-rathdrum-prairie-sandpoint-snow" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho Micro-Climates: Rathdrum Prairie vs. Sandpoint Snowfall</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">What winter actually looks like by address</p>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      <div className="border-t border-[#E8DDD0]" />

      {/* Bottom CTA */}
      <section className="bg-[#1C1A17] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Relocating with School-Age Kids</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-[#FAFAF8] mb-6 leading-tight font-semibold">
            Want to Align Your Home Search with the School Search?
          </h2>
          <p className="font-dm-sans text-[#C4BDB4] text-lg mb-10 leading-relaxed">
            I&apos;ll run the address lookup, talk through which charters have realistic odds, and help you time the offer and the enrollment application so one doesn&apos;t undercut the other.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold py-4 px-8 transition-colors">
              Get in Touch
            </a>
            <a href="/articles" className="border border-[#5C5650] hover:border-[#9A9590] text-[#C4BDB4] hover:text-[#FAFAF8] font-dm-sans font-semibold py-4 px-8 transition-colors">
              More Articles
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
