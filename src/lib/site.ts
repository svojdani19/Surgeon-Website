export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.georgiahipandknee.com";

export const doctor = {
  name: "Sam Vojdani, MD",
  firstName: "Sam",
  credentials: "MD",
  title: "Orthopedic Surgeon — Hip & Knee Joint Replacement",
  practice: "Total Joint Specialists",
  practiceNote: "A Northside Network Provider",
  phoneDisplay: "(770) 292-6500",
  phoneHref: "tel:+17702926500",
  schedulingPhoneDisplay: "(770) 292-6500",
  schedulingPhoneHref: "tel:+17702926500",
  headshot: "/images/sam-vojdani-md.jpeg",
  /**
   * Live Google reviews link — the badge on the landing page links here so
   * visitors can verify the rating themselves. Replace with the exact
   * Google Business Profile review link when available.
   */
  googleReviewUrl: "https://www.google.com/maps/search/Dr.+Sam+Vojdani+Atlanta",
  googleRating: "5.0",
  googleReviewCount: 196, // 132 Midtown + 64 Sandy Springs, verified Jul 2026
};

/**
 * Verbatim 5-star Google reviews from Dr. Vojdani's public Maps listings —
 * exact text (long reviews excerpted with ellipses, meaning preserved),
 * real reviewer first names + last initial. Do not edit or invent quotes.
 */
export const testimonials: {
  quote: string;
  name: string;
  procedure: string;
  source: string;
}[] = [
  {
    quote:
      "I had my right knee replaced early September 2025 and it has been life changing. Dr. Vojdani and his team go the extra mile to make sure your surgery and recovery process are as smooth and pain free as possible. I am back at the gym doing CrossFit and feeling strong. My knee continues to amaze me after years of excruciating pain.",
    name: "Celeste H.",
    procedure: "Knee replacement",
    source: "Google review",
  },
  {
    quote:
      "Since released from regular follow up visits, I have not had any issues what so ever, like new! I have since hiked volcanoes and rain forest in Costa Rica, the Alps in Switzerland and started coaching again. Thanks Dr. V.",
    name: "B.L. H.",
    procedure: "Knee replacement",
    source: "Google review",
  },
  {
    quote:
      "Dr. Vojdani worked miracles with my knee revision surgery and my total hip replacement surgery. I recommend him 110% to anyone contemplating knee or hip surgery. He is truly an incredible, knowledgeable, caring doctor and among the top in his field.",
    name: "Lisa W.",
    procedure: "Knee revision & hip replacement",
    source: "Google review",
  },
  {
    quote:
      "It is impossible to express how much I am enjoying quality of my life. The surgery went flawless, and the recovery has been much faster and smoother than I anticipated. Dr. Vojdani and his entire team helped me from the initial consultation to post operative follow-ups.",
    name: "Ravinder B.",
    procedure: "Knee replacement",
    source: "Google review",
  },
  {
    quote:
      "Thank you Dr Vojdani and everyone at Total Joint Specialist for my life changing hip replacement. What an amazing experience! … On Christmas Eve it will be 8 months! I walk completely unassisted! … I am 99% pain free. … I waited way too long. I'm so proud of myself.",
    name: "Jenna L.",
    procedure: "Anterior hip replacement",
    source: "Google review",
  },
  {
    quote:
      "I had both hips replaced within a year at Total Joint Specialist. The experience was quick, educational, and comprehensive. I highly recommend Dr. Vojdani for joint replacements.",
    name: "Liana C.",
    procedure: "Bilateral hip replacement",
    source: "Google review",
  },
  {
    quote:
      "Dr Vojdani is very personable, made me feel assured by his confidence in replacing my knee. Every member of his team from Dr V to the ladies on reception were extremely professional and made the whole experience easy and stress free.",
    name: "Jason I.",
    procedure: "Knee replacement",
    source: "Google review",
  },
  {
    quote:
      "When I found Dr. Vojdani all my worries were over he did my 4 knee replacement and I haven't had a problem since. I had him also do my other knee. I love this Doctor he explains everything to you and wants your feedback.",
    name: "Cassandra C.",
    procedure: "Revision knee replacement",
    source: "Google review",
  },
];

export type Location = {
  slug: string;
  name: string;
  shortName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zip: string;
  phoneDisplay: string;
  phoneHref: string;
  fax?: string;
  hours: string[];
  mapQuery: string;
};

export const locations: Location[] = [
  {
    slug: "midtown-atlanta",
    name: "Total Joint Specialists — Midtown Atlanta",
    shortName: "Midtown Atlanta",
    addressLine1: "1110 West Peachtree Street NW",
    addressLine2: "Suite 940",
    city: "Atlanta",
    state: "GA",
    zip: "30309",
    phoneDisplay: "(770) 292-6500",
    phoneHref: "tel:+17702926500",
    hours: [
      "Monday – Thursday: 7:30 AM – 4:00 PM",
      "Friday: 7:30 AM – 1:00 PM",
      "Saturday – Sunday: Closed",
    ],
    mapQuery: "1110 West Peachtree Street NW Suite 940 Atlanta GA 30309",
  },
  {
    slug: "sandy-springs",
    name: "Total Joint Specialists — Sandy Springs",
    shortName: "Sandy Springs",
    addressLine1: "1150 Hammond Drive",
    addressLine2: "Suite 400",
    city: "Sandy Springs",
    state: "GA",
    zip: "30328",
    phoneDisplay: "(770) 292-6500",
    phoneHref: "tel:+17702926500",
    hours: [
      "Monday – Thursday: 7:30 AM – 4:00 PM",
      "Friday: 7:30 AM – 6:00 PM",
      "Saturday – Sunday: Closed",
    ],
    mapQuery: "1150 Hammond Drive Suite 400 Sandy Springs GA 30328",
  },
];

/** Facilities where Dr. Vojdani performs surgery (distinct from clinic offices). */
export const surgeryFacilities: {
  name: string;
  type: string;
  addressLine1: string;
  city: string;
  state: string;
  zip: string;
  mapQuery: string;
  note: string;
}[] = [
  {
    name: "Total Joint Surgery Center – Atlanta",
    type: "Dedicated Joint Replacement Surgery Center",
    addressLine1: "1150 Hammond Drive, Suite 600",
    city: "Sandy Springs",
    state: "GA",
    zip: "30328",
    mapQuery: "Total Joint Surgery Center 1150 Hammond Drive Suite 600 Sandy Springs GA",
    note: "A surgery center built exclusively for hip and knee replacement — same building as the Sandy Springs office, and home to many of Dr. Vojdani's same-day outpatient procedures.",
  },
  {
    name: "Northside Hospital Atlanta",
    type: "Hospital",
    addressLine1: "1000 Johnson Ferry Road NE",
    city: "Atlanta",
    state: "GA",
    zip: "30342",
    mapQuery: "Northside Hospital Atlanta 1000 Johnson Ferry Road NE Atlanta GA",
    note: "Full-service hospital setting for patients whose health history or procedure complexity calls for hospital-based surgery and overnight care.",
  },
  {
    name: "Meridian Mark Ambulatory Surgery Center",
    type: "Outpatient Surgery Center",
    addressLine1: "5445 Meridian Mark Road NE",
    city: "Atlanta",
    state: "GA",
    zip: "30342",
    mapQuery: "Northside Meridian Mark Outpatient Surgery Center 5445 Meridian Mark Road NE Atlanta GA",
    note: "Northside's outpatient surgery center near Pill Hill — another convenient same-day surgery option minutes from the Sandy Springs office.",
  },
];

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  metaDescription: string;
  keyword: string;
  bullets: string[];
  body: string[];
};

/** Photo path + alt text for each service (files in /public/images/services). */
export function serviceImage(slug: string): { src: string; alt: string } {
  const alts: Record<string, string> = {
    "anterior-hip-replacement":
      "Active senior couple walking comfortably together on a park path",
    "total-knee-replacement":
      "Physician reviewing a knee X-ray during a patient consultation",
    "partial-knee-replacement":
      "Clinician examining and treating a patient's knee",
    "robotic-assisted-surgery":
      "Surgical team working under lights in a modern operating room",
    "outpatient-same-day-joint-replacement":
      "Happy senior couple walking outdoors, enjoying an active day",
    "revision-joint-replacement":
      "Medical professional closely examining a leg X-ray",
  };
  return {
    src: `/images/services/${slug}.jpg`,
    alt: alts[slug] ?? "Hip and knee replacement care",
  };
}

export const services: Service[] = [
  {
    slug: "anterior-hip-replacement",
    name: "Direct Anterior Hip Replacement",
    shortName: "Anterior Hip Replacement",
    keyword: "anterior hip replacement Atlanta",
    summary:
      "A muscle-sparing, minimally invasive approach to hip replacement that avoids cutting through major muscles, often allowing for a faster return to daily activities.",
    metaDescription:
      "Dr. Sam Vojdani performs direct anterior hip replacement in Atlanta, GA — a minimally invasive, muscle-sparing technique for patients with hip arthritis in Midtown Atlanta and Sandy Springs.",
    bullets: [
      "Muscle-sparing approach — no detachment of major hip muscles",
      "Performed from the front of the hip with the patient positioned face-up",
      "Often associated with less post-operative pain and a quicker return to walking",
      "Candidacy depends on anatomy, prior surgeries, and overall health",
    ],
    body: [
      "The direct anterior approach to hip replacement accesses the hip joint through an interval between muscles rather than cutting through them. Because the major muscles supporting the hip are preserved rather than detached and repaired, many patients experience less post-operative pain and a more rapid return to walking without restrictions compared to traditional posterior or lateral approaches.",
      "Dr. Vojdani evaluates each patient's hip anatomy, activity goals, and prior surgical history to determine whether the anterior approach is the right fit. Not every patient is a candidate, and a thorough exam and imaging review are part of every consultation.",
      "Many patients who undergo anterior hip replacement are candidates for outpatient or same-day joint replacement, allowing recovery to begin at home rather than in a hospital bed.",
    ],
  },
  {
    slug: "total-knee-replacement",
    name: "Total Knee Replacement",
    shortName: "Total Knee Replacement",
    keyword: "knee replacement Atlanta Georgia",
    summary:
      "Resurfacing of a knee joint damaged by arthritis using a quadriceps-sparing technique designed to protect the muscles that control the knee.",
    metaDescription:
      "Dr. Sam Vojdani offers total knee replacement in Atlanta, GA, including quadriceps-sparing and customized techniques, for patients with advanced knee arthritis.",
    bullets: [
      "Quadriceps-sparing surgical technique",
      "Customized implant positioning based on each patient's individual anatomy",
      "Multi-modal pain control to reduce reliance on opioids after surgery",
      "Structured physical therapy pathway to support recovery",
    ],
    body: [
      "Total knee replacement resurfaces the ends of the thigh bone (femur) and shin bone (tibia), and often the underside of the kneecap, with implant components designed to restore smooth, pain-free motion once arthritis has worn away the joint's natural cartilage.",
      "Dr. Vojdani uses a quadriceps-sparing technique that limits disruption to the quadriceps tendon, one of the primary muscles used to straighten the knee and climb stairs. Implant alignment is planned around each patient's individual anatomy rather than a one-size-fits-all target.",
      "Recovery is supported by a multi-modal pain control protocol — combining several complementary medications and techniques to control pain while minimizing opioid use — along with a structured physical therapy plan.",
    ],
  },
  {
    slug: "partial-knee-replacement",
    name: "Partial Knee Replacement",
    shortName: "Partial Knee Replacement",
    keyword: "partial knee replacement Atlanta",
    summary:
      "A less invasive alternative to total knee replacement for patients whose arthritis is limited to a single compartment of the knee.",
    metaDescription:
      "Dr. Sam Vojdani performs partial (unicompartmental) knee replacement in Atlanta, GA for patients with arthritis limited to one part of the knee.",
    bullets: [
      "Preserves healthy bone, cartilage, and ligaments",
      "Smaller incision than total knee replacement",
      "Best suited for arthritis confined to one compartment of the knee",
      "Often allows for a faster recovery than total knee replacement",
    ],
    body: [
      "When arthritis is confined to just one compartment of the knee — most commonly the inner (medial) side — a partial, or unicompartmental, knee replacement can resurface only the damaged portion while preserving the healthy bone, cartilage, and ligaments elsewhere in the joint.",
      "Because less of the knee is altered, partial knee replacement is performed through a smaller incision and can offer a faster early recovery for the right candidate. Not every patient with knee arthritis qualifies — Dr. Vojdani reviews imaging and exam findings carefully to confirm the arthritis pattern is truly limited to one compartment before recommending this option over a total knee replacement.",
    ],
  },
  {
    slug: "robotic-assisted-surgery",
    name: "Robotic & Computer-Assisted Joint Replacement",
    shortName: "Robotic-Assisted Surgery",
    keyword: "robotic knee replacement Georgia",
    summary:
      "Robotic and computer-assisted surgical techniques used to help plan implant position and alignment with precision specific to each patient's anatomy.",
    metaDescription:
      "Dr. Sam Vojdani uses robotic and computer-assisted techniques for hip and knee replacement in Atlanta, GA to support precise, patient-specific implant alignment.",
    bullets: [
      "Pre-operative planning based on each patient's own joint anatomy",
      "Intra-operative data to help guide implant positioning",
      "Used for both hip and knee replacement procedures",
      "A tool that supports surgical judgment — not a replacement for it",
    ],
    body: [
      "Robotic and computer-assisted platforms allow Dr. Vojdani to build a pre-operative plan from each patient's own imaging, then reference real-time data during surgery to help guide implant position and joint alignment.",
      "These systems are a tool that supports a surgeon's technique and decision-making — they do not replace the judgment, experience, and hands-on skill required to perform a safe, well-executed joint replacement. Dr. Vojdani uses robotic and computer-assisted techniques selectively, based on what best serves each patient's anatomy and goals.",
    ],
  },
  {
    slug: "outpatient-same-day-joint-replacement",
    name: "Outpatient & Same-Day Joint Replacement",
    shortName: "Outpatient Joint Replacement",
    keyword: "same day joint replacement Atlanta",
    summary:
      "For appropriately selected patients, hip and knee replacement performed on an outpatient basis, with recovery beginning at home the same day.",
    metaDescription:
      "Dr. Sam Vojdani offers outpatient and same-day hip and knee replacement in Atlanta, GA for appropriately selected, healthy candidates.",
    bullets: [
      "Candidacy is based on overall health, home support, and surgical factors",
      "Multi-modal pain control protocols support recovery outside the hospital",
      "Coordinated physical therapy plan begins soon after surgery",
      "Not appropriate for every patient — evaluated on a case-by-case basis",
    ],
    body: [
      "Advances in surgical technique, anesthesia, and pain management have made it possible for appropriately selected patients to go home the same day as their hip or knee replacement rather than staying overnight in the hospital.",
      "Candidacy depends on a patient's overall health, the support available at home, and factors specific to the planned procedure. During consultation, Dr. Vojdani reviews these factors to determine whether an outpatient pathway is a safe and appropriate option, or whether a short inpatient stay is the better choice.",
    ],
  },
  {
    slug: "revision-joint-replacement",
    name: "Complex Revision Joint Replacement",
    shortName: "Revision Joint Replacement",
    keyword: "hip and knee revision surgery Atlanta",
    summary:
      "Reconstruction and revision of a prior hip or knee replacement affected by wear, loosening, instability, or infection.",
    metaDescription:
      "Dr. Sam Vojdani performs complex revision hip and knee replacement surgery in Atlanta, GA for patients whose prior joint replacement requires reconstruction.",
    bullets: [
      "Evaluation of prior implant wear, loosening, or instability",
      "Reconstruction planning for complex bone loss",
      "Coordinated care for infection-related revision surgery",
      "Individualized planning drawing on imaging, prior operative reports, and exam findings",
    ],
    body: [
      "Not every hip or knee replacement lasts a lifetime, and some patients require a second surgery — a revision — to address implant wear, loosening, instability, or infection. Revision surgery is generally more complex than a first-time joint replacement, often requiring specialized implants and reconstruction techniques to address bone loss or soft tissue damage.",
      "Dr. Vojdani evaluates prior operative reports, implant records, and current imaging to build an individualized reconstruction plan for each revision case, and coordinates with infectious disease specialists when infection is a factor.",
    ],
  },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "How do I know if it's time for a hip or knee replacement?",
    answer:
      "Common signs include pain that limits walking, stairs, or sleep; stiffness that doesn't improve with rest; and reduced response to conservative treatments like anti-inflammatory medication, injections, or physical therapy. A consultation and imaging review with Dr. Vojdani can help clarify whether joint replacement is the right next step for you.",
  },
  {
    question: "What is the difference between anterior and posterior hip replacement?",
    answer:
      "The anterior approach accesses the hip through an interval between muscles at the front of the hip, without detaching major muscle groups. The posterior approach, a traditional technique, accesses the hip from behind and involves a brief release and repair of certain muscles and tendons. Both approaches can produce excellent results — the right choice depends on individual anatomy and surgical history, which Dr. Vojdani will review with you.",
  },
  {
    question: "Am I a candidate for partial knee replacement instead of total knee replacement?",
    answer:
      "Partial knee replacement is appropriate only when arthritis is confined to a single compartment of the knee, with the remaining ligaments and cartilage still healthy. Imaging and a physical exam are needed to confirm this before it can be recommended over a total knee replacement.",
  },
  {
    question: "Will I be able to go home the same day as surgery?",
    answer:
      "Many patients are candidates for outpatient or same-day joint replacement, but this depends on overall health, home support, and factors specific to your procedure. Dr. Vojdani will discuss whether a same-day pathway or a short inpatient stay is the safer option for you.",
  },
  {
    question: "What hospitals and surgery centers does Dr. Vojdani operate at?",
    answer:
      "Dr. Vojdani performs surgery at Total Joint Surgery Center – Atlanta, Northside Hospital Atlanta, and Meridian Mark Ambulatory Surgery Center, in addition to seeing patients at the Midtown Atlanta and Sandy Springs offices of Total Joint Specialists.",
  },
  {
    question: "Does Dr. Vojdani treat revision (repeat) joint replacement cases?",
    answer:
      "Yes. Dr. Vojdani evaluates and treats patients whose prior hip or knee replacement requires revision due to wear, loosening, instability, or infection, building an individualized reconstruction plan based on prior records and current imaging.",
  },
];
