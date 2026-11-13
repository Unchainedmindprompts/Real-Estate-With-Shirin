import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/lakefront-due-diligence-north-idaho-shoreline-rules'
const sources = [
  { label: 'Idaho Department of Lands, Encroachment Permits page (checked November 13, 2026): an encroachment permit is required before building a dock, marina, or shoreline stabilization on a navigable lake, under the Lake Protection Act, Idaho Code Title 58, Chapter 13 and IDAPA 20.03.04; IDAPA 20.03.04 was approved by the 2026 Idaho Legislature and went into effect July 1, 2026; the page also states the eight step permitting process, the pre-1975 exception, that IDL does not regulate boats or boating safety, and the Coeur d’Alene area office at 3284 W. Industrial Loop, (208) 769-1525', url: 'https://www.idl.idaho.gov/lakes-rivers/encroachments/' },
  { label: 'Idaho Department of Lands, Encroachment Permit Fee Schedule ENC-007 (revised July 2025, linked from the IDL Encroachment Permits page and checked November 13, 2026): permit assignment $300, single-family dock $425, bank stabilization and erosion control (riprap) $550 filing fee plus a $75 publication deposit', url: 'https://www.idl.idaho.gov/wp-content/uploads/sites/2/2025/07/ENC-007-encroachment-permit-fee-schedule.pdf' },
  { label: 'Idaho Administrative Code IDAPA 20.03.04.015, Encroachment Standards (checked November 13, 2026): no part of a single-family dock waterward of the high water mark may exceed 10 feet in width excluding the slip cutout, and total surface decking waterward of the high water mark may not exceed 700 square feet for a single-family dock', url: 'https://www.law.cornell.edu/regulations/idaho/IDAPA-20.03.04.015' },
  { label: 'Idaho Department of Lands, Single-Family Dock handout (revised June 2025, checked November 13, 2026): a single-family dock serves an owner of at least 25 feet of waterfront, no portion may extend beyond the line of navigability, docks should sit as nearly as possible at a right angle to the shoreline, no dock may be closer than 10 feet from an adjacent littoral right line without written consent, one boat lift plus two jet ski lifts or two boat lifts are allowed, a neighbor objection filed within 10 days can lead to a formal hearing, docks built before 1975 and unmodified since 1974 may be permitted on documentation, and portions of Lake Pend Oreille and Bear Lake are navigable waters for the U.S. Army Corps of Engineers under Section 10', url: 'https://www.idl.idaho.gov/wp-content/uploads/sites/2/2025/06/SingleFamilyDock-Handout_2025.pdf' },
  { label: 'Idaho Department of Lands, Selling and Buying Lakefront Property and Encroachment Permit Assignments handout (revised June 2025, checked November 13, 2026): a permit must be recorded with the county to be valid and eligible for assignment, an assignment transfers the permit from seller to buyer and must be approved by IDL, buyer and seller jointly submit the assignment form with a non-refundable $300 processing fee, a chain of title may be provided if the last permit holder cannot sign, assignments are typically processed in 1 to 2 months, and a buyer whose structures do not match the permit may become responsible to correct any violations', url: 'https://www.idl.idaho.gov/wp-content/uploads/sites/2/2025/06/Assignments-Handout_2025.pdf' },
  { label: 'Idaho Department of Lands, Bank Stabilization handout (revised June 2025, checked November 13, 2026): erosion is natural but can be accelerated by boaters creating large wakes near shore and by owners replacing deep-rooted native vegetation with shallow-rooted turf grass, IDL encourages planting native vegetation first, riprap standards sit in IDAPA 20.03.04 (sound, dense, durable angular rock sized for anticipated wave heights, placed along the present shoreline contour at no steeper than 1.5H to 1V, over a distinct filter layer, keyed into the bed below the high water mark, with a different design requiring a plan signed and stamped by an Idaho-registered professional engineer), the application fee is $550 plus a $75 publication deposit, and bank stabilization requires U.S. Army Corps of Engineers permits under Clean Water Act Section 404 and Rivers and Harbors Act Section 10 on many navigable lakes', url: 'https://www.idl.idaho.gov/wp-content/uploads/sites/2/2025/06/BankStabilization-Handout_2025.pdf' },
  { label: 'Kootenai County Code 6.2.104, Vessel Operation (checked November 13, 2026): within 200 feet of any shoreline, dock, pier, other structure, or person in the water is a no-wake zone with a 5 mph speed limit on most county waters, the Spokane River headwater to Post Falls Dam reach, the Coeur d’Alene River, and Lower Twin Lake carry a 100-foot, 5 mph rule, and within 100 feet of another vessel speed must be reasonable and prudent and not over 15 mph', url: 'https://codelibrary.amlegal.com/codes/kootenaicountyid/latest/kootenaicounty_id/0-0-0-12749' },
  { label: 'Kootenai County Code 6.2.106, Restricted Zones (checked November 13, 2026): Coeur d’Alene Lake, Fernan Lake, and the Spokane River are automatically no-wake in their entirety whenever the Coeur d’Alene Lake gauge at Tubbs Hill reads 2,133 feet or higher, the Coeur d’Alene River and its drainage including the Chain Lakes go entirely no-wake at their stated gauge conditions, and the designation expires automatically when the condition ends', url: 'https://codelibrary.amlegal.com/codes/kootenaicountyid/latest/kootenaicounty_id/0-0-0-12787' },
  { label: 'Kootenai County Code 6.2.122, Appendix of Regulations Adopted by Resolution (checked November 13, 2026): named no-wake areas include Cougar Bay, the posted areas on Scenic Bay at Bayview and Rockford Bay, the channel between the north shoreline and the sandbar at Mokins Slough on Hayden Lake, and the posted areas on Honeysuckle Bay on Hayden Lake, and a no-excessive-wake zone runs on all other public waters between 200 and 300 feet from shoreline or any dock, pier, or structure (Fernan and Lower Twin Lakes: 100 to 150 feet)', url: 'https://codelibrary.amlegal.com/codes/kootenaicountyid/latest/kootenaicounty_id/0-0-0-12985' },
  { label: 'Bonner County, Waterways page (checked November 13, 2026): no-wake zones are areas where watercraft must operate at not more than 5 miles per hour and with no more than a 6-inch wake, and the listed limit on Bonner County waterways is 200 feet from the shoreline or structure; Bonner County Code 3-105 likewise sets no-wake within 200 feet of any shoreline, dock, pier, bridge, other structure, or person in the water', url: 'https://www.bonnercountyid.gov/waterways' },
  { label: 'Bonner County Code 3-109, Restricted Zones (checked November 13, 2026): once Lake Pend Oreille reaches flood stage of 2,063.5 feet at the Hope gauge, the no-wake zone automatically extends to 500 feet from shore on Lake Pend Oreille and the Pend Oreille River until the level drops below that reading', url: 'https://codelibrary.amlegal.com/codes/bonnercountyid/latest/bonnercounty_id/0-0-0-490' },
  { label: 'Idaho Department of Environmental Quality, Coeur d’Alene Lake Management page (updated September 30, 2026, checked November 13, 2026): historical mining left millions of tons of metals sediments (zinc, lead, and cadmium) on the lake bottom, logging, farming, and construction contribute sediments and nutrients (phosphorus and nitrogen) often through runoff, water quality has generally improved since the mid-1970s, monitoring now shows phosphorus levels increasing, and DEQ and the Coeur d’Alene Tribe collaboratively developed the 2009 Coeur d’Alene Lake Management Plan to limit basin-wide nutrient inputs, which influence the solubility of the mining-related metals in the sediments; the Tribe determined the plan inadequate in the summer of 2018', url: 'https://www.deq.idaho.gov/water-quality/surface-water/coeur-dalene-lake-management/' },
  { label: 'Idaho Department of Environmental Quality, Leading Idaho and Coeur d’Alene Lake (checked November 13, 2026): as long as dissolved oxygen stays high the metals in the lakebed are expected to remain in place, while increased nutrients, primarily phosphorus, can produce low oxygen levels that allow heavy metals in the lake bottom to resolubilize into the water; Leading Idaho allocations for phosphorus reduction and related projects total $32,658,603 in DEQ’s project table', url: 'https://www.deq.idaho.gov/33-million-in-leading-idaho-funds-allocated-to-coeur-dalene-lake/' },
  { label: 'Idaho Department of Environmental Quality, Total Maximum Daily Load for Nutrients for the Nearshore Waters of Pend Oreille Lake (April 2002, checked November 13, 2026): Pend Oreille Lake was placed on Idaho’s 1994 Section 303(d) list as a threatened water body and retained on the 1996 and 1998 lists, and the EPA-approved TMDL addresses total phosphorus in the lake’s nearshore waters, the band along the shoreline where light penetrates to the bottom', url: 'https://swc.idaho.gov/wp-content/uploads/2019/08/pend-oreille-lake-nearshore-nutrient-tmdl.pdf' },
  { label: 'Idaho Conservation League, Water Quality Monitoring Program (checked November 13, 2026): the DEQ-sanctioned program, running since 2012 and now in its 15th year, monitors Lake Pend Oreille and the Pend Oreille River monthly through the summer season for temperature, dissolved oxygen, pH, transparency and turbidity, nitrogen, phosphorus, and E. coli, with stations selected in collaboration with DEQ', url: 'https://idahoconservation.org/blog/icl-gears-up-for-the-2026-water-quality-monitoring-season-join-us' },
  { label: 'Hayden Lake Watershed Improvement District, Hayden Lake Water Quality page (checked November 13, 2026): Hayden Lake is one of Idaho’s designated Outstanding Resource Waters yet carries the label of impaired or water-quality limited because of increasing nitrogen and phosphorus concentrations, the EPA’s 1977 National Eutrophication Survey ranked it among the highest quality lakes in the state, a Phosphorus TMDL followed the lake management planning work, the quality of the water in the main body of the lake remains high but is still impaired, and the North Arm of the lake bears much more dramatic evidence of increasing nutrient concentrations', url: 'https://haydenlakewid.com/hayden-lake-water-quality/' },
  { label: 'Real Estate With Shirin, Buying Lakefront Property in North Idaho (published October 22, 2026): the companion buying guide covering frontage pricing, dock rights, water and septic checks, and seasonal lake levels on Lake Coeur d’Alene, Hayden Lake, and Lake Pend Oreille, which this due diligence guide extends and does not duplicate', url: 'https://www.realestatewithshirin.com/articles/buying-lakefront-property-north-idaho-lake-coeur-dalene-hayden-lake-pend-oreille' },
  { label: 'Real Estate With Shirin, North Idaho city comparison: the flagship comparison of the five cities, used for consistency on the Kootenai and Bonner County markets this guide covers', url: 'https://www.realestatewithshirin.com/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint' },
]
export const metadata: Metadata = {
title: 'Lakefront Due Diligence in North Idaho: No-Wake Zones, Erosion, Water Quality, and Shoreline Rules',
description:
    'A North Idaho lakefront parcel is two properties: the upland lot in the county records, and a set of state-permitted structures on the public lakebed in front of it. The dock does not transfer on its own: it takes an IDL-approved assignment of a recorded permit, for a $300 fee, typically processed in 1 to 2 months. Plus the wake rules in both counties, the riprap permit, and the documented water quality story for each lake.',
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: 'Lakefront Due Diligence in North Idaho: No-Wake Zones, Erosion, Water Quality, and Shoreline Rules',
description: 'The due diligence remainder the lakefront buying guide did not cover: recorded encroachment permits and assignments, single-family dock standards under the rules that took effect July 1, 2026, Kootenai and Bonner County wake rules and flood triggers, erosion and riprap permitting, and what DEQ and the lake districts actually publish about water quality on Lake Coeur d’Alene, Hayden Lake, and Lake Pend Oreille.',
url: articleUrl,
type: 'article',
publishedTime: '2026-11-13',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'Does the dock transfer when you buy a lakefront home in Idaho?',
    a: 'Not on its own. An encroachment permit is issued to the lakefront owner and authorizes the dock and the other structures on the lakebed. Transferring it to a buyer takes an assignment approved by the Idaho Department of Lands. The permit must be recorded with the county to be valid and eligible for assignment. Buyer and seller jointly submit the Assignment Form with a non-refundable $300 processing fee, per IDL’s current fee schedule (ENC-007, revised July 2025, checked November 13, 2026), and assignments are typically processed in 1 to 2 months. If the last permit holder cannot sign, a chain of title from the permit holder to the new owner may be provided instead. Start it early: it does not finish at the closing table by itself.',
  },
  {
    q: 'What should a buyer check about a dock or shoreline structure before closing?',
    a: 'Four things, all before closing. First, that a recorded encroachment permit exists for the parcel: if no recorded permit is on record, contact IDL. Second, that every encroachment is accurately listed on that permit: docks, boat lifts, water intake lines, shoreline stabilization, and buoys. Third, that the structures as built match the permit in size and location, and that a single-family dock meets the current standards in IDAPA 20.03.04 (no part over 10 feet wide excluding the slip cutout, no more than 700 square feet of decking waterward of the high water mark, nothing beyond the line of navigability, and no part closer than 10 feet to an adjacent littoral right line without written consent). Fourth, that the assignment to you has been started. IDL is plain about the risk: if no permit exists, or the structures do not match it, the buyer may become responsible to correct any violations.',
  },
  {
    q: 'How close to shore is the no-wake zone on Lake Coeur d’Alene and Lake Pend Oreille?',
    a: 'The general rule is 200 feet in both counties, and the details differ. In Kootenai County, which covers Lake Coeur d’Alene and Hayden Lake, Code 6.2.104 makes the water within 200 feet of any shoreline, dock, pier, other structure, or person in the water a no-wake zone with a 5 mph speed limit, and Code 6.2.122 adds a no-excessive-wake band from 200 to 300 feet on most waters. Kootenai’s rivers, the Spokane River headwater to Post Falls Dam reach, the Coeur d’Alene River, and Lower Twin Lake, run at 100 feet instead. In Bonner County, which covers Lake Pend Oreille and Priest Lake, the county waterways page defines no-wake as not more than 5 mph and no more than a 6-inch wake, and states the listed limit as 200 feet from the shoreline or structure. Wake rules are county rules: IDL states expressly that it does not regulate boats, boating safety, or boat traffic.',
  },
  {
    q: 'Do I need a permit to put in riprap or fix an eroding shoreline?',
    a: 'Yes. Bank stabilization is an encroachment, and an encroachment permit from the Idaho Department of Lands is required before the work, under the Lake Protection Act and IDAPA 20.03.04. IDL encourages planting native vegetation first, and where structural control is necessary the riprap standards are in IDAPA 20.03.04: sound, dense, durable angular rock sized for anticipated wave heights, placed along the present shoreline contour at no steeper than 1.5H to 1V, over a distinct filter layer, and keyed into the bed below the high water mark. A different design needs a plan signed and stamped by an Idaho-registered professional engineer. The current fee schedule lists bank stabilization at a $550 filing fee plus a $75 publication deposit. On many navigable lakes a U.S. Army Corps of Engineers permit is also required, under Clean Water Act Section 404 and Rivers and Harbors Act Section 10. Repair of an existing, validly permitted encroachment is the narrow exception in Idaho Code 58-1305, not a general right to rebuild.',
  },
  {
    q: 'Is the water quality good on North Idaho’s lakes?',
    a: 'Each of the three big lakes has its own documented answer, and none of them is a single word. Lake Coeur d’Alene: DEQ states that water quality has generally improved since the mid-1970s, that historical mining left millions of tons of metals sediments (zinc, lead, and cadmium) on the lake bottom, and that monitoring now shows phosphorus levels increasing, which matters because nutrients influence whether those metals stay locked in the sediment. Lake Pend Oreille: DEQ placed the lake on the 1994 Section 303(d) list as threatened, and the EPA-approved TMDL targets total phosphorus in the nearshore waters along the shoreline, which a DEQ-sanctioned monitoring program has tested monthly through the summer season since 2012. Hayden Lake: the Watershed Improvement District describes it as one of Idaho’s designated Outstanding Resource Waters that still carries an impaired, water-quality limited label for increasing nitrogen and phosphorus, with the main body high quality but impaired and the North Arm showing the most dramatic nutrient increases. No source checked for this guide grades a specific shoreline or parcel.',
  },
  {
    q: 'What happens to boating rules when lake levels are high?',
    a: 'Both counties have automatic flood triggers, and they work differently. In Kootenai County, under Code 6.2.106, Coeur d’Alene Lake, Fernan Lake, and the Spokane River become no-wake in their entirety whenever the Coeur d’Alene Lake gauge at Tubbs Hill reads 2,133 feet or higher, and the Coeur d’Alene River and its drainage, including the Chain Lakes, go entirely no-wake at their stated gauge conditions; the designation expires automatically when the condition ends. In Bonner County, under Code 3-109, once Lake Pend Oreille reaches flood stage of 2,063.5 feet at the Hope gauge, the no-wake zone automatically extends to 500 feet from shore on Lake Pend Oreille and the Pend Oreille River, and it stays extended until the level drops below that reading.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: 'Lakefront Due Diligence in North Idaho: No-Wake Zones, Erosion, Water Quality, and Shoreline Rules',
  description: 'A lakefront parcel is two properties: the upland lot, and the state-permitted encroachments on the public lakebed in front of it. The recorded permit, the IDL-approved assignment, the current dock standards, both counties’ wake rules and flood triggers, riprap permitting, and the documented water quality record for Lake Coeur d’Alene, Hayden Lake, and Lake Pend Oreille.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-11-13T00:00:00-08:00',
  dateModified: '2026-11-13T00:00:00-08:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'lakefront due diligence North Idaho shoreline rules',
    'does the dock transfer when you buy lakefront Idaho encroachment assignment',
    'Idaho dock permit IDAPA 20.03.04 700 square feet',
    'no wake zone Lake Coeur d’Alene 200 feet Kootenai County 6.2.104',
    'no wake zone Lake Pend Oreille 200 feet Bonner County flood 2063.5',
    'riprap permit Idaho bank stabilization IDL',
    'Lake Coeur d’Alene water quality phosphorus metals sediment DEQ',
    'Hayden Lake water quality impaired North Arm',
    'Lake Pend Oreille nearshore phosphorus TMDL',
  ],
  articleSection: 'Buyer Resources',
  wordCount: 2500,
  about: [
    {
      '@type': 'LakeBodyOfWater',
      name: 'Coeur d’Alene Lake',
      sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene_Lake',
    },
    {
      '@type': 'LakeBodyOfWater',
      name: 'Hayden Lake',
      sameAs: 'https://en.wikipedia.org/wiki/Hayden_Lake_(Idaho)',
    },
    {
      '@type': 'LakeBodyOfWater',
      name: 'Lake Pend Oreille',
      sameAs: 'https://en.wikipedia.org/wiki/Lake_Pend_Oreille',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Kootenai County',
      sameAs: 'https://en.wikipedia.org/wiki/Kootenai_County,_Idaho',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Bonner County',
      sameAs: 'https://en.wikipedia.org/wiki/Bonner_County,_Idaho',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
  ],
  spatialCoverage: [
    {
      '@type': 'AdministrativeArea',
      name: 'Kootenai County',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Bonner County',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
  ],
  mentions: [
    { '@type': 'City', name: 'Coeur d’Alene', sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Hayden', sameAs: 'https://en.wikipedia.org/wiki/Hayden,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Sandpoint', sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Post Falls', sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Priest River', sameAs: 'https://en.wikipedia.org/wiki/Priest_River,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    {
      '@type': 'LakeBodyOfWater',
      name: 'Coeur d’Alene Lake',
      sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene_Lake',
    },
    {
      '@type': 'LakeBodyOfWater',
      name: 'Hayden Lake',
      sameAs: 'https://en.wikipedia.org/wiki/Hayden_Lake_(Idaho)',
    },
    {
      '@type': 'LakeBodyOfWater',
      name: 'Lake Pend Oreille',
      sameAs: 'https://en.wikipedia.org/wiki/Lake_Pend_Oreille',
    },
  ],
  citation: sources.map((source) => ({ '@type': 'WebPage', name: source.label, url: source.url })),
}
const faqSchema = {
'@context': 'https://schema.org',
'@type': 'FAQPage',
'@id': `${articleUrl}#faq`,
isPartOf: { '@id': `${articleUrl}#article` },
mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
}
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${articleUrl}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    { '@type': 'ListItem', position: 3, name: 'Lakefront Due Diligence in North Idaho', item: articleUrl },
  ],
}
const wakeRows = [
  { point: 'General no-wake distance', kootenai: '200 feet from shoreline, dock, pier, structure, or person in the water', bonner: '200 feet from the shoreline or structure' },
  { point: 'How no-wake is defined', kootenai: '5 mph speed limit in the zone (Code 6.2.104)', bonner: 'Not more than 5 mph and no more than a 6-inch wake (county waterways page)' },
  { point: 'The band beyond it', kootenai: 'No-excessive-wake zone from 200 to 300 feet on most waters (Code 6.2.122)', bonner: 'No equivalent band published in the sources checked' },
  { point: 'River exception', kootenai: '100 feet, 5 mph on the Spokane River headwater reach, the Coeur d’Alene River, and Lower Twin Lake', bonner: 'Pack River Flats is no-wake shore to shore (Code 3-701)' },
  { point: 'High water trigger', kootenai: 'Whole lakes no-wake at 2,133 feet on the Tubbs Hill gauge (Code 6.2.106)', bonner: 'No-wake extends to 500 feet at 2,063.5 feet on the Hope gauge (Code 3-109)' },
  { point: 'Named zones to know', kootenai: 'Cougar Bay, Scenic Bay, Rockford Bay, Mokins Slough and Honeysuckle Bay on Hayden Lake', bonner: 'Check the county code for named zones on your lake' },
]
const checkRows = [
  { step: 'Recorded encroachment permit', desc: 'A permit exists for the parcel and is recorded with the county recorder. A permit must be recorded to be valid and eligible for assignment. No recorded permit on file: contact IDL before closing.' },
  { step: 'Structures match the permit', desc: 'Every encroachment (dock, lifts, water intake line, shoreline stabilization, buoys) is listed on the permit, with matching sizes and locations. Mismatches raised with IDL early, not in closing week.' },
  { step: 'Dock meets current standards', desc: 'Single-family dock: at least 25 feet of waterfront, no part over 10 feet wide, no more than 700 square feet waterward of the high water mark, inside the line of navigability, at least 10 feet from the littoral right line without written consent, under IDAPA 20.03.04 as in effect July 1, 2026.' },
  { step: 'Assignment started', desc: 'Joint Assignment Form and the $300 non-refundable processing fee filed with IDL, or a chain of title if the last permit holder cannot sign. Typical processing is 1 to 2 months.' },
  { step: 'Shoreline condition and permits', desc: 'Erosion pattern walked in person, any riprap or stabilization already permitted, and any planned bank work priced with its own IDL permit ($550 plus $75) and a possible Corps permit.' },
  { step: 'Wake exposure for that shoreline', desc: 'The county rule for that lake, the named zones nearby, and how exposed the dock and bank are to traffic running outside the 200-foot zone, in Kootenai also inside the 200 to 300 foot no-excessive-wake band.' },
  { step: 'Water quality record for that lake', desc: 'The DEQ or lake district page for that specific lake (Coeur d’Alene, Hayden, or Pend Oreille), read as that lake’s own story, not as a grade for the parcel.' },
  { step: 'The other layers, if the project needs them', desc: 'Submerged land lease or easement if IDL requires one, an IDWR water right permit for a surface water intake, a county floodplain authorization, and a Corps permit for docks and water lines on Lake Pend Oreille.' },
]
export default function LakefrontDueDiligencePage() {
return (
<>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
<section className="bg-[#F5EFE6] pt-36 pb-16">
<div className="max-w-5xl mx-auto px-6">
<nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
<Link href="/" className="hover:text-[#C4842A] transition-colors">Home</Link>
<span className="mx-2">·</span>
<a href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</a>
<span className="mx-2">·</span>
<span className="text-[#5C5650]">Lakefront Due Diligence in North Idaho</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Buyer Resources</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">13 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">2026 Guide</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Lakefront Due Diligence in North Idaho: No-Wake Zones, Erosion, Water Quality, and Shoreline Rules
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            A lakefront parcel is really two properties: the upland lot in the county records, and a set of state-permitted structures on the public lakebed in front of it. The second half is where deals quietly break. The dock is not automatically yours until the Idaho Department of Lands approves an assignment of a recorded permit. The shoreline is a permitted work site, not a blank canvas. And wake is an erosion issue with a number attached in both counties: a no-wake zone within 200 feet of shore, with different exceptions, bands, and flood triggers on each side of the county line.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · November 13, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">200 feet</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">General No-Wake Distance, Both Counties</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Kootenai Code 6.2.104 · Bonner County waterways, checked November 13, 2026</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$300</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Encroachment Permit Assignment Fee</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">IDL fee schedule ENC-007, typically processed in 1 to 2 months</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">700 sq ft</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Maximum Single-Family Dock Decking</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Waterward of the high water mark, IDAPA 20.03.04.015</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">July 1, 2026</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Current Encroachment Rules Took Effect</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">IDAPA 20.03.04, approved by the 2026 Idaho Legislature, IDL</p>
</div>
</div>
</div>
</section>
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Short answer: price the upland lot from comparable sales, then verify the lakebed half separately, on paper, before you close. Our October 22 guide,{' '}<a href="/articles/buying-lakefront-property-north-idaho-lake-coeur-dalene-hayden-lake-pend-oreille" className="text-[#C4842A] hover:underline">Buying Lakefront Property in North Idaho</a>, covered frontage pricing, dock rights at a summary level, water and septic, and seasonal lake levels. This guide covers the remainder that article did not: whether the dock permit can actually be assigned to you, what the current dock and riprap standards allow, where the no-wake lines sit in each county and what high water does to them, and what the published water quality record says about each lake. It carries no price figures of its own, because due diligence on the shoreline is a records and rules question, not a price question. Every rule below was checked November 13, 2026 against the Idaho Department of Lands, the two county codes, and the Idaho Department of Environmental Quality.
</p>
<p className="mb-10">One framing rule runs through the whole guide. Three different authorities touch a shoreline, and their jobs do not overlap. The Idaho Department of Lands permits the structures on the lakebed. The counties write the boating and wake rules, because IDL states expressly that it does not regulate boats, boating safety, or boat traffic. And DEQ and the lake districts publish the water quality record. A sentence that hands one authority’s job to another is how lakefront mistakes get repeated, so each section below names its own authority.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Dock Is Not Automatically Yours: The Recorded Permit and the Assignment
</h2>
<p className="mb-6">
                Start with the permit requirement itself. Prior to building an encroachment, for example a dock, a marina, or shoreline stabilization, on a navigable lake, an encroachment permit from the{' '}<a href="https://www.idl.idaho.gov/lakes-rivers/encroachments/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Idaho Department of Lands</a>{' '}is required under the Lake Protection Act, Idaho Code Title 58, Chapter 13, and IDAPA 20.03.04. The statute’s purpose, at Idaho Code 58-1301, is that protection of property, navigation, fish and wildlife habitat, aquatic life, recreation, aesthetic beauty, and water quality be weighed against the benefit of the encroachment. This is not old paperwork: IDAPA 20.03.04 was approved by the 2026 Idaho Legislature and the current rules went into effect on July 1, 2026, per IDL’s encroachments page, checked November 13, 2026.
</p>
<p className="mb-6">
                The assignment is the step buyers miss. Encroachment permits are issued to lakefront owners and authorize docks, water intake lines, shoreline stabilization, buoys, and more. An assignment transfers the permit from seller to buyer, and it must be approved by IDL. A permit must be recorded with the county to be valid and eligible for assignment; if no recorded permit is on record, IDL’s instruction is to contact IDL. Sellers should confirm every encroachment is accurately listed on the permit, with matching sizes and locations, and raise mismatches with IDL early to avoid closing delays. Buyers should hear IDL’s warning in its own terms: if no permit exists, or the structures do not match it, the buyer may become responsible to correct any violations.
</p>
<p className="mb-10">
                The mechanics are joint and they take time. Buyer and seller together submit the Assignment Form with a non-refundable $300 processing fee, the figure in IDL’s current Encroachment Permit Fee Schedule (ENC-007, revised July 2025, linked from the live encroachments page and rechecked November 13, 2026). If the last permit holder cannot sign, a chain of title from the permit holder to the new owner may be provided instead. Assignments are typically processed in 1 to 2 months. None of that fits inside a standard closing week, which is why the permit review belongs at the start of the transaction, and why no one should tell you dock rights transfer automatically at closing. The only documented legacy path is narrow: an encroachment built before 1975 and not modified since 1974 may be permitted on documentation of its age and non-modification, and IDL’s current page adds that such encroachments may be permitted without a fee on substantive documentation. Anything else unpermitted is a correction problem, not a grandfathered right.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What a Legal Single-Family Dock Looks Like Under the Current Rules
</h2>
<p className="mb-6">
                When you compare what is built against what is permitted, measure it against the current standards. A single-family dock serves an owner of at least 25 feet of waterfront. Under IDAPA 20.03.04.015, checked November 13, 2026, no part of the structure waterward of the high water mark may exceed 10 feet in width, excluding the slip cutout, and total surface decking waterward of the high water mark may not exceed 700 square feet for a single-family dock. IDL’s dock guidance adds the placement rules: no portion may extend beyond the line of navigability, docks should protrude as nearly as possible at a right angle to the shoreline, and no dock may sit closer than 10 feet from an adjacent littoral right line without the adjacent owner’s written consent. The lift allowance is one boat lift plus two jet ski lifts, or two boat lifts, with additional lifts deducted from the 700 square feet at 50 percent of the largest lift’s footprint.
</p>
<p className="mb-6">
                The process behind a new dock explains why a permit file reads the way it does. The applicant submits a packet to the IDL supervisory area office: joint application form, IDL application form, drawings and maps, and the fee in the current schedule, $425 for a single-family dock. For noncommercial navigational encroachments within the line of navigability, IDL notifies the adjacent waterfront owners, and under Idaho Code 58-1305 an adjacent owner has 10 days from notice to file an objection; an objection that cannot be resolved goes to a formal administrative hearing. For other encroachments, IDL also publishes notice in the local newspaper and notifies agencies. On approval, the permittee records the permit with the county recorder, builds, files a work completion report, and IDL inspects for compliance. That recorded permit, with its drawings, is the document a buyer should be reading.
</p>
<p className="mb-10">
                Two narrow exceptions deserve exact wording, because they are often stretched. No permit is required for repair of an existing encroachment. Replacement without a new permit is allowed only when the existing encroachment is covered by a valid permit in good standing and the statutory conditions in 58-1305 are met. Neither exception authorizes enlarging, moving, or rebuilding an unpermitted structure, and neither turns an unpermitted dock into a permitted one.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Wake Is an Erosion Issue With a Number Attached in Both Counties
</h2>
<p className="mb-6">
                IDL’s own bank stabilization guidance connects the two halves of this article: erosion is natural, but it can be accelerated by human activities such as boaters creating large wakes near shore, and by waterfront owners replacing deep-rooted native vegetation with shallow-rooted turf grass. So the wake rules are not just boating etiquette. They are part of the physical condition of the shoreline you are buying, and they are county law.
</p>
<p className="mb-6">
                In Kootenai County, which covers Lake Coeur d’Alene and Hayden Lake, Code{' '}<a href="https://codelibrary.amlegal.com/codes/kootenaicountyid/latest/kootenaicounty_id/0-0-0-12749" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">6.2.104</a>{' '}makes the water within 200 feet of any shoreline, dock, pier, other structure, or person in the water a no-wake zone with a 5 mph speed limit. That general rule excepts three waters, which carry a 100-foot, 5 mph no-wake rule instead: the Spokane River from the headwater to the Post Falls Dam, the Coeur d’Alene River from the mouth to the county boundary, and Lower Twin Lake. Within 100 feet of another vessel, speed must be reasonable and prudent and not over 15 mph. Code{' '}<a href="https://codelibrary.amlegal.com/codes/kootenaicountyid/latest/kootenaicounty_id/0-0-0-12985" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">6.2.122</a>{' '}then adds the layer most summaries drop: a no-excessive-wake zone on all other public waters between 200 and 300 feet from shoreline or any dock, pier, or structure, with Fernan and Lower Twin Lakes running 100 to 150 feet. The same appendix names the no-wake areas a buyer on these lakes will actually meet: Cougar Bay, the posted areas on Scenic Bay at Bayview and on Rockford Bay, the channel between the north shoreline and the sandbar at Mokins Slough on Hayden Lake, and the posted areas on Honeysuckle Bay on Hayden Lake.
</p>
<p className="mb-10">
                In Bonner County, which covers Lake Pend Oreille and Priest Lake, the county{' '}<a href="https://www.bonnercountyid.gov/waterways" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">waterways page</a>{' '}defines a no-wake zone by both speed and wake: operation at not more than 5 mph and with no more than a 6-inch wake, and it states the listed limit as 200 feet from the shoreline or structure. Bonner County Code 3-105 carries the same 200-foot distance from any shoreline, dock, pier, bridge, other structure, or person in the water. Where speed is not otherwise regulated, the county page states a reasonable speed not in excess of 50 mph on Lake Pend Oreille, the Pend Oreille River, Priest Lake, and Upper Priest Lake. Do not flatten any of this into a single statewide sentence. The 200-foot figure holds as the general lake rule in both counties, but the definitions, the river exceptions, and the extra Kootenai band are the parts that differ, and they are the parts a shoreline owner lives with. One more caution, because it circulates locally: a 300-foot extension around marinas was proposed in Bonner County and voted against in 2018. It was never adopted, and it is not the rule.
</p>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-3 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Point to compare</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Kootenai County</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Bonner County</span>
</div>
{wakeRows.map((row) => (
<div key={row.point} className="grid grid-cols-3 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.point}</span>
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.kootenai}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.bonner}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Kootenai County Code 6.2.104, 6.2.106, and 6.2.122, and the Bonner County waterways page with Bonner County Code 3-105 and 3-109, all checked November 13, 2026. Wake rules are county rules: IDL does not regulate boats, boating safety, or boat traffic.</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                High Water Turns Whole Lakes No-Wake, on Two Different Gauges
</h2>
<p className="mb-6">
                Flood conditions rewrite the map automatically in both counties, and a buyer touring in a high water spring should know which gauge governs their lake. Under Kootenai County Code{' '}<a href="https://codelibrary.amlegal.com/codes/kootenaicountyid/latest/kootenaicounty_id/0-0-0-12787" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">6.2.106</a>, Coeur d’Alene Lake, Fernan Lake, and the Spokane River are automatically designated no-wake in their entirety whenever the Coeur d’Alene Lake gauge at Tubbs Hill reads 2,133 feet or higher. The Coeur d’Alene River and all navigable waters in its drainage, including the Chain Lakes, go entirely no-wake at 43 feet on the Cataldo gauge or 72 feet at Enaville. The designation expires automatically when none of the conditions exist.
</p>
<p className="mb-10">
                Bonner County uses a different mechanism. Under Code{' '}<a href="https://codelibrary.amlegal.com/codes/bonnercountyid/latest/bonnercounty_id/0-0-0-490" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">3-109</a>, once Lake Pend Oreille reaches flood stage of 2,063.5 feet at the Hope gauge, the no-wake zone automatically extends to 500 feet from shore on Lake Pend Oreille and the Pend Oreille River, and it stays extended until the level drops below that reading. Note the difference in kind: Kootenai turns whole lakes off, Bonner widens the shoreline band. For a buyer, the practical point is the same either way. In a wet spring, the boating in front of the parcel you are buying can be legally slow everywhere, docks and banks take sustained high water, and the gauge reading, not a neighbor’s opinion, decides when normal rules return.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Erosion and Riprap: The Shoreline Is a Work Site With Rules
</h2>
<p className="mb-6">
                IDL’s sequence for an eroding bank starts with plants, not rock. The department encourages planting native vegetation first, to control erosion, enhance aesthetic beauty, and improve water quality. Where structural control is necessary, riprap is the standard method, and its standards sit in IDAPA 20.03.04 as IDL outlines them: the rock must be sound, dense, durable, and angular, sized for the anticipated wave heights; it is placed along the present shoreline contour at no steeper than 1.5H to 1V; it overlies a distinct filter layer of sand, gravel, or nonwoven geotextile; and it is keyed into the bed below the high water mark. A design that departs from those standards requires a plan signed and stamped by a professional engineer registered in Idaho.
</p>
<p className="mb-6">
                The permit comes before the work, and the fee is published. Bank stabilization is listed in IDL’s current fee schedule at a $550 filing fee plus a $75 publication deposit, $625 in total, rechecked November 13, 2026. The application follows the same eight steps as any encroachment: packet to the area office, IDL review, published notice and agency review for this type, permit issued, permit recorded with the county, construction, work completion report, and IDL inspection. There is also a federal layer that IDL’s handout states plainly: many navigable lakes are also jurisdictional waters for the U.S. Army Corps of Engineers, and bank stabilization activities require Corps permits under Section 404 of the Clean Water Act and Section 10 of the Rivers and Harbors Act.
</p>
<p className="mb-10">
                For a buyer, the due diligence version of this section is three questions. Is the bank eroding, and is the pattern consistent with wake exposure, runoff, or vegetation loss on that specific shoreline? Is any riprap or stabilization already in place actually listed on the recorded permit? And if you are planning bank work after closing, have you priced the permit, the publication step, and the possible Corps permit into the project, instead of assuming a contractor can start on a handshake? Shoreline septic, sewer district, and setback questions stay where our buying guide put them: parcel-specific verification through the Panhandle Health District and the county. This guide publishes no lake-specific septic setback distance, because none was verified from a primary source for these lakes.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Water Quality: Three Lakes, Three Different Documented Stories
</h2>
<p className="mb-6">
                No source checked for this guide grades a specific shoreline or parcel, and the three lakes do not share one story. Read each lake on its own record. On Lake Coeur d’Alene, the{' '}<a href="https://www.deq.idaho.gov/water-quality/surface-water/coeur-dalene-lake-management/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Idaho Department of Environmental Quality</a>{' '}states that historical mining left millions of tons of metals sediments, zinc, lead, and cadmium among them, on the lake bottom, and that logging, farming, and construction contribute sediments and nutrients, phosphorus and nitrogen, often through runoff. Water quality in the lake has generally improved since the mid-1970s. Monitoring now shows phosphorus levels increasing. The mechanism is the part a shoreline owner should understand: DEQ and the Coeur d’Alene Tribe collaboratively developed the 2009 Coeur d’Alene Lake Management Plan to limit basin-wide nutrient inputs, because nutrients influence the solubility of the mining-related metals in the sediments. DEQ’s Leading Idaho explainer states the same chain directly: while dissolved oxygen stays high, the metals are expected to remain in place; more phosphorus can lower oxygen, and low oxygen can allow the heavy metals in the lake bottom to resolubilize into the water. The Tribe determined the 2009 plan inadequate in the summer of 2018, discussions with the state and EPA Region 10 on additional mechanisms followed, and Leading Idaho allocations for phosphorus reduction and related projects total $32,658,603 in DEQ’s project table, checked November 13, 2026. DEQ’s published concern is that nutrient and oxygen mechanism. This guide verified no DEQ swimming advisory for these lakes, and it does not convert the sediment story into a claim about the water at a particular beach.
</p>
<p className="mb-6">
                On Lake Pend Oreille, the watch area is the nearshore: the band of water along the shoreline where light penetrates to the bottom, which is also where a lakefront owner’s dock, beach, and intake sit. DEQ’s subbasin record states that the lake was placed on Idaho’s 1994 Section 303(d) list as a threatened water body and retained on the 1996 and 1998 lists, that the problem assessment recommended a TMDL for the nearshore waters to address increasing eutrophication along the shoreline, and that the EPA-approved TMDL for the nearshore waters addresses total phosphorus. Tributary sediment TMDLs were also EPA-approved, with a sediment addendum approved in January 2008, and the subbasin assessment found both Lake Pend Oreille and the Pend Oreille River fully supporting their beneficial uses at that assessment. The ongoing record a buyer can actually read is the Idaho Conservation League’s DEQ-sanctioned Water Quality Monitoring Program, which has tested Lake Pend Oreille and the Pend Oreille River monthly through the summer season since 2012, for temperature, dissolved oxygen, pH, transparency and turbidity, nitrogen, phosphorus, and E. coli. If you want a current read on a Pend Oreille shoreline, that program’s station results are the published starting point, not a listing remark.
</p>
<p className="mb-10">
                Hayden Lake is the paradox of the three. The{' '}<a href="https://haydenlakewid.com/hayden-lake-water-quality/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Hayden Lake Watershed Improvement District</a>{' '}describes a lake that the EPA’s 1977 National Eutrophication Survey ranked among the highest quality lakes in the state, and that is one of Idaho’s designated Outstanding Resource Waters, yet carries the label of impaired, or water-quality limited, because of increasing nitrogen and phosphorus concentrations. A Phosphorus TMDL followed the lake management planning work; this guide describes that TMDL’s existence without quoting a figure for it, because the district’s page states the number in units that mix a concentration with a load period and it could not be verified from DEQ’s TMDL document for this article. The district’s own summary is the honest one: the quality of the water in the main body of the lake remains high but is still impaired, while the North Arm of the lake bears much more dramatic evidence of increasing nutrient concentrations. The district monitors nutrients in the North Arm and tracks phosphorus entering via south-shore runoff. The Hayden Lake Watershed Association adds the watershed mechanics a lot owner controls: the lake has no river outlet, so what goes in stays in; phosphorus is the limiting nutrient for algal growth in North Idaho lakes; and removing vegetation from a lake lot is estimated to double that lot’s phosphorus erosion yield. That last point ties this section back to the riprap section: the native vegetation IDL asks owners to keep is also the lake’s first nutrient filter.
</p>
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  The Layered Permits, Kept Separate on Purpose
</h3>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Submerged land lease or easement:</span> IDL may require one as a condition of an encroachment permit. Ask whether the parcel’s permit carries one before you assume the dock permit is the whole file.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Water intake lines:</span> an intake line is itself an encroachment, drawing water from a surface source requires a water right permit from the Idaho Department of Water Resources, and a Corps permit is also required for water lines on Lake Pend Oreille and Bear Lake, per IDL.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Docks on Pend Oreille:</span> portions of Lake Pend Oreille and Bear Lake are navigable waters for the U.S. Army Corps of Engineers under Section 10 of the Rivers and Harbors Act, and IDL’s dock guidance states that docks there require a Corps permit as well. Do not generalize that into every dock in Idaho, and do not drop it for Pend Oreille, where IDL documents it directly.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed">
                    <span className="text-[#F5EFE6] font-semibold">County and river layers:</span> a county floodplain authorization may also be required for a shoreline project, and dock permits on free-flowing rivers are handled by IDWR’s Stream Channel Protection Program, not IDL. IDL’s Coeur d’Alene area office is at 3284 W. Industrial Loop, Coeur d’Alene, (208) 769-1525.
</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Buyer Checklist the Facts Support
</h2>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-2 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Check, in order</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">What to confirm</span>
</div>
{checkRows.map((row) => (
<div key={row.step} className="grid grid-cols-2 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.step}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.desc}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Checklist built November 13, 2026 from IDL’s encroachments page, fee schedule ENC-007, and dock, assignment, and bank stabilization handouts, IDAPA 20.03.04, Kootenai County Code 6.2.104, 6.2.106, and 6.2.122, the Bonner County waterways page and Code 3-109, DEQ, and the Hayden Lake Watershed Improvement District. This guide carries no lakefront price figure, because the October 22 buying guide carries the site’s published lake anchors with their list and sale labels intact.</p>
</div>
<p className="mb-10">
                None of these checks argues against buying lakefront. They move the questions that are slow or expensive to answer after closing, about the recorded permit, the assignment, the shoreline work, and the lake’s own published record, to before closing, where the answers can still shape the offer, the contingencies, or the decision to walk away. For the full picture of places and prices, the{' '}<a href="/areas/coeur-dalene-idaho" className="text-[#C4842A] hover:underline">Coeur d’Alene area guide</a>, the{' '}<a href="/areas/hayden-idaho" className="text-[#C4842A] hover:underline">Hayden area guide</a>, and the{' '}<a href="/areas/sandpoint-idaho" className="text-[#C4842A] hover:underline">Sandpoint area guide</a>{' '}cover the three shorelines, and the{' '}<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="text-[#C4842A] hover:underline">North Idaho city comparison</a>{' '}puts the off-water markets beside them.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published November 13, 2026. Every rule in this guide was checked November 13, 2026 against the primary sources in Sources above. Three build time decisions are stated plainly. First, the dock standards and all three fees ($425 single-family dock, $300 assignment, $550 plus $75 bank stabilization) were re-verified at build time against the current IDAPA 20.03.04 text and IDL’s current fee schedule ENC-007 as linked from the live encroachments page, because the underlying rules were re-approved effective July 1, 2026 and IDL’s informational handouts were revised in June 2025; the standards and fees match, so they are published as current, with their documents named. Second, no Hayden Lake phosphorus TMDL figure is quoted, because the Watershed Improvement District page states it in units that mix a concentration with a load period and the figure was not verified from DEQ’s TMDL document. Third, this guide publishes no price statistic and no per-front-foot figure, following the site’s established lakefront discipline: the October 22 buying guide carries the published anchors, with list medians and sale medians labeled separately. This guide is general real estate information, not legal, tax, or engineering advice. Verify the permit file for a specific parcel with the Idaho Department of Lands, the wake rules for a specific lake with its county, and the water quality record with DEQ.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Frequently Asked Questions
</h2>
<div className="space-y-4 mb-12">
{faqs.map((faq) => (
<div key={faq.q} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
<h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base mb-3">
                    {faq.q}
</h3>
<p className="font-dm-sans text-[17px] text-[#5C5650] leading-relaxed">
                      {faq.a}
</p>
</div>
                  ))}
</div>
<div className="bg-[#1C1A17] rounded-sm p-8 mt-4">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">From Shirin</p>
<div className="flex items-start gap-5 mb-6">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp"
className="w-14 h-14 rounded-full object-cover flex-shrink-0"
/>
<div>
<p className="font-cormorant text-2xl text-[#F5EFE6] font-semibold mb-1">Shirin Abplanalp</p>
<p className="font-dm-sans text-sm text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · Idaho License #1371861</p>
</div>
</div>
<p className="font-dm-sans text-[#9A9590] leading-relaxed mb-6">
                  On a shoreline purchase, the most expensive sentence is “the dock comes with the house.” Sometimes it does, cleanly, on a recorded permit that assigns without a fight. Sometimes the file takes two months and a correction first. The difference is knowable before you close, and it is my job to know it early. If you are looking at a home on Coeur d’Alene, Hayden, or Pend Oreille, send me the listing before the deadlines start. We will pull the permit record first and let the house tour come second. No pressure, no pitch, just an honest conversation.
</p>
<div className="flex flex-col sm:flex-row gap-4">
<a
href="/contact"
className="inline-block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-6 transition-colors"
>
                    Start a Conversation
</a>
<div className="flex flex-col gap-1 justify-center">
<a href="tel:+12086607468" className="font-dm-sans text-sm text-[#9A9590] hover:text-[#C4842A] transition-colors">(208) 660-7468</a>
<a href="mailto:dreamlifeinidaho@gmail.com" className="font-dm-sans text-sm text-[#9A9590] hover:text-[#C4842A] transition-colors">dreamlifeinidaho@gmail.com</a>
</div>
</div>
</div>
<p className="font-dm-sans text-xs text-[#9A9590] mt-6 leading-relaxed">
                Data sources: Idaho Department of Lands, IDAPA 20.03.04, Kootenai County Code, Bonner County waterways and Code, Idaho DEQ, the Hayden Lake Watershed Improvement District, and the Idaho Conservation League monitoring program, as detailed in Sources and Scope above. Rules, fees, and lake records change, so confirm the current permit file and county code for the specific parcel and lake before you buy.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Shoreline Guide</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">The due diligence checks · Before you close</p>
<div className="space-y-3">
{[
                      { range: 'Recorded permit', desc: 'Recorded with the county to be valid and assignable; no record on file means contact IDL first' },
                      { range: 'Assignment', desc: '$300 joint form, IDL approval required, typically 1 to 2 months; the buyer inherits uncorrected violations' },
                      { range: 'Single-family dock', desc: 'At least 25 feet of waterfront; 10 feet wide and 700 square feet maximum waterward of the high water mark' },
                      { range: 'No-wake, both counties', desc: '200 feet general rule; Kootenai adds a 200 to 300 foot no-excessive-wake band, Bonner caps the wake at 6 inches' },
                      { range: 'Riprap and bank work', desc: 'IDL permit before work, $550 plus $75; native vegetation first; a Corps permit may also apply' }
                    ].map((item) => (
<div key={item.range} className="border-b border-[#2C2A27] pb-3 last:border-0 last:pb-0">
<p className="font-dm-sans text-sm font-semibold text-[#C4842A]">{item.range}</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-0.5">{item.desc}</p>
</div>
                    ))}
</div>
</div>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your Local Advisor</p>
<img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp" className="w-16 h-16 rounded-full object-cover mb-3" />
<p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · #1371861</p>
<a href="/contact" className="block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    Talk Through a Lakefront Purchase
</a>
</div>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Resources</p>
<div className="space-y-4">
<a href="/articles/buying-lakefront-property-north-idaho-lake-coeur-dalene-hayden-lake-pend-oreille" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Buying Lakefront Property in North Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Frontage pricing, dock rights, septic, and lake levels, the companion buying guide</p>
</a>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho City Comparison</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">All five cities, head to head, the flagship comparison</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/coeur-dalene-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Coeur d’Alene Idaho Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Neighborhoods and market overview for the Coeur d’Alene shoreline</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/hayden-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Hayden Idaho Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Hayden and Hayden Lake, kept separate as they should be</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/sandpoint-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Sandpoint Idaho Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The Lake Pend Oreille shoreline and the Sandpoint market</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/idaho-land-due-diligence-water-mineral-rights-flood-zones" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Idaho Land Due Diligence</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Water rights, mineral rights, and flood zones, the upland companion checklist</p>
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
<section className="bg-[#1C1A17] py-20">
<div className="max-w-3xl mx-auto px-6 text-center">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Ready to Talk</p>
<h2 className="font-cormorant text-4xl md:text-5xl text-[#F5EFE6] mb-6 leading-tight font-semibold">
            Found a Shoreline Home You Like?
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Send the listing early. The recorded permit, the structure match, and the assignment are quick to start at the beginning of a transaction and slow to fix at the end of one.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a href="/contact" className="bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold py-4 px-8 transition-colors">
              Start the Conversation
</a>
<a href="/articles" className="border border-[#5C5650] hover:border-[#9A9590] text-[#9A9590] hover:text-[#F5EFE6] font-dm-sans font-semibold py-4 px-8 transition-colors">
              More Articles
</a>
</div>
</div>
</section>
</>
  )
}
