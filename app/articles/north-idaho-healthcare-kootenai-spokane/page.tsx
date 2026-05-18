import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'North Idaho Healthcare Guide: Kootenai Health, Northwest Specialty & Spokane Commutes | Shirin Abplanalp',
  description:
    "A Realtor's honest assessment of healthcare access for North Idaho retirees: Kootenai Health's Level II Trauma designation, Northwest Specialty Hospital in Post Falls, when Spokane is actually necessary, and Life Flight Network coverage.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/articles/north-idaho-healthcare-kootenai-spokane',
  },
  openGraph: {
    title: 'Navigating Healthcare in Kootenai County: Regional Care vs. Spokane Commutes',
    description:
      "For the overwhelming majority of medical needs, you do not need to drive to Spokane. Here's what North Idaho's healthcare ecosystem actually looks like.",
    url: 'https://www.realestatewithshirin.com/articles/north-idaho-healthcare-kootenai-spokane',
    type: 'article',
    publishedTime: '2026-05-23',
    authors: ['Shirin Abplanalp'],
    images: ['https://www.realestatewithshirin.com/images/north-idaho-kootenai-health-helicopter.webp'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-healthcare-kootenai-spokane#article',
  headline: 'Navigating Healthcare in Kootenai County: Regional Care vs. Spokane Commutes',
  description:
    "A working Realtor's honest assessment of healthcare access for North Idaho retirees: Kootenai Health's Level II Trauma designation, Northwest Specialty Hospital in Post Falls, Spokane referrals, and Life Flight Network coverage.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/north-idaho-kootenai-health-helicopter.webp',
    width: 1672,
    height: 941,
  },
  author: {
    '@type': 'Person',
    '@id': 'https://www.realestatewithshirin.com/#agent',
    name: 'Shirin Abplanalp',
    jobTitle: 'Licensed REALTOR®',
    url: 'https://www.realestatewithshirin.com/about',
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Real Estate License',
        identifier: '1371861',
        recognizedBy: { '@type': 'Organization', name: 'Idaho Real Estate Commission' },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Designation',
        name: 'Seniors Real Estate Specialist®',
        abbreviation: 'SRES®',
        recognizedBy: { '@type': 'Organization', name: 'National Association of REALTORS®', url: 'https://www.nar.realtor' },
      },
    ],
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.realestatewithshirin.com/#business',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.realestatewithshirin.com/images/shirin-logo.png',
      width: 1254,
      height: 1254,
    },
  },
  isPartOf: {
    '@type': 'CollectionPage',
    '@id': 'https://www.realestatewithshirin.com/articles',
    name: 'Northern Idaho Real Estate Articles',
    url: 'https://www.realestatewithshirin.com/articles',
  },
  datePublished: '2026-05-23T00:00:00-07:00',
  dateModified: '2026-05-23T00:00:00-07:00',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-healthcare-kootenai-spokane',
  },
  url: 'https://www.realestatewithshirin.com/articles/north-idaho-healthcare-kootenai-spokane',
  keywords: [
    'Kootenai Health',
    'North Idaho healthcare',
    'Coeur d\'Alene hospital',
    'Northwest Specialty Hospital',
    'Providence Sacred Heart Spokane',
    'Life Flight Network',
    'Idaho Level II Trauma Center',
    'Kootenai County medical care',
    'North Idaho retiree healthcare',
    'Sandpoint hospital',
  ],
  articleSection: 'Senior Real Estate',
  wordCount: 3600,
  about: [
    {
      '@type': 'Hospital',
      '@id': 'https://www.kh.org/#hospital',
      name: 'Kootenai Health',
      url: 'https://www.kh.org',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2003 Kootenai Health Way',
        addressLocality: "Coeur d'Alene",
        addressRegion: 'ID',
        postalCode: '83814',
        addressCountry: 'US',
      },
      medicalSpecialty: ['Trauma', 'Cardiology', 'Oncology', 'Orthopedics', 'Neurosurgery', 'Stroke Care', 'Maternity', 'Behavioral Health'],
      description: '330-bed regional medical center serving Kootenai, Bonner, Boundary, Benewah, and Shoshone counties. American College of Surgeons-verified Level II Trauma Center and Idaho TSE-designated Level II Trauma Center.',
    },
    {
      '@type': 'Hospital',
      '@id': 'https://northwestspecialtyhospital.com/#hospital',
      name: 'Northwest Specialty Hospital',
      url: 'https://northwestspecialtyhospital.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1593 East Polston Avenue',
        addressLocality: 'Post Falls',
        addressRegion: 'ID',
        postalCode: '83854',
        addressCountry: 'US',
      },
      telephone: '+1-208-262-2300',
      medicalSpecialty: ['Orthopedic Surgery', 'General Surgery', 'Bariatric Surgery', 'Spine Surgery', 'Pain Management', 'Ophthalmology', 'Imaging'],
    },
  ],
  mentions: [
    {
      '@type': 'Hospital',
      '@id': 'https://www.providence.org/locations/wa/sacred-heart-medical-center#hospital',
      name: 'Providence Sacred Heart Medical Center',
      url: 'https://www.providence.org/locations/wa/sacred-heart-medical-center',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '101 W 8th Avenue',
        addressLocality: 'Spokane',
        addressRegion: 'WA',
        postalCode: '99204',
        addressCountry: 'US',
      },
      telephone: '+1-509-474-3131',
      description: 'Level II Adult Trauma Center, Level II Pediatric Trauma Center, Level IV NICU, regional cancer and transplant center.',
    },
    {
      '@type': 'Hospital',
      name: 'MultiCare Deaconess Hospital',
      url: 'https://www.multicare.org/deaconess-hospital-emergency-department',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '800 West 5th Avenue',
        addressLocality: 'Spokane',
        addressRegion: 'WA',
        postalCode: '99204',
        addressCountry: 'US',
      },
      telephone: '+1-509-603-5800',
    },
    {
      '@type': 'MedicalOrganization',
      name: 'American College of Surgeons Committee on Trauma',
      url: 'https://www.facs.org/quality-programs/trauma',
    },
    {
      '@type': 'GovernmentOrganization',
      name: 'Idaho Time Sensitive Emergency System',
      url: 'https://healthandwelfare.idaho.gov/providers/idaho-time-sensitive-emergency/idaho-tse-facility-designations',
      parentOrganization: {
        '@type': 'GovernmentOrganization',
        name: 'Idaho Department of Health and Welfare',
        url: 'https://healthandwelfare.idaho.gov',
      },
    },
    {
      '@type': 'EmergencyService',
      name: 'Life Flight Network',
      url: 'https://www.lifeflight.org',
      telephone: '+1-800-232-0911',
      areaServed: ['Oregon', 'Washington', 'Idaho', 'Montana'],
      description: 'Critical care air medical transport with a helicopter base located in Coeur d\'Alene, Idaho.',
    },
    {
      '@type': 'MedicalOrganization',
      name: 'Kootenai Heart Clinics',
      url: 'https://www.kh.org/heart-services/kootenai-heart-clinics',
      parentOrganization: {
        '@type': 'Hospital',
        '@id': 'https://www.kh.org/#hospital',
      },
    },
  ],
  citation: [
    { '@type': 'CreativeWork', name: 'Kootenai Health — Level II Trauma Designation', url: 'https://www.kh.org/level-ii-trauma' },
    { '@type': 'CreativeWork', name: 'Kootenai Health — Trauma Services', url: 'https://www.kh.org/emergency/trauma-services' },
    { '@type': 'CreativeWork', name: 'Kootenai Heart Clinics', url: 'https://www.kh.org/heart-services/kootenai-heart-clinics' },
    { '@type': 'CreativeWork', name: 'Northwest Specialty Hospital — Imaging Services', url: 'https://northwestspecialtyhospital.com/imaging' },
    { '@type': 'CreativeWork', name: 'Providence Sacred Heart Medical Center', url: 'https://www.providence.org/locations/wa/sacred-heart-medical-center' },
    { '@type': 'CreativeWork', name: 'Idaho TSE Facility Designations', url: 'https://healthandwelfare.idaho.gov/providers/idaho-time-sensitive-emergency/idaho-tse-facility-designations' },
    { '@type': 'CreativeWork', name: 'Life Flight Network — Coeur d\'Alene Base Announcement', url: 'https://www.lifeflight.org/newsroom/life-flight-network-to-add-helicopter-critical-care-transport-base-to-coeur-dalene-idaho' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-healthcare-kootenai-spokane#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need to drive to Spokane for major medical care if I live in Kootenai County?',
      acceptedAnswer: { '@type': 'Answer', text: "For the vast majority of medical needs, no. Kootenai Health in Coeur d'Alene is an American College of Surgeons-verified Level II Trauma Center and the only ACS-verified Level II trauma facility in the region. It handles heart attacks, strokes, major trauma, cancer treatment, joint replacement, and complex surgery on-site. Spokane is the right destination for pediatric trauma (Providence Sacred Heart has the only Level II Pediatric Trauma Center in Eastern Washington), organ transplant, advanced burn care, and a handful of academic subspecialties. For most retirees, those are rare scenarios rather than day-to-day healthcare reality." },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to drive from Coeur d\'Alene to a Spokane hospital?',
      acceptedAnswer: { '@type': 'Answer', text: 'Roughly 35–45 minutes from Coeur d\'Alene to downtown Spokane in typical conditions via I-90. Post Falls is 25–30 minutes, Hayden Lake or Dalton Gardens is 40–50 minutes, and Sandpoint is roughly 90 minutes. Winter storms can extend these drive times by 30–50%. For non-ambulatory emergency transport, Life Flight Network operates a helicopter critical care base in Coeur d\'Alene with dispatch through (800) 232-0911.' },
    },
    {
      '@type': 'Question',
      name: "What is Kootenai Health's trauma designation?",
      acceptedAnswer: { '@type': 'Answer', text: 'Kootenai Health holds two Level II Trauma Center designations: one from the American College of Surgeons Committee on Trauma (ACS) — the national gold standard — and one from the Idaho Time Sensitive Emergency System administered through the Idaho Department of Health and Welfare. Kootenai is the only ACS-verified Level II trauma center in the region, with on-site cardiothoracic surgery, neurosurgery, interventional cardiology, ICU, and Level III NICU care.' },
    },
    {
      '@type': 'Question',
      name: "What's the difference between Kootenai Health and Northwest Specialty Hospital?",
      acceptedAnswer: { '@type': 'Answer', text: 'Kootenai Health is the regional 330-bed trauma center handling emergency, acute, and complex care across all major service lines. Northwest Specialty Hospital in Post Falls is a physician-owned specialty hospital focused on elective surgical care — particularly orthopedics, spine, general surgery, bariatrics, and pain management — along with comprehensive outpatient imaging including the only open MRI in North Idaho. They complement each other rather than compete; many local patients use both depending on the type of care needed.' },
    },
    {
      '@type': 'Question',
      name: 'Is there air ambulance service in North Idaho?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Life Flight Network operates a helicopter critical care transport base in Coeur d\'Alene, providing rapid air transport for patients requiring time-sensitive transfer to higher-level care. Life Flight also offers an annual household membership (approximately $80 per year) that covers out-of-pocket transport costs for members, which is particularly worth considering for residents in rural areas of Kootenai or Bonner County.' },
    },
    {
      '@type': 'Question',
      name: 'Can I keep my current Spokane specialist if I move to North Idaho?',
      acceptedAnswer: { '@type': 'Answer', text: 'Generally yes, depending on your insurance plan. Original Medicare covers care at hospitals and providers on both sides of the Idaho-Washington border. Medicare Advantage plans and commercial insurance plans vary in their network configurations — some treat Spokane and Coeur d\'Alene as a single regional network, others differentiate. Verify your specific plan\'s in-network providers on both sides of the state line before you move, especially if you have established specialist relationships you want to maintain.' },
    },
    {
      '@type': 'Question',
      name: 'How easy is it to find a primary care doctor or specialist in Kootenai County?',
      acceptedAnswer: { '@type': 'Answer', text: 'Easier than relocation buyers typically expect. Kootenai Clinic operates more than 40 primary care and specialty locations across the county, supplemented by Heritage Health (a federally qualified health center system), multiple independent multi-specialty groups, and urgent care clinics in every major city. New patient appointments at popular specialists can run 4–8 weeks, which is comparable to most U.S. markets.' },
    },
    {
      '@type': 'Question',
      name: 'What about healthcare access if I move to Sandpoint or rural Bonner County?',
      acceptedAnswer: { '@type': 'Answer', text: 'It changes the equation. Bonner General Health in Sandpoint handles emergency care and primary services but is a smaller community hospital. Complex care typically routes through Kootenai Health (about an hour south on US-95) or to Spokane (90 minutes). For retirees with active health conditions requiring frequent specialist visits, the additional drive time is a real factor. Life Flight Network membership becomes more valuable the further north you live.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-healthcare-kootenai-spokane#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Navigating Healthcare in Kootenai County: Regional Care vs. Spokane Commutes',
      item: 'https://www.realestatewithshirin.com/articles/north-idaho-healthcare-kootenai-spokane',
    },
  ],
}

const driveTimes = [
  { from: 'Post Falls', to: 'Providence Sacred Heart', time: '25–30 min' },
  { from: "Coeur d'Alene", to: 'Downtown Spokane', time: '35–45 min' },
  { from: 'Hayden Lake / Dalton Gardens', to: 'Downtown Spokane', time: '40–50 min' },
  { from: 'Rathdrum', to: 'Downtown Spokane', time: '30–40 min' },
  { from: 'Sandpoint', to: 'Downtown Spokane', time: '~90 min' },
]

const kootenaiServices = [
  { label: 'Kootenai Heart Clinics', detail: 'Cardiology, electrophysiology, advanced heart disease, cardiothoracic surgery' },
  { label: 'Kootenai Cancer Services', detail: 'Medical oncology, radiation oncology, surgical oncology, infusion therapy' },
  { label: 'Orthopedics and joint replacement', detail: 'One of the busiest joint replacement programs in the region' },
  { label: 'Stroke care', detail: 'Designated stroke center with 24/7 interventional capability' },
  { label: 'Neurosciences', detail: 'Growing program including neurosurgery' },
  { label: 'Level III NICU and maternity', detail: "Women's health, labor and delivery, neonatal intensive care" },
  { label: 'Behavioral health', detail: 'Inpatient and outpatient services' },
  { label: 'Comprehensive imaging', detail: 'CT, MRI, PET, interventional radiology, breast imaging' },
]

const spokaneCases = [
  { num: '01', title: 'Pediatric trauma', detail: 'Providence Sacred Heart is the only Level II Pediatric Trauma Center and Level IV NICU in Eastern Washington and the surrounding Idaho/Montana region. For severe pediatric trauma, complex pediatric cardiac care, or premature infants requiring the highest NICU support, Spokane is the right destination.' },
  { num: '02', title: 'Organ transplant', detail: 'Providence Sacred Heart operates a regional transplant center handling kidney transplants and other organ transplant programs. Kootenai does not.' },
  { num: '03', title: 'Advanced subspecialty surgery and rare conditions', detail: 'A handful of subspecialties — pediatric subspecialty surgery, advanced burn care, specific complex cancers, and certain rare-disease centers — are concentrated at either Providence Sacred Heart or MultiCare Deaconess Hospital.' },
  { num: '04', title: 'Academic medical opinions', detail: "For second opinions on rare or complex conditions, Spokane's academic-affiliated programs offer broader specialist depth than Coeur d'Alene. The typical pattern is consultation in Spokane and ongoing care back in Kootenai County." },
  { num: '05', title: 'Specific specialist preferences', detail: "Some retirees move to North Idaho already established with a Spokane specialist they want to keep. That's a personal choice, not a system limitation, and it's worth budgeting drive time accordingly." },
]

const faqs = [
  {
    q: 'Do I need to drive to Spokane for major medical care if I live in Kootenai County?',
    a: "For the vast majority of medical needs, no. Kootenai Health in Coeur d'Alene is an American College of Surgeons-verified Level II Trauma Center and the only ACS-verified Level II trauma facility in the region. It handles heart attacks, strokes, major trauma, cancer treatment, joint replacement, and complex surgery on-site. Spokane is the right destination for pediatric trauma (Providence Sacred Heart has the only Level II Pediatric Trauma Center in Eastern Washington), organ transplant, advanced burn care, and a handful of academic subspecialties. For most retirees, those are rare scenarios rather than day-to-day healthcare reality.",
  },
  {
    q: "How long does it take to drive from Coeur d'Alene to a Spokane hospital?",
    a: "Roughly 35–45 minutes from Coeur d'Alene to downtown Spokane in typical conditions via I-90. Post Falls is 25–30 minutes, Hayden Lake or Dalton Gardens is 40–50 minutes, and Sandpoint is roughly 90 minutes. Winter storms can extend these drive times by 30–50%. For non-ambulatory emergency transport, Life Flight Network operates a helicopter critical care base in Coeur d'Alene with dispatch through (800) 232-0911.",
  },
  {
    q: "What is Kootenai Health's trauma designation?",
    a: 'Kootenai Health holds two Level II Trauma Center designations: one from the American College of Surgeons Committee on Trauma (ACS) — the national gold standard — and one from the Idaho Time Sensitive Emergency System administered through the Idaho Department of Health and Welfare. Kootenai is the only ACS-verified Level II trauma center in the region, with on-site cardiothoracic surgery, neurosurgery, interventional cardiology, ICU, and Level III NICU care.',
  },
  {
    q: "What's the difference between Kootenai Health and Northwest Specialty Hospital?",
    a: 'Kootenai Health is the regional 330-bed trauma center handling emergency, acute, and complex care across all major service lines. Northwest Specialty Hospital in Post Falls is a physician-owned specialty hospital focused on elective surgical care — particularly orthopedics, spine, general surgery, bariatrics, and pain management — along with comprehensive outpatient imaging including the only open MRI in North Idaho. They complement each other rather than compete; many local patients use both depending on the type of care needed.',
  },
  {
    q: 'Is there air ambulance service in North Idaho?',
    a: "Yes. Life Flight Network operates a helicopter critical care transport base in Coeur d'Alene, providing rapid air transport for patients requiring time-sensitive transfer to higher-level care — including pediatric trauma transfers to Providence Sacred Heart in Spokane. Life Flight also offers an annual household membership (~$80/year) that covers out-of-pocket transport costs for members, which is particularly worth considering for residents in rural areas of Kootenai or Bonner County.",
  },
  {
    q: 'Can I keep my current Spokane specialist if I move to North Idaho?',
    a: "Generally yes, depending on your insurance plan. Original Medicare covers care at hospitals and providers on both sides of the Idaho-Washington border. Medicare Advantage plans and commercial insurance plans vary — some treat Spokane and Coeur d'Alene as a single regional network, others differentiate. Verify your specific plan's in-network providers on both sides of the state line before you move, especially if you have established specialist relationships you want to maintain.",
  },
  {
    q: 'How easy is it to find a primary care doctor or specialist in Kootenai County?',
    a: "Easier than relocation buyers typically expect. Kootenai Clinic operates more than 40 primary care and specialty locations across the county, supplemented by Heritage Health (a federally qualified health center system), multiple independent multi-specialty groups, and urgent care clinics in every major city. New patient appointments at popular specialists can run 4–8 weeks, which is comparable to most U.S. markets.",
  },
  {
    q: 'What about healthcare access if I move to Sandpoint or rural Bonner County?',
    a: "It changes the equation. Bonner General Health in Sandpoint handles emergency care and primary services but is a smaller community hospital. Complex care typically routes through Kootenai Health (about an hour south on US-95) or to Spokane (90 minutes). For retirees with active health conditions requiring frequent specialist visits, the additional drive time is a real factor. Life Flight Network membership becomes more valuable the further north you live.",
  },
]

export default function NorthIdahoHealthcarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#F5EFE6] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
            <a href="/" className="hover:text-[#C4842A] transition-colors">Home</a>
            <span className="mx-2">·</span>
            <a href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</a>
            <span className="mx-2">·</span>
            <span className="text-[#5C5650]">North Idaho Healthcare Guide</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Senior Real Estate</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">14 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">May 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Navigating Healthcare in Kootenai County: Regional Care vs. Spokane Commutes
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            For the overwhelming majority of medical needs, you do not need to drive to Spokane. Here is what North Idaho&apos;s healthcare ecosystem actually looks like.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, Licensed REALTOR® at eXp Realty"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · SRES® · eXp Realty · May 23, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1C1A17] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">330</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Kootenai Health Beds</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Regional medical center</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">Level II</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">ACS Trauma Center</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Only one in the region</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">40+</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Kootenai Clinic Sites</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Primary &amp; specialty care</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">~$80</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Life Flight / Year</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Household membership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full overflow-hidden" style={{ maxHeight: '520px' }}>
        <img
          src="/images/north-idaho-kootenai-health-helicopter.webp"
          alt="Kootenai Health regional medical center with Life Flight helicopter, Coeur d'Alene Idaho"
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
                The honest answer most retirees moving to Dalton Gardens, Hayden Lake, or Post Falls don&apos;t get from a relocation brochure is this: for the overwhelming majority of medical needs — including major trauma, cardiac care, cancer treatment, joint replacement, and complex surgery — <strong className="text-[#1C1A17]">you do not need to drive to Spokane</strong>.{' '}
                <a href="https://www.kh.org" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Kootenai Health</a>{' '}
                in Coeur d&apos;Alene is the only American College of Surgeons-verified Level II Trauma Center in the entire Inland Northwest region of Idaho, and it carries the same Level II designation from the Idaho Time Sensitive Emergency System. Add Northwest Specialty Hospital in Post Falls for elective surgical care and outpatient imaging, multiple specialty clinics across Hayden, Coeur d&apos;Alene, and Post Falls, plus{' '}
                <a href="https://www.lifeflight.org/newsroom/life-flight-network-to-add-helicopter-critical-care-transport-base-to-coeur-dalene-idaho" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Life Flight Network&apos;s helicopter base now stationed in Coeur d&apos;Alene</a>,
                and you have a healthcare ecosystem that&apos;s substantially more capable than most relocating retirees realize.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Kootenai Health: The Anchor of Regional Care
              </h2>
              <p className="mb-6">
                <a href="https://www.kh.org" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Kootenai Health</a>{' '}
                is a <strong className="text-[#1C1A17]">330-bed regional medical center</strong> located at 2003 Kootenai Health Way in Coeur d&apos;Alene. It serves as the primary hospital for Kootenai, Bonner, Boundary, Benewah, and Shoshone counties in Idaho — and pulls patients from eastern Washington and western Montana as well. It&apos;s owned by the city of Coeur d&apos;Alene and operates as a not-for-profit.
              </p>
              <p className="mb-4">The trauma designation is the headline:</p>
              <div className="my-6 space-y-3 mb-8">
                {[
                  { bold: 'Level II Trauma Center, American College of Surgeons (ACS) verified.', rest: ' This is the gold standard. ACS verification means the hospital has been independently audited and found to have the equipment, personnel, protocols, and outcomes data necessary to manage the full spectrum of trauma cases. Kootenai is currently the only Level II ACS-verified hospital in the region.' },
                  { bold: 'Level II Trauma Center, Idaho Time Sensitive Emergency (TSE) System designated.', rest: ' The state-level designation administered through the Idaho Department of Health and Welfare.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#C4842A] font-semibold mt-1 flex-shrink-0">→</span>
                    <span><strong className="text-[#1C1A17]">{item.bold}</strong>{item.rest}</span>
                  </div>
                ))}
              </div>
              <p className="mb-6">
                What that means in practical terms: heart attacks, strokes, major motor vehicle accidents, severe falls, complex orthopedic injuries — these stay in Coeur d&apos;Alene. Kootenai has on-site cardiothoracic surgery, neurosurgery, vascular surgery, interventional cardiology, an ICU, a Level III NICU, and a robust emergency department that runs around the clock.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">
                Service lines that matter to retirees
              </h3>
              <div className="my-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm overflow-hidden mb-8">
                {kootenaiServices.map((item, i) => (
                  <div key={i} className="px-6 py-4 border-b border-[#E8DDD0] last:border-0 flex gap-4">
                    <span className="text-[#C4842A] font-semibold flex-shrink-0 mt-0.5">→</span>
                    <div>
                      <span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{item.label}</span>
                      <span className="font-dm-sans text-sm text-[#5C5650]"> — {item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mb-10">
                For a retiree moving to North Idaho, the practical question is rarely &ldquo;can Kootenai handle a heart attack&rdquo; (it can) or &ldquo;can they do my knee replacement&rdquo; (they do them by the hundreds each year). The practical question is what kind of specialist you can establish a relationship with locally before you need them.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Northwest Specialty Hospital and the Post Falls Network
              </h2>
              <p className="mb-6">
                <a href="https://northwestspecialtyhospital.com" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Northwest Specialty Hospital</a>{' '}
                at 1593 East Polston Avenue in Post Falls is the second pillar of regional care, and it&apos;s the one most often missed in casual relocation research. It&apos;s a physician-owned specialty hospital focused on elective surgical care, with a regional reputation that has earned it &ldquo;Best Hospital in North Idaho&rdquo; recognition in local rankings.
              </p>
              <div className="my-6 space-y-3 mb-8">
                {[
                  { bold: 'Orthopedic surgery', rest: ' — high volume in joint replacements, spine, and sports medicine' },
                  { bold: 'General and bariatric surgery, pain management, ophthalmology, and ENT', rest: '' },
                  { bold: 'The only open MRI in North Idaho', rest: ' — critical for patients with claustrophobia, larger body habitus, or certain implanted devices' },
                  { bold: '3D mammography and breast MRI', rest: ' at Northwest Breast Imaging Center, also in Post Falls' },
                  { bold: 'Comprehensive outpatient imaging', rest: ' — CT, ultrasound, DXA bone density, X-ray, interventional radiology, walk-in X-ray Monday–Saturday' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#C4842A] font-semibold mt-1 flex-shrink-0">→</span>
                    <span><strong className="text-[#1C1A17]">{item.bold}</strong>{item.rest}</span>
                  </div>
                ))}
              </div>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                When Spokane Actually Matters
              </h2>
              <p className="mb-8">
                There are five categories of care where the drive to Spokane is legitimately the right call. It&apos;s worth being honest about them so you can plan accordingly.
              </p>
              <div className="space-y-6 mb-10">
                {spokaneCases.map((item) => (
                  <div key={item.num} className="border-l-2 border-[#C4842A] pl-5 flex gap-4 items-start">
                    <span className="font-cormorant text-xl text-[#C4842A] font-semibold flex-shrink-0">{item.num}</span>
                    <div>
                      <p className="font-dm-sans font-semibold text-[#1C1A17] mb-1">{item.title}</p>
                      <p>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Drive: What Spokane Actually Costs You in Time
              </h2>
              <div className="my-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm overflow-hidden mb-6">
                <div className="px-6 py-3 border-b border-[#E8DDD0]">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Drive Times — North Idaho to Spokane</p>
                </div>
                {driveTimes.map((row) => (
                  <div key={row.from} className="px-6 py-4 border-b border-[#E8DDD0] last:border-0 flex justify-between items-center gap-4">
                    <div>
                      <span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{row.from}</span>
                      <span className="font-dm-sans text-xs text-[#9A9590] ml-2">to {row.to}</span>
                    </div>
                    <span className="font-dm-sans text-sm font-semibold text-[#C4842A] flex-shrink-0">{row.time}</span>
                  </div>
                ))}
                <div className="px-6 py-3 bg-[#EDE6DA]">
                  <p className="font-dm-sans text-xs text-[#9A9590]">Via I-90. Winter storms can extend times by 30–50%. All times approximate.</p>
                </div>
              </div>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">
                Life Flight Network and air ambulance access
              </h3>
              <p className="mb-6">
                <a href="https://www.lifeflight.org" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Life Flight Network</a>{' '}
                operates a critical care transport service across Oregon, Washington, Idaho, and Montana, with dispatch at <strong className="text-[#1C1A17]">(800) 232-0911</strong>. The addition of a helicopter base in Coeur d&apos;Alene means that for the rare scenarios requiring Spokane-level care from a non-ambulatory patient — a pediatric trauma case, a stroke patient needing immediate transfer, or a complex obstetric case — air transport is available within minutes rather than relying on ground ambulance through traffic.
              </p>
              <p className="mb-10">
                Life Flight also runs an <strong className="text-[#1C1A17]">annual membership program (~$80/year for a household)</strong> that covers out-of-pocket air transport costs for members. For retirees living in more rural parts of Kootenai or Bonner County, that membership is worth seriously considering.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Primary Care, Urgent Care, and Specialty Group Density
              </h2>
              <p className="mb-6">
                Beyond hospitals, the broader Kootenai County medical ecosystem is denser than most relocators expect. <strong className="text-[#1C1A17]">Kootenai Clinic</strong> operates more than 40 specialty and primary care locations across Coeur d&apos;Alene, Hayden, Post Falls, and surrounding communities. <strong className="text-[#1C1A17]">Heritage Health</strong> is a federally qualified health center system providing primary care, dental, and behavioral health on a sliding fee scale. Urgent care clinics operate in Coeur d&apos;Alene, Post Falls, Hayden, and Rathdrum for walk-in non-emergent care.
              </p>
              <p className="mb-10">
                Wait times for new patient appointments at popular specialists can run 4–8 weeks, which is comparable to most U.S. markets and shorter than some. For retirees, establishing relationships with a primary care physician, cardiologist, and any specialists you regularly see is meaningfully achievable before you need them urgently.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Medicare, Insurance, and the Idaho-Washington Border Question
              </h2>
              <p className="mb-6">
                Two practical insurance notes that catch retirees off guard:
              </p>
              <div className="my-6 space-y-5 mb-10">
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p><strong className="text-[#1C1A17]">Medicare works the same on both sides of the border.</strong> Original Medicare (Parts A and B) and most Medicare Advantage plans cover care at both Kootenai Health and the Spokane hospitals. But specific Medicare Advantage plans have network restrictions that may make one side of the border more convenient than the other. Check your specific plan&apos;s in-network providers before you move.</p>
                </div>
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p><strong className="text-[#1C1A17]">Idaho is generally a lower-cost healthcare state than Washington.</strong> For retirees who haven&apos;t yet enrolled in Medicare, individual market insurance through{' '}
                  <a href="https://your.idaho.gov" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">your.idaho.gov</a>{' '}
                  tends to be modestly cheaper than equivalent coverage on the Washington exchange.</p>
                </div>
              </div>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What This Means for Your Home Search
              </h2>
              <p className="mb-6">For most retirees, the healthcare question shouldn&apos;t drive the geography of your home search the way you might initially think:</p>
              <div className="my-6 space-y-5 mb-10">
                {[
                  { scenario: "Coeur d'Alene, Hayden, Dalton Gardens, or Post Falls", detail: "You're within 20 minutes of Kootenai Health and within 30 minutes of Northwest Specialty Hospital. Spokane is a 30–45 minute drive when you need it. That's better healthcare access than many U.S. retirees have in their current homes." },
                  { scenario: 'Rathdrum, Spirit Lake, or Athol', detail: 'Add 10–15 minutes to the Kootenai Health drive. Still excellent access, just a slightly longer commute for routine specialist visits.' },
                  { scenario: 'Sandpoint or Bonner County', detail: "The calculus changes. Bonner General Health handles emergency care and primary services but is a smaller hospital; complex care routes through Kootenai Health (one hour south) or Spokane (90 minutes). For retirees with active health conditions requiring frequent specialist visits, this is a real factor — not disqualifying, but worth honest consideration." },
                  { scenario: 'Remote acreage in Kootenai or Bonner County', detail: 'Drive time to the nearest hospital and Life Flight membership both move up the priority list.' },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-[#C4842A] pl-5">
                    <p><strong className="text-[#1C1A17]">{item.scenario}</strong> — {item.detail}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Working With a Realtor Who Asks About Healthcare First
              </h2>
              <p className="mb-6">
                There are plenty of Realtors who&apos;ll show you homes without ever asking whether your health needs would be better served by being 15 minutes from Kootenai Health versus 45 minutes. For retirees and anyone with ongoing health conditions, that question should be near the top of the home search conversation — not an afterthought.
              </p>
              <p className="mb-10">
                When I work with relocating retirees, the healthcare conversation happens early. I ask about current specialists, ongoing treatments, mobility considerations, and whether you anticipate needing a continuum of care. Then we look at homes through that lens. A beautiful 5-acre property 40 minutes from the nearest hospital is the right home for some clients and the wrong home for others — and that conversation needs to happen before the offer, not after.
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

                {/* Hospital Quick Reference */}
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Hospital Quick Reference</p>
                  <div className="space-y-5">
                    <div>
                      <a href="https://www.kh.org" target="_blank" rel="noopener noreferrer" className="font-dm-sans text-sm font-semibold text-[#FAFAF8] hover:text-[#C4842A] transition-colors">Kootenai Health</a>
                      <p className="font-dm-sans text-xs text-[#C4842A] mt-0.5">Level II ACS Trauma Center · 330 beds</p>
                      <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">2003 Kootenai Health Way, Coeur d&apos;Alene</p>
                    </div>
                    <div className="border-t border-[#2C2A27] pt-4">
                      <a href="https://northwestspecialtyhospital.com" target="_blank" rel="noopener noreferrer" className="font-dm-sans text-sm font-semibold text-[#FAFAF8] hover:text-[#C4842A] transition-colors">Northwest Specialty Hospital</a>
                      <p className="font-dm-sans text-xs text-[#C4842A] mt-0.5">Elective surgery · Open MRI · Imaging</p>
                      <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">1593 E Polston Ave, Post Falls</p>
                    </div>
                    <div className="border-t border-[#2C2A27] pt-4">
                      <a href="https://www.providence.org/locations/wa/sacred-heart-medical-center" target="_blank" rel="noopener noreferrer" className="font-dm-sans text-sm font-semibold text-[#FAFAF8] hover:text-[#C4842A] transition-colors">Providence Sacred Heart</a>
                      <p className="font-dm-sans text-xs text-[#C4842A] mt-0.5">Pediatric trauma · Transplant · Spokane</p>
                      <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">101 W 8th Ave, Spokane WA</p>
                    </div>
                  </div>
                </div>

                {/* Drive Times */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Drive Times to Spokane</p>
                  <div className="space-y-3">
                    {driveTimes.map((row) => (
                      <div key={row.from} className="border-t border-[#E8DDD0] pt-3 first:border-0 first:pt-0 flex justify-between items-center">
                        <p className="font-dm-sans text-xs text-[#5C5650]">{row.from}</p>
                        <p className="font-dm-sans text-xs font-semibold text-[#C4842A]">{row.time}</p>
                      </div>
                    ))}
                  </div>
                  <p className="font-dm-sans text-xs text-[#9A9590] mt-3 pt-3 border-t border-[#E8DDD0]">Via I-90. Add 30–50% in winter storms.</p>
                </div>

                {/* Key Links */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Key Resources</p>
                  <div className="space-y-4">
                    {[
                      { name: 'Kootenai Health — Trauma Services', url: 'https://www.kh.org/level-ii-trauma', desc: 'ACS Level II designation details' },
                      { name: 'Kootenai Heart Clinics', url: 'https://www.kh.org/heart-services/kootenai-heart-clinics', desc: 'Cardiology and cardiothoracic surgery' },
                      { name: 'Northwest Specialty — Imaging', url: 'https://northwestspecialtyhospital.com/imaging', desc: 'Open MRI, CT, DXA, walk-in X-ray' },
                      { name: 'Life Flight Network', url: 'https://www.lifeflight.org', desc: 'Air transport · (800) 232-0911' },
                      { name: 'Idaho TSE Designations', url: 'https://healthandwelfare.idaho.gov/providers/idaho-time-sensitive-emergency/idaho-tse-facility-designations', desc: 'State trauma center registry' },
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
                  <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp, Licensed REALTOR® at eXp Realty" className="w-16 h-16 rounded-full object-cover mb-3" />
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
                  <p className="font-dm-sans text-xs text-[#9A9590] mb-3">Licensed REALTOR® · SRES® · eXp Realty · #1371861</p>
                  <p className="font-dm-sans text-xs text-[#5C5650] leading-relaxed mb-4">
                    Shirin holds the SRES® designation and specializes in working with relocating retirees. The healthcare conversation happens at the start of every search, not the end.
                  </p>
                  <a href="/contact" className="block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    Ask Shirin
                  </a>
                </div>

                {/* Related Articles */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Articles</p>
                  <div className="space-y-4">
                    <a href="/articles/sres-designation-real-estate-after-55-north-idaho" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Why I Chose SRES®: Real Estate After 55 in North Idaho</p>
                      <p className="font-dm-sans text-xs text-[#9A9590] mt-1">What the designation means in practice</p>
                    </a>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/north-idaho-school-districts-open-enrollment-charters" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho Schools Guide: Districts, Charters & Open Enrollment</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">For families relocating with school-age kids</p>
                      </a>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/spokane-vs-coeur-dalene-which-is-right-for-you" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Spokane vs. Coeur d&apos;Alene: Why So Many Buyers End Up on the Idaho Side</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Taxes, prices, and lifestyle compared</p>
                      </a>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/best-places-to-live-north-idaho-leaving-california" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Best Places to Live in North Idaho for People Leaving California</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">CdA vs Post Falls vs Hayden vs Sandpoint</p>
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
          <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Relocating Retirees &amp; Active Adults</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-[#FAFAF8] mb-6 leading-tight font-semibold">
            Want to Map Your Healthcare Needs Against the Real Options Before You Start Touring?
          </h2>
          <p className="font-dm-sans text-[#C4BDB4] text-lg mb-10 leading-relaxed">
            I&apos;ll walk through your current specialists, ongoing treatments, and mobility considerations — then we look at homes through that lens instead of treating healthcare as an afterthought.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold py-4 px-8 transition-colors">
              Get in Touch
            </a>
            <a href="/articles/sres-designation-real-estate-after-55-north-idaho" className="border border-[#5C5650] hover:border-[#9A9590] text-[#C4BDB4] hover:text-[#FAFAF8] font-dm-sans font-semibold py-4 px-8 transition-colors">
              Read the SRES® Guide
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
