export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: "Hip" | "Knee" | "Recovery" | "Deciding";
  readingMinutes: number;
  summary: string;
  /** Section heading + paragraphs. Rendered as h2 + p's. */
  sections: { heading: string; paragraphs: string[] }[];
  /** Optional in-article FAQ — also emitted as FAQPage schema. */
  faqs?: { question: string; answer: string }[];
  relatedServices: string[]; // service slugs
  relatedArticles: string[]; // article slugs
};

export const articles: Article[] = [
  {
    slug: "anterior-hip-replacement-recovery-timeline",
    title: "Anterior Hip Replacement Recovery: A Week-by-Week Timeline",
    metaTitle: "Anterior Hip Replacement Recovery Timeline | Week by Week",
    metaDescription:
      "What recovery from anterior hip replacement really looks like — week-by-week milestones, when you can walk, drive, and return to work, from Atlanta hip surgeon Dr. Sam Vojdani.",
    category: "Recovery",
    readingMinutes: 7,
    summary:
      "A realistic week-by-week look at recovery after minimally invasive anterior hip replacement — from the first steps on surgery day to returning to the activities you love.",
    sections: [
      {
        heading: "Why the anterior approach changes the recovery picture",
        paragraphs: [
          "The direct anterior approach reaches the hip joint through a natural interval between muscles at the front of the hip, rather than detaching muscles and repairing them afterward. Because the muscles that stabilize the hip stay attached, most patients begin walking within hours of surgery, and many need fewer movement restrictions than with traditional approaches.",
          "Every patient's timeline is different — age, overall health, pre-surgery strength, and home support all matter. The milestones below reflect a typical course for patients treated by Dr. Vojdani, but your own plan may differ, and your surgical team's instructions always take precedence over any general guide.",
        ],
      },
      {
        heading: "Surgery day to week 1: first steps and going home",
        paragraphs: [
          "Most anterior hip replacement patients stand and walk with a walker within a few hours of surgery. Appropriately selected patients go home the same day; others stay one night. Multi-modal pain control — combining several non-opioid medications with limited short-term opioid use — keeps discomfort manageable while avoiding the fog of heavy narcotics.",
          "During the first week at home, patients typically walk short distances several times a day, transition from a walker toward a cane as balance allows, and manage swelling with ice and elevation. Walking is the main physical therapy in this phase — frequent, short, and gradually longer.",
        ],
      },
      {
        heading: "Weeks 2–6: regaining independence",
        paragraphs: [
          "By two weeks, many patients have retired the walker indoors and are walking with a cane or unassisted for short distances. Driving is usually considered once you are off opioid medication and can react safely — often around two to three weeks for a left hip (with an automatic transmission) and three to four weeks for a right hip, but only with your surgeon's clearance.",
          "Desk-based work is often possible within two to three weeks; physically demanding jobs take longer. Formal physical therapy focuses on gait quality, hip strength, and endurance rather than aggressive stretching.",
        ],
      },
      {
        heading: "Months 2–12: returning to the activities you love",
        paragraphs: [
          "Most patients feel dramatically better than before surgery by six to eight weeks — walking without pain, sleeping through the night, and handling stairs comfortably. Low-impact activities such as cycling, swimming, golf, and hiking typically resume in the two-to-three-month window with your surgeon's approval.",
          "Full recovery — where the hip stops being something you think about — continues over six to twelve months as strength and confidence return. High-impact running and jumping sports are generally discouraged long-term to protect the implant, but an active lifestyle is exactly what a successful hip replacement is meant to restore.",
        ],
      },
    ],
    faqs: [
      {
        question: "How soon can I walk after anterior hip replacement?",
        answer:
          "Most patients stand and take their first steps with a walker within hours of surgery. Walking frequency and distance build daily from there.",
      },
      {
        question: "When can I sleep on my side after anterior hip replacement?",
        answer:
          "Many surgeons allow side-sleeping — often with a pillow between the knees at first — within the first few weeks. Follow your own surgeon's specific guidance.",
      },
      {
        question: "How long does pain last after anterior hip replacement?",
        answer:
          "Significant surgical pain usually improves substantially within the first one to two weeks. Mild aching and stiffness with activity can persist for a few months as tissues heal and strength returns.",
      },
    ],
    relatedServices: ["anterior-hip-replacement", "outpatient-same-day-joint-replacement"],
    relatedArticles: [
      "when-is-it-time-for-hip-replacement",
      "same-day-joint-replacement-candidacy",
    ],
  },
  {
    slug: "when-is-it-time-for-hip-replacement",
    title: "When Is It Time for a Hip Replacement? 7 Signs to Watch",
    metaTitle: "When Is It Time for Hip Replacement? 7 Signs",
    metaDescription:
      "How to know when hip arthritis has progressed far enough to consider hip replacement — 7 signs from Atlanta orthopedic surgeon Dr. Sam Vojdani.",
    category: "Deciding",
    readingMinutes: 6,
    summary:
      "Hip replacement is elective — you choose when the time is right. These seven signs help you recognize when arthritis is taking more from your life than conservative care can give back.",
    sections: [
      {
        heading: "Hip replacement is a quality-of-life decision",
        paragraphs: [
          "Unlike emergency surgery, hip replacement for arthritis is almost always elective: the right time is when pain and stiffness cost you more than the surgery and recovery would. X-ray severity alone doesn't decide — some patients with severe-looking X-rays function well, while others with moderate changes are miserable. What matters is the combination of imaging, examination, and how your hip is affecting your life.",
        ],
      },
      {
        heading: "The seven signs",
        paragraphs: [
          "1. Groin, thigh, or buttock pain that limits walking distance — needing to stop and rest, or planning errands around how far you can walk.",
          "2. Night pain — arthritis pain that wakes you or prevents comfortable sleep positions is a classic sign of advanced joint disease.",
          "3. Stiffness that makes shoes and socks a struggle — difficulty reaching your foot to dress is a hallmark of lost hip motion.",
          "4. Failed conservative care — anti-inflammatories, activity modification, physical therapy, or injections that once helped no longer do, or help only briefly.",
          "5. Giving up activities you love — golf, travel, gardening, playing with grandchildren — because your hip can't tolerate them.",
          "6. A visible limp or leaning on carts and rails — your body is already compensating, which can strain the back and opposite joints.",
          "7. X-rays showing bone-on-bone arthritis alongside the symptoms above — when imaging and symptoms agree, further waiting rarely adds benefit.",
        ],
      },
      {
        heading: "What waiting too long can cost",
        paragraphs: [
          "Delaying surgery indefinitely is a legitimate choice, but it has real trade-offs: progressive muscle weakness and deconditioning make recovery harder, worsening stiffness can be harder to fully correct, and compensatory back, knee, and opposite-hip pain can develop. Patients who come to surgery stronger tend to recover faster.",
          "A consultation doesn't commit you to surgery. Dr. Vojdani reviews imaging and examination findings, discusses non-surgical options honestly, and helps you weigh timing — including whether waiting makes sense for your situation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I wait too long for hip replacement?",
        answer:
          "There's rarely a hard deadline, but prolonged waiting can lead to muscle weakness, worsening stiffness, and compensatory pain in the back and other joints — all of which can make recovery slower. Discussing timing with a surgeon helps you make an informed choice.",
      },
      {
        question: "Do steroid injections delay the need for hip replacement?",
        answer:
          "Injections can provide temporary relief and are a reasonable part of conservative care, but they don't reverse arthritis. Note that recent injections may require a waiting period before surgery to reduce infection risk.",
      },
    ],
    relatedServices: ["anterior-hip-replacement"],
    relatedArticles: [
      "anterior-hip-replacement-recovery-timeline",
      "anterior-vs-posterior-hip-replacement",
    ],
  },
  {
    slug: "anterior-vs-posterior-hip-replacement",
    title: "Anterior vs. Posterior Hip Replacement: What's the Real Difference?",
    metaTitle: "Anterior vs Posterior Hip Replacement Compared",
    metaDescription:
      "An honest comparison of anterior and posterior hip replacement approaches — recovery, precautions, risks, and who each is right for, from Atlanta surgeon Dr. Sam Vojdani.",
    category: "Hip",
    readingMinutes: 6,
    summary:
      "Both approaches produce excellent long-term results. The differences lie in the early recovery, movement precautions, and which anatomy each suits best.",
    sections: [
      {
        heading: "The core difference: how the surgeon reaches the joint",
        paragraphs: [
          "In the posterior approach — the most common technique historically — the surgeon reaches the hip from the back, briefly releasing and then repairing certain short rotator muscles and the joint capsule. In the direct anterior approach, the surgeon works through a natural interval between muscles at the front of the hip without detaching them.",
          "Both approaches implant the same types of components and, in experienced hands, achieve equally excellent long-term outcomes. The question is not which is 'better' universally, but which fits your anatomy, your health profile, and your surgeon's expertise.",
        ],
      },
      {
        heading: "Where the anterior approach tends to shine",
        paragraphs: [
          "Because muscles are spared rather than repaired, anterior patients often have less early pain, faster return to unassisted walking, and typically fewer traditional hip precautions (like strict limits on bending past 90 degrees or crossing the legs). Lying face-up during surgery also allows the surgeon to use imaging to fine-tune implant position and leg length in real time.",
          "These early-recovery advantages narrow with time — by three to six months, well-performed hips from either approach are hard to tell apart.",
        ],
      },
      {
        heading: "Where the posterior approach remains a strong choice",
        paragraphs: [
          "The posterior approach offers outstanding visibility of the femur, which matters in complex anatomy, revision settings, and certain body types. Patients with prior hip surgery, unusual femoral anatomy, or significant obesity may be better served posteriorly. A skilled posterior-approach surgeon with excellent outcomes is a far better choice than an inexperienced anterior-approach one.",
          "Dr. Vojdani performs anterior approach hip replacement as his primary technique for suitable candidates and evaluates each patient's anatomy and history to confirm the right approach — including recommending alternatives when anatomy favors them.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is anterior hip replacement safer than posterior?",
        answer:
          "Overall complication rates are similar in experienced hands. Historically the posterior approach carried a slightly higher early dislocation rate and the anterior approach a small risk of temporary thigh numbness — both uncommon with modern techniques.",
      },
      {
        question: "Does insurance cover anterior hip replacement differently?",
        answer:
          "No — the surgical approach doesn't change insurance coverage. Hip replacement is covered the same way regardless of approach.",
      },
    ],
    relatedServices: ["anterior-hip-replacement"],
    relatedArticles: [
      "anterior-hip-replacement-recovery-timeline",
      "when-is-it-time-for-hip-replacement",
    ],
  },
  {
    slug: "partial-vs-total-knee-replacement",
    title: "Partial vs. Total Knee Replacement: Which Is Right for You?",
    metaTitle: "Partial vs Total Knee Replacement: How to Choose",
    metaDescription:
      "Partial and total knee replacement compared — candidacy, recovery, longevity, and trade-offs, explained by Atlanta knee surgeon Dr. Sam Vojdani.",
    category: "Knee",
    readingMinutes: 6,
    summary:
      "Partial knee replacement preserves more of your natural knee but only works when arthritis is confined to one compartment. Here's how surgeons decide — and what each option means for you.",
    sections: [
      {
        heading: "The knee has three compartments",
        paragraphs: [
          "Your knee has three compartments: the inner (medial), the outer (lateral), and the kneecap (patellofemoral). Arthritis can wear one compartment while leaving the others healthy. A total knee replacement resurfaces all three; a partial (unicompartmental) replacement resurfaces only the worn one, preserving the healthy cartilage and — importantly — the anterior cruciate ligament.",
        ],
      },
      {
        heading: "The case for partial knee replacement",
        paragraphs: [
          "For the right candidate, a partial knee replacement offers a smaller incision, less bone removal, a quicker early recovery, and a knee that often feels more 'natural' — because the preserved ligaments and compartments keep the knee's native motion pattern. Many partial knee patients are excellent candidates for outpatient surgery.",
          "The requirements are strict: arthritis truly confined to one compartment, an intact ACL, good motion, and correctable alignment. Imaging and examination confirm candidacy — roughly speaking, only a minority of knee arthritis patients qualify.",
        ],
      },
      {
        heading: "The case for total knee replacement",
        paragraphs: [
          "When arthritis involves multiple compartments — the most common situation — total knee replacement is the reliable answer. Modern total knees, performed with quadriceps-sparing technique and alignment customized to your anatomy, deliver excellent pain relief and durability, with the large majority of implants lasting 15–20+ years.",
          "Choosing a partial knee when arthritis is too widespread trades short-term appeal for a likely revision later, when the remaining compartments wear. That's why honest candidacy assessment matters more than preference.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does a partial knee replacement last as long as a total?",
        answer:
          "Modern partial knees are durable, though revision rates run somewhat higher than total knees — partly because arthritis can progress in the untreated compartments. For well-selected patients, a partial knee can last decades.",
      },
      {
        question: "Can a partial knee replacement be converted to a total later?",
        answer:
          "Yes. If arthritis progresses, a partial knee can be converted to a total knee replacement. The conversion is typically more straightforward than revising a total knee.",
      },
    ],
    relatedServices: ["partial-knee-replacement", "total-knee-replacement"],
    relatedArticles: [
      "knee-replacement-recovery-timeline",
      "when-is-it-time-for-knee-replacement",
    ],
  },
  {
    slug: "when-is-it-time-for-knee-replacement",
    title: "When Is Knee Replacement Worth It? An Honest Guide to Timing",
    metaTitle: "When Is Knee Replacement Worth It? Timing Guide",
    metaDescription:
      "How to decide when knee arthritis justifies replacement surgery — signs, timing trade-offs, and what to try first, from Atlanta surgeon Dr. Sam Vojdani.",
    category: "Deciding",
    readingMinutes: 6,
    summary:
      "Knee replacement is worth it when arthritis costs you more than surgery would — here's how to weigh that honestly, and what conservative options deserve a real trial first.",
    sections: [
      {
        heading: "First: what deserves a genuine trial before surgery",
        paragraphs: [
          "Knee replacement should rarely be the first move. Weight optimization, activity modification, quadriceps and hip strengthening, anti-inflammatory medication, and injections all have legitimate roles — and many patients buy years of acceptable function with them. Dr. Vojdani offers non-surgical arthritis care and recommends surgery only when it's genuinely the right next step.",
          "The key word is genuine trial: a few weeks of half-hearted exercises isn't a fair test. But when properly applied conservative care no longer controls symptoms, continuing to repeat it has diminishing returns.",
        ],
      },
      {
        heading: "Signals that the time has come",
        paragraphs: [
          "Pain most days despite medication. Night pain that disturbs sleep. Swelling that recurs with normal activity. Stairs taken one at a time. Declining walking distance. Skipping events you value because of your knee. Bone-on-bone changes on X-ray that match where you hurt. When several of these line up, replacement usually delivers its best value — restoring function you still have the strength to use.",
        ],
      },
      {
        heading: "The timing sweet spot",
        paragraphs: [
          "Surgeons increasingly recognize a timing sweet spot. Operate too early — with mild disease — and the risk-benefit math is unfavorable. Wait too long and deconditioning, stiffness, and compensatory problems make surgery harder and recovery slower. The best results tend to come to patients who are clearly symptomatic yet still active enough to rehab vigorously.",
          "A consultation clarifies where you are on that curve. It commits you to nothing — but it converts guessing into an informed plan, whether that plan is surgery this year or a structured conservative program with a re-check.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is there an ideal age for knee replacement?",
        answer:
          "There's no single ideal age. Surgeons weigh symptoms, imaging, activity level, and health rather than age alone. Modern implants' durability has made replacement reasonable for appropriately selected younger patients, while healthy patients in their 80s also do well.",
      },
      {
        question: "Will I be too old for knee replacement if I wait?",
        answer:
          "Age by itself rarely disqualifies a patient — overall health matters far more. But prolonged waiting can erode strength and mobility, which affects recovery quality at any age.",
      },
    ],
    relatedServices: ["total-knee-replacement", "partial-knee-replacement"],
    relatedArticles: [
      "partial-vs-total-knee-replacement",
      "knee-replacement-recovery-timeline",
    ],
  },
  {
    slug: "knee-replacement-recovery-timeline",
    title: "Knee Replacement Recovery: What to Expect Week by Week",
    metaTitle: "Knee Replacement Recovery Timeline | Week by Week",
    metaDescription:
      "A realistic week-by-week knee replacement recovery timeline — walking, driving, work, and full activity, from Atlanta knee surgeon Dr. Sam Vojdani.",
    category: "Recovery",
    readingMinutes: 7,
    summary:
      "Knee replacement recovery rewards consistent work. This week-by-week guide sets realistic expectations — including the honest truth that knees grumble longer than hips.",
    sections: [
      {
        heading: "The honest headline: knees take work",
        paragraphs: [
          "Patients who've had both will tell you: knee replacement recovery demands more active effort than hip replacement. The knee wants to stiffen after surgery, and preventing that requires consistent motion exercises even when the knee protests. Patients who commit to the program overwhelmingly get there; the timeline below shows the typical path.",
        ],
      },
      {
        heading: "Weeks 0–2: motion is the mission",
        paragraphs: [
          "Walking starts the day of surgery with a walker. The first two weeks prioritize two things: getting the knee fully straight, and progressively bending it — with a common early target around 90 degrees or more by two weeks. Ice, elevation, and multi-modal pain control keep swelling and discomfort manageable enough to do the work.",
          "Quadriceps-sparing surgical technique helps here: with less disruption to the extensor mechanism, early leg control and straight-leg raises typically come easier.",
        ],
      },
      {
        heading: "Weeks 2–6: turning the corner",
        paragraphs: [
          "Most patients transition from walker to cane in this window and many walk unassisted by week four to six. Driving typically returns around three to four weeks (right knee later than left, and only off opioids with your surgeon's clearance). Desk work is often feasible at two to three weeks; standing occupations take six-plus.",
          "Bend continues improving toward 110–120+ degrees. Swelling after activity remains normal — the knee is often the last to know the surgery went well.",
        ],
      },
      {
        heading: "Months 2–12: from recovering to living",
        paragraphs: [
          "By two to three months, most patients walk without support, handle stairs normally, and return to low-impact recreation — golf, cycling, swimming, travel. Strength and confidence continue building through month six, and subtle warmth, clicking, or stiffness after long days can persist up to a year as the knee fully settles.",
          "The destination is worth the work: modern knee replacement reliably relieves arthritis pain and restores active life, with most implants lasting 15–20+ years.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long until I can walk normally after knee replacement?",
        answer:
          "Most patients walk with a cane by two to three weeks and unassisted around four to six weeks, with gait continuing to normalize over two to three months.",
      },
      {
        question: "Why is my knee still stiff months after replacement?",
        answer:
          "Mild stiffness after long days can persist up to a year and usually keeps improving. Significant or worsening stiffness deserves evaluation — occasionally scar tissue (arthrofibrosis) needs treatment.",
      },
      {
        question: "When can I kneel after knee replacement?",
        answer:
          "Kneeling is generally safe once the incision is fully healed, though many patients find it uncomfortable and prefer a cushion. Comfort with kneeling often improves over the first year.",
      },
    ],
    relatedServices: ["total-knee-replacement", "robotic-assisted-surgery"],
    relatedArticles: [
      "when-is-it-time-for-knee-replacement",
      "partial-vs-total-knee-replacement",
    ],
  },
  {
    slug: "same-day-joint-replacement-candidacy",
    title: "Same-Day Joint Replacement: Are You a Candidate?",
    metaTitle: "Same-Day Hip & Knee Replacement: Candidacy Guide",
    metaDescription:
      "Who qualifies for outpatient same-day hip or knee replacement — the health, home, and surgical factors surgeons assess, from Atlanta surgeon Dr. Sam Vojdani.",
    category: "Deciding",
    readingMinutes: 5,
    summary:
      "Most healthy joint replacement patients can now recover at home from day one. Here's how surgeons decide who's a safe candidate for the outpatient pathway.",
    sections: [
      {
        heading: "How joint replacement became a same-day surgery",
        paragraphs: [
          "A generation ago, joint replacement meant days in the hospital. Advances changed that arithmetic: muscle-sparing surgical techniques, regional anesthesia and multi-modal pain control that avoid heavy narcotics, better blood-loss management, and rapid-mobilization protocols. For appropriately selected patients, recovering in your own home — sleeping in your own bed, moving on your own schedule — is now both safe and preferable.",
        ],
      },
      {
        heading: "What makes a good candidate",
        paragraphs: [
          "Health factors: well-controlled medical conditions, no severe heart or lung disease, no poorly controlled diabetes or sleep apnea, and reasonable baseline mobility. Home factors: a capable adult at home the first night or two, and a living situation you can navigate. Surgical factors: a primary (first-time) replacement without unusual complexity.",
          "None of these are absolute rules — they're a risk assessment. Dr. Vojdani reviews your health history, medications, and home setup at consultation and recommends the setting that's genuinely safest for you, whether that's same-day discharge or a short hospital stay.",
        ],
      },
      {
        heading: "What same-day actually looks like",
        paragraphs: [
          "You arrive in the morning, have surgery, and walk with physical therapy that afternoon. Once you're medically stable, walking safely, and comfortable, you go home with clear instructions, medications arranged, and therapy scheduled. Your care team remains a phone call away, and follow-up visits track your progress. Same-day discharge changes where you recover — not how carefully you're looked after.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is same-day joint replacement as safe as staying in the hospital?",
        answer:
          "For appropriately selected patients, published research shows outpatient joint replacement has complication rates comparable to inpatient surgery. Selection is the key — candidacy screening exists precisely to keep it safe.",
      },
      {
        question: "Does Medicare cover outpatient joint replacement?",
        answer:
          "Yes — Medicare covers hip and knee replacement performed in outpatient settings, including ambulatory surgery centers. Verify specifics with your plan before scheduling.",
      },
    ],
    relatedServices: ["outpatient-same-day-joint-replacement", "anterior-hip-replacement"],
    relatedArticles: [
      "anterior-hip-replacement-recovery-timeline",
      "knee-replacement-recovery-timeline",
    ],
  },
  {
    slug: "robotic-knee-replacement-explained",
    title: "Robotic Knee Replacement: What It Actually Does (and Doesn't)",
    metaTitle: "Robotic Knee Replacement Explained: Benefits & Limits",
    metaDescription:
      "What robotic-assisted knee replacement really does — precision planning, personalized alignment, and honest limits — from Atlanta surgeon Dr. Sam Vojdani.",
    category: "Knee",
    readingMinutes: 5,
    summary:
      "The robot doesn't perform your surgery — your surgeon does. Here's what robotic assistance genuinely adds to knee replacement, and what remains marketing.",
    sections: [
      {
        heading: "What the robot actually is",
        paragraphs: [
          "Robotic-assisted knee replacement combines a pre-operative or intra-operative 3D model of your knee with a robotic arm or guidance system that helps execute the surgeon's plan precisely. The surgeon makes every decision — the robot constrains the tools to the planned cuts, like a sophisticated stencil. It is precision assistance, not automation.",
        ],
      },
      {
        heading: "Where robotics genuinely helps",
        paragraphs: [
          "The strongest case is personalization: robotics lets a surgeon plan implant position around your specific anatomy — including kinematic-style alignment philosophies that aim to reproduce your knee's natural motion rather than forcing every knee to one mechanical target — and then execute that plan within a millimeter or degree. It also provides live feedback on ligament balance, which traditionally relied on surgeon feel alone.",
          "Evidence shows robotic assistance improves the precision of implant placement and may reduce soft-tissue trauma. Whether that translates into better long-term outcomes for every patient is still being studied honestly — which is why it's a tool in the toolbox, not a requirement for a great result.",
        ],
      },
      {
        heading: "What matters more than the robot",
        paragraphs: [
          "Your surgeon's judgment, experience, and volume of joint replacements matter more than any technology. A high-volume surgeon without a robot beats an occasional operator with one. Dr. Vojdani uses robotic and computer-assisted techniques where they serve the plan — and his fellowship training in adult reconstruction is what drives the plan itself.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does robotic knee replacement cost more?",
        answer:
          "Patient out-of-pocket cost is typically the same — insurance reimburses knee replacement the same way regardless of robotic assistance.",
      },
      {
        question: "Is recovery faster with robotic knee replacement?",
        answer:
          "Some studies suggest modestly less early pain and swelling, possibly from reduced soft-tissue disruption, but recovery timelines are broadly similar. Surgical technique and your rehab effort remain the biggest drivers.",
      },
    ],
    relatedServices: ["robotic-assisted-surgery", "total-knee-replacement"],
    relatedArticles: [
      "knee-replacement-recovery-timeline",
      "partial-vs-total-knee-replacement",
    ],
  },
  {
    slug: "hip-replacement-cost-insurance-georgia",
    title: "Hip & Knee Replacement Costs and Insurance in Georgia: What to Know",
    metaTitle: "Hip & Knee Replacement Cost & Insurance in Georgia",
    metaDescription:
      "How hip and knee replacement is covered in Georgia — Medicare, commercial insurance, out-of-pocket factors, and questions to ask, from Dr. Sam Vojdani.",
    category: "Deciding",
    readingMinutes: 5,
    summary:
      "Joint replacement is one of medicine's best-covered procedures. Here's how coverage typically works in Georgia and the questions worth asking before you schedule.",
    sections: [
      {
        heading: "The good news: replacement is well covered",
        paragraphs: [
          "Hip and knee replacement for arthritis is a standard covered benefit under Medicare and essentially all commercial insurance when medically indicated — meaning documented arthritis plus symptoms that persist despite conservative care. Coverage applies whether surgery happens in a hospital or an approved ambulatory surgery center, and regardless of surgical approach or robotic assistance.",
        ],
      },
      {
        heading: "What determines your out-of-pocket cost",
        paragraphs: [
          "Your own costs depend on your plan's structure rather than the surgery itself: your deductible and how much of it you've met this year, your coinsurance or copay tiers, your out-of-pocket maximum, and whether your surgeon, facility, and anesthesia group are in network. Patients who have met their deductible late in a calendar year sometimes time surgery to take advantage of it.",
          "Outpatient surgery-center settings can carry lower facility fees than hospital stays for the same procedure — one more reason candidacy for same-day surgery is worth discussing.",
        ],
      },
      {
        heading: "Questions to ask before scheduling",
        paragraphs: [
          "Ask your insurer: Is prior authorization required? Are the surgeon, facility, and anesthesia providers in network? What's my remaining deductible and out-of-pocket max? Is physical therapy covered, and for how many visits? The practice's team helps navigate authorization — bring your insurance card to your consultation and the staff can verify benefits.",
          "This article describes general coverage patterns, not a quote. Verify specifics with your insurer, and the office staff can help you understand what to expect for your plan.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Medicare require prior authorization for joint replacement?",
        answer:
          "Traditional Medicare generally doesn't require prior authorization for medically necessary joint replacement; Medicare Advantage plans often do. The practice's staff handles authorization paperwork when needed.",
      },
      {
        question: "How much does knee replacement cost without insurance in Georgia?",
        answer:
          "Self-pay pricing varies significantly by facility. If you're uninsured, ask the practice about self-pay pricing and payment options at your consultation — surgery-center settings are often the most economical.",
      },
    ],
    relatedServices: ["outpatient-same-day-joint-replacement", "total-knee-replacement"],
    relatedArticles: [
      "same-day-joint-replacement-candidacy",
      "preparing-for-joint-replacement-surgery",
    ],
  },
  {
    slug: "preparing-for-joint-replacement-surgery",
    title: "How to Prepare for Hip or Knee Replacement: A Practical Checklist",
    metaTitle: "Preparing for Hip or Knee Replacement: Checklist",
    metaDescription:
      "A practical pre-surgery checklist for hip and knee replacement — prehab, home setup, medical optimization, and what to bring, from Dr. Sam Vojdani.",
    category: "Recovery",
    readingMinutes: 6,
    summary:
      "The four to six weeks before surgery are an opportunity: patients who prepare well recover faster. Here's the practical checklist.",
    sections: [
      {
        heading: "Strengthen before surgery ('prehab')",
        paragraphs: [
          "The stronger you go in, the faster you come back. In the weeks before surgery, walk regularly to tolerance, and work simple strengthening — chair squats or sit-to-stands, straight-leg raises, calf raises, and gentle cycling if available. Even modest gains in quadriceps and hip strength translate into easier first steps after surgery.",
          "If you smoke, stopping even a few weeks before surgery measurably reduces wound and healing complications — it's the single highest-impact preparation step a smoker can take.",
        ],
      },
      {
        heading: "Optimize your health and medications",
        paragraphs: [
          "Attend your pre-operative medical clearance and complete requested labs promptly. If you're diabetic, tightening glucose control before surgery lowers infection risk. Review all medications and supplements with the surgical team — blood thinners, anti-inflammatories, and certain supplements need specific stop-dates, and some injections require a waiting interval before surgery.",
          "Dental work deserves mention: significant dental infections should be addressed before joint replacement, since oral bacteria can seed a new implant. Routine cleanings are best completed before surgery too.",
        ],
      },
      {
        heading: "Set up your home for week one",
        paragraphs: [
          "Before surgery day: clear walking paths and loose rugs, place a sturdy chair with arms where you'll spend the day, set up a firm-mattress sleeping arrangement on the main floor if stairs are hard, stock easy meals, fill prescriptions in advance, and arrange your helper for the first night or two. A raised toilet seat, shower chair, grabber, and ice packs (or an ice machine) earn their keep in week one.",
          "Plan your ride: you'll need a driver home from surgery and to early appointments until you're cleared to drive.",
        ],
      },
      {
        heading: "What to bring on surgery day",
        paragraphs: [
          "Bring your insurance card and ID, a current medication list, loose comfortable clothes (shorts or loose pants that fit over a bandaged knee or hip), flat supportive shoes, and your walker if you already own one. Leave jewelry and valuables home. Arrive on time, follow fasting instructions exactly, and ask every question you have — an informed patient is a calmer, faster-recovering one.",
        ],
      },
    ],
    faqs: [
      {
        question: "How far in advance should I prepare for joint replacement?",
        answer:
          "Four to six weeks gives time for meaningful prehab strengthening, medical optimization, and home setup without rushing. Even two focused weeks helps.",
      },
      {
        question: "Do I need special equipment at home after hip or knee replacement?",
        answer:
          "A walker for the first weeks is standard. Most patients also benefit from a raised toilet seat, a shower chair, a grabber tool, and plentiful ice. Your care team will tell you if anything else applies to your case.",
      },
    ],
    relatedServices: ["outpatient-same-day-joint-replacement"],
    relatedArticles: [
      "same-day-joint-replacement-candidacy",
      "anterior-hip-replacement-recovery-timeline",
    ],
  },
  {
    slug: "signs-of-failed-knee-or-hip-replacement",
    title: "Signs Your Hip or Knee Replacement May Need Revision",
    metaTitle: "Failed Hip or Knee Replacement: Warning Signs",
    metaDescription:
      "New pain, instability, or swelling years after joint replacement? The warning signs a hip or knee implant may need revision, from Atlanta revision surgeon Dr. Sam Vojdani.",
    category: "Deciding",
    readingMinutes: 5,
    summary:
      "Most joint replacements last decades — but implants can loosen, wear, or become infected. Knowing the warning signs gets problems evaluated while they're most treatable.",
    sections: [
      {
        heading: "Most replacements last — but not all",
        paragraphs: [
          "Modern hip and knee replacements are among the most successful operations in medicine, with the large majority functioning well beyond 15–20 years. A minority develop problems needing revision: mechanical loosening, plastic (polyethylene) wear, instability, fracture around the implant, or infection. Early evaluation consistently makes treatment simpler — bone lost to a loose implant, for instance, is easier to reconstruct sooner than later.",
        ],
      },
      {
        heading: "Warning signs worth evaluating",
        paragraphs: [
          "New or worsening pain in a joint that had been comfortable — especially start-up pain when rising, or thigh/groin pain with a hip. A sense of instability, buckling, or dislocation. New swelling, warmth, or redness. Audible squeaking, clicking, or grinding that's new. A leg that feels newly shorter, or a limp that returns. Fevers or drainage near the joint — a potential infection sign needing prompt attention.",
          "None of these prove implant failure — but all deserve an X-ray and examination rather than watchful waiting on the internet. Persistent unexplained pain after replacement always merits a workup.",
        ],
      },
      {
        heading: "What a revision evaluation involves",
        paragraphs: [
          "Revision assessment is detective work: comparison of current X-rays with prior ones, blood tests to screen for infection, sometimes joint aspiration or advanced imaging, and review of your original operative records — including the implant's make and model. Dr. Vojdani, fellowship-trained in adult reconstruction at Columbia, evaluates and performs complex revision surgery, and coordinates with infectious disease specialists when infection is involved.",
          "If you're unsure whether your symptoms warrant concern, a second opinion on a painful replacement is always reasonable — bring your operative report and prior X-rays if available.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I know if my knee replacement is loose?",
        answer:
          "Classic signs are pain when starting to walk that eases with movement, deep aching with weight-bearing, and changes on serial X-rays. Only imaging and examination can confirm loosening.",
      },
      {
        question: "Can an infected joint replacement be saved?",
        answer:
          "Sometimes — early infections may respond to surgical washout with component retention, while established infections typically require staged revision surgery. Speed of diagnosis matters enormously, which is why new warmth, swelling, or drainage deserves urgent evaluation.",
      },
    ],
    relatedServices: ["revision-joint-replacement"],
    relatedArticles: [
      "when-is-it-time-for-knee-replacement",
      "when-is-it-time-for-hip-replacement",
    ],
  },
  {
    slug: "how-long-does-joint-replacement-last",
    title: "How Long Does a Hip or Knee Replacement Last?",
    metaTitle: "How Long Do Hip & Knee Replacements Last?",
    metaDescription:
      "How long modern hip and knee replacements really last, what wears them out, and what you can do to protect yours — from Atlanta joint replacement surgeon Dr. Sam Vojdani.",
    category: "Deciding",
    readingMinutes: 6,
    summary:
      "Modern implants routinely outlast the old '10-year' rule of thumb. Here's what large registry studies actually show, what shortens an implant's life, and what you can do to protect yours.",
    sections: [
      {
        heading: "The short answer: longer than most patients think",
        paragraphs: [
          "Patients often arrive quoting a decades-old rule of thumb that a joint replacement 'lasts about ten years.' Modern implants have outgrown that number. Large national joint registries — which track hundreds of thousands of real-world patients over decades — consistently show that the large majority of contemporary hip and knee replacements are still functioning well at 15 years, and a substantial share continue beyond 20 to 25 years.",
          "No surgeon can promise a specific lifespan for any individual implant, because longevity depends on factors ranging from age and activity to bone quality and body weight. But for most patients receiving a modern hip or knee replacement today, it is reasonable to think of the implant as a long-term — often multi-decade — solution rather than a stopgap.",
        ],
      },
      {
        heading: "What actually wears an implant out",
        paragraphs: [
          "The most common long-term failure modes are gradual: slow wear of the plastic (polyethylene) bearing surface, and loosening of the implant's fixation to bone over many years. Modern highly cross-linked polyethylene wears dramatically slower than the plastics used a generation ago — one of the main reasons today's implants last longer.",
          "Less common causes include infection (which can occur early or years later), instability or dislocation, and fracture of the bone around the implant. These are precisely the warning signs worth knowing — new pain, swelling, warmth, or instability in a previously comfortable replacement deserves evaluation rather than waiting.",
        ],
      },
      {
        heading: "Does age at surgery matter?",
        paragraphs: [
          "Yes, in two directions. Younger patients place more cycles and more force on an implant over more years, so their lifetime chance of eventually needing a revision is higher — not because the implant fails faster, but because they have more years ahead of them. A patient in their 50s should understand that a future revision is a realistic possibility, even with an excellent result.",
          "That said, improved implant materials have made joint replacement a reasonable option for appropriately selected younger patients who have exhausted conservative care — trading years of pain and declining function for a well-functioning joint is a trade many patients consider worthwhile. This is exactly the kind of individualized decision Dr. Vojdani works through at consultation.",
        ],
      },
      {
        heading: "How to help your replacement last",
        paragraphs: [
          "Maintain a healthy weight — every added pound multiplies across millions of steps per year. Favor low-impact activities (walking, cycling, swimming, golf, doubles tennis) over repetitive high-impact running and jumping. Keep the muscles around the joint strong, since good muscle control protects the implant from abnormal stresses.",
          "Protect against infection: treat skin infections and significant dental infections promptly, and tell any physician or dentist treating you that you have a joint replacement. Finally, keep periodic follow-up X-rays as your surgeon recommends — slow wear or early loosening often shows on imaging before it causes symptoms, when it is simplest to address.",
        ],
      },
      {
        heading: "What happens if it does wear out",
        paragraphs: [
          "If an implant eventually wears or loosens, revision surgery replaces the affected components. Revision is more complex than first-time replacement, but it is a well-established procedure — and identifying problems early, before significant bone loss, keeps the reconstruction simpler. Dr. Vojdani is fellowship-trained in complex revision reconstruction and evaluates painful existing replacements, including second opinions.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a knee or hip replacement last 30 years?",
        answer:
          "Some do — registry data include implants functioning beyond 25 years, and today's bearing materials wear more slowly than those in older studies. But no surgeon can guarantee any specific lifespan; longevity varies with activity, weight, bone quality, and some luck.",
      },
      {
        question: "Do partial knee replacements last as long as total knees?",
        answer:
          "Partial knees historically show somewhat higher revision rates, partly because arthritis can progress in the untreated compartments. For well-selected patients they can still last decades, and conversion to a total knee remains available if needed.",
      },
      {
        question: "Will I need another surgery in my lifetime?",
        answer:
          "It depends mostly on your age at surgery and activity. Many patients who have a replacement in their late 60s or 70s never need another operation. Younger, highly active patients carry a meaningful lifetime chance of one revision — worth discussing openly at consultation.",
      },
    ],
    relatedServices: ["revision-joint-replacement", "total-knee-replacement", "anterior-hip-replacement"],
    relatedArticles: [
      "signs-of-failed-knee-or-hip-replacement",
      "when-is-it-time-for-knee-replacement",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
