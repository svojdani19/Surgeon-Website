export type ServiceArea = {
  slug: string;
  city: string;
  metaDescription: string;
  nearestOffice: "midtown-atlanta" | "sandy-springs";
  nearestOfficeLabel: string;
  driveNote: string;
  intro: string[];
  localNote: string;
};

/**
 * Local-SEO service area pages. Each entry has genuinely distinct copy —
 * real geography, drive routes, and local context — to be useful pages,
 * not doorway pages.
 */
export const serviceAreas: ServiceArea[] = [
  {
    slug: "buckhead",
    city: "Buckhead",
    metaDescription:
      "Hip and knee replacement for Buckhead residents — Dr. Sam Vojdani sees patients minutes away in Midtown Atlanta and Sandy Springs, with anterior hip and robotic knee replacement.",
    nearestOffice: "midtown-atlanta",
    nearestOfficeLabel: "Midtown Atlanta office (about 10–15 minutes south on Peachtree)",
    driveNote:
      "From Buckhead, the Midtown office at 1110 West Peachtree Street is a short drive south via Peachtree Road or GA-400 to the 10th Street exit; the Sandy Springs office on Hammond Drive is equally convenient heading north on GA-400 to Exit 5.",
    intro: [
      "Buckhead residents considering hip or knee replacement have two of Dr. Vojdani's offices within a 15-minute drive — Midtown Atlanta to the south and Sandy Springs to the north. Both offer consultation, imaging review, and pre- and post-operative care close to home.",
      "Dr. Vojdani, an Atlanta native and fellowship-trained joint replacement surgeon, specializes in minimally invasive anterior hip replacement, quadriceps-sparing and robotic-assisted knee replacement, and outpatient same-day joint replacement — an option many active Buckhead patients prefer for recovering at home.",
    ],
    localNote:
      "Surgery is performed at Total Joint Surgery Center – Atlanta, Northside Hospital Atlanta, and Meridian Mark Ambulatory Surgery Center — all just up GA-400 from Buckhead, giving patients convenient hospital and outpatient surgery-center options minutes from home.",
  },
  {
    slug: "midtown",
    city: "Midtown Atlanta",
    metaDescription:
      "Hip and knee replacement in Midtown Atlanta — Dr. Sam Vojdani sees patients at 1110 West Peachtree Street, offering anterior hip replacement and robotic knee replacement.",
    nearestOffice: "midtown-atlanta",
    nearestOfficeLabel: "Midtown Atlanta office at 1110 West Peachtree Street NW",
    driveNote:
      "The office sits at West Peachtree and 12th, steps from the Arts Center MARTA station and easily reached from the Connector (I-75/85) via the 10th/14th Street exits. Parking is available in the building.",
    intro: [
      "For patients living or working in Midtown, Dr. Vojdani's practice is genuinely in the neighborhood — the office at 1110 West Peachtree Street NW, Suite 940 puts fellowship-trained hip and knee replacement care within walking distance of Midtown's office towers and residences.",
      "Dr. Vojdani offers evaluation of hip and knee arthritis, non-surgical care, and the full range of replacement options: minimally invasive anterior hip replacement, quadriceps-sparing total knee replacement, partial knee replacement, robotic-assisted techniques, and revision surgery for previously replaced joints.",
    ],
    localNote:
      "Midtown professionals often ask about time away from work: desk-based employees frequently return to work within two to three weeks of hip or knee replacement, and same-day outpatient surgery lets appropriate candidates recover at home from day one.",
  },
  {
    slug: "sandy-springs",
    city: "Sandy Springs",
    metaDescription:
      "Hip and knee replacement in Sandy Springs, GA — Dr. Sam Vojdani sees patients on Hammond Drive, offering anterior hip replacement, robotic knee replacement, and same-day surgery.",
    nearestOffice: "sandy-springs",
    nearestOfficeLabel: "Sandy Springs office at 1150 Hammond Drive",
    driveNote:
      "The office at 1150 Hammond Drive, Suite 400 is just off GA-400 at Exit 5 and minutes from I-285, in the medical corridor near Northside Hospital and Pill Hill.",
    intro: [
      "Sandy Springs is home turf for Dr. Vojdani's practice — the Hammond Drive office sits in the heart of the city's medical district, minutes from Northside Hospital where he performs surgery. For Sandy Springs residents, consultation, imaging, surgery, and follow-up all happen close to home.",
      "As a fellowship-trained adult reconstruction specialist, Dr. Vojdani provides anterior approach hip replacement, quadriceps-sparing and robotic-assisted knee replacement, partial knee replacement, outpatient same-day joint replacement, and complex revision surgery.",
    ],
    localNote:
      "Proximity matters most after surgery: early post-operative visits are frequent, and Sandy Springs patients appreciate that both their surgeon's office and Northside Hospital Atlanta are a short, familiar drive away.",
  },
  {
    slug: "dunwoody",
    city: "Dunwoody",
    metaDescription:
      "Hip and knee replacement for Dunwoody, GA residents — Dr. Sam Vojdani's Sandy Springs office is minutes away, offering anterior hip and robotic knee replacement.",
    nearestOffice: "sandy-springs",
    nearestOfficeLabel: "Sandy Springs office (about 10 minutes via I-285 or Mount Vernon)",
    driveNote:
      "From Dunwoody, the Sandy Springs office on Hammond Drive is roughly 10 minutes — take I-285 West to GA-400 North Exit 5, or surface streets via Mount Vernon Highway and Perimeter Center.",
    intro: [
      "Dunwoody residents dealing with hip or knee arthritis can see a fellowship-trained joint replacement specialist without crossing the metro: Dr. Vojdani's Sandy Springs office sits just across GA-400 from Perimeter Center, about ten minutes from most Dunwoody neighborhoods.",
      "Dr. Vojdani specializes in minimally invasive anterior hip replacement, quadriceps-sparing knee replacement, robotic and computer-assisted techniques, partial knee replacement, and outpatient joint replacement, along with revision surgery for joints replaced elsewhere that have become painful.",
    ],
    localNote:
      "Many Dunwoody patients are candidates for same-day outpatient joint replacement — surgery in the morning, recovery at home by evening — with early follow-up visits at the nearby Sandy Springs office rather than a trek across Atlanta.",
  },
  {
    slug: "alpharetta",
    city: "Alpharetta",
    metaDescription:
      "Hip and knee replacement for Alpharetta, GA residents — Dr. Sam Vojdani offers anterior hip replacement and robotic knee replacement, a straight drive down GA-400.",
    nearestOffice: "sandy-springs",
    nearestOfficeLabel: "Sandy Springs office (a straight shot down GA-400)",
    driveNote:
      "From Alpharetta, the Sandy Springs office is a direct drive south on GA-400 to Exit 5 (Sandy Springs), typically 20–25 minutes outside rush hour.",
    intro: [
      "Alpharetta and North Fulton residents have convenient access to Dr. Vojdani's practice via GA-400 — consultations at the Sandy Springs office and surgery at Total Joint Surgery Center – Atlanta, Northside Hospital Atlanta, or Meridian Mark Ambulatory Surgery Center, all clustered along the same corridor at the bottom of the highway.",
      "Dr. Vojdani provides the full spectrum of hip and knee replacement care: minimally invasive anterior hip replacement, quadriceps-sparing and robotic-assisted total knee replacement, partial knee replacement for single-compartment arthritis, outpatient same-day programs, and complex revision reconstruction.",
    ],
    localNote:
      "For active Alpharetta patients — golfers, tennis players, Big Creek Greenway walkers — the goal of surgery is getting you back to those activities. Same-day outpatient replacement at a dedicated surgery center is a popular option: surgery in the morning, home in Alpharetta by evening.",
  },
  {
    slug: "roswell",
    city: "Roswell",
    metaDescription:
      "Hip and knee replacement for Roswell, GA residents — Dr. Sam Vojdani offers anterior hip replacement and robotic knee replacement with convenient north-metro surgical locations.",
    nearestOffice: "sandy-springs",
    nearestOfficeLabel: "Sandy Springs office (south on GA-400 or Roswell Road)",
    driveNote:
      "From Roswell, reach the Sandy Springs office via GA-400 South to Exit 5 or straight down Roswell Road — usually 15–20 minutes.",
    intro: [
      "Roswell residents weighing hip or knee replacement can consult with Dr. Vojdani in nearby Sandy Springs, with surgery at Total Joint Surgery Center – Atlanta, Northside Hospital Atlanta, or Meridian Mark Ambulatory Surgery Center — all an easy drive down GA-400 from Roswell.",
      "An Atlanta native and Columbia-fellowship-trained specialist, Dr. Vojdani focuses exclusively on hip and knee replacement: anterior approach hips, quadriceps-sparing and robotic knees, partial knee replacement, outpatient same-day surgery, and revision of painful existing replacements.",
    ],
    localNote:
      "Roswell's trail-and-river lifestyle is exactly what joint replacement should restore — walking the Chattahoochee boardwalks, Vickery Creek trails, and neighborhood greenways without planning around pain.",
  },
  {
    slug: "johns-creek",
    city: "Johns Creek",
    metaDescription:
      "Hip and knee replacement for Johns Creek, GA residents — Dr. Sam Vojdani offers anterior hip replacement, robotic knee replacement, and same-day joint replacement nearby.",
    nearestOffice: "sandy-springs",
    nearestOfficeLabel: "Sandy Springs office (via GA-141 or GA-400)",
    driveNote:
      "From Johns Creek, the Sandy Springs office is about 25 minutes — take GA-141 (Peachtree Parkway) south to Peachtree Industrial and I-285, or Old Alabama to GA-400 South, exiting at Hammond Drive.",
    intro: [
      "Johns Creek residents considering hip or knee replacement can consult with Dr. Vojdani at the Sandy Springs office, with surgery at Total Joint Surgery Center – Atlanta, Northside Hospital Atlanta, or Meridian Mark Ambulatory Surgery Center — all in the familiar Pill Hill medical corridor.",
      "Dr. Vojdani's practice is dedicated to hip and knee replacement — minimally invasive anterior hips, quadriceps-sparing and robotic-assisted knees, partial knee replacement, outpatient same-day pathways, and complex revision surgery — all supported by multi-modal pain protocols designed for rapid, comfortable recovery.",
    ],
    localNote:
      "Many Johns Creek patients qualify for same-day outpatient joint replacement — surgery in the morning at a dedicated surgery center and home in Johns Creek by evening, with recovery close to family from day one.",
  },
  {
    slug: "marietta-east-cobb",
    city: "Marietta & East Cobb",
    metaDescription:
      "Hip and knee replacement for Marietta and East Cobb residents — Dr. Sam Vojdani's Sandy Springs office is just across I-285, offering anterior hip and robotic knee replacement.",
    nearestOffice: "sandy-springs",
    nearestOfficeLabel: "Sandy Springs office (across the river via I-285 or Johnson Ferry)",
    driveNote:
      "From East Cobb, the Sandy Springs office is a straightforward drive across the Chattahoochee — Johnson Ferry Road to Riverside/Hammond, or I-285 East to GA-400 Exit 5 — typically 15–25 minutes.",
    intro: [
      "For Marietta and East Cobb residents, crossing the river to Sandy Springs puts a fellowship-trained hip and knee replacement specialist within an easy drive — often quicker than reaching many in-county options through Cobb traffic.",
      "Dr. Vojdani focuses his entire practice on hip and knee replacement: anterior approach hip replacement that spares muscle, quadriceps-sparing and robotic-assisted knee replacement personalized to your anatomy, partial knee replacement, same-day outpatient surgery, and revision reconstruction for painful existing implants.",
    ],
    localNote:
      "East Cobb patients frequently combine consultation with imaging in a single Sandy Springs visit, and many qualify for outpatient surgery — home the same day, with follow-ups just across Johnson Ferry rather than deep inside the Perimeter.",
  },
  {
    slug: "brookhaven",
    city: "Brookhaven",
    metaDescription:
      "Hip and knee replacement for Brookhaven, GA residents — Dr. Sam Vojdani sees patients in nearby Midtown and Sandy Springs, offering anterior hip and robotic knee replacement.",
    nearestOffice: "sandy-springs",
    nearestOfficeLabel: "Both offices are close — Sandy Springs via I-285/GA-400, Midtown via Peachtree",
    driveNote:
      "Brookhaven sits almost exactly between the two offices: Sandy Springs is about 15 minutes north via Ashford Dunwoody or GA-400, and Midtown about 15 minutes south via Peachtree Road.",
    intro: [
      "Brookhaven residents can choose whichever of Dr. Vojdani's offices fits their routine — the Sandy Springs office near Perimeter or the Midtown office on West Peachtree — both an easy drive from Brookhaven's neighborhoods.",
      "The practice is exclusively dedicated to hip and knee replacement: minimally invasive anterior hip replacement, quadriceps-sparing total knee replacement, robotic and computer-assisted techniques, partial knee replacement, outpatient same-day joint replacement, and revision surgery.",
    ],
    localNote:
      "With Northside Hospital Atlanta a short drive up GA-400, Brookhaven patients keep the whole arc of care — consultation, surgery, and follow-up — within a familiar corner of the metro.",
  },
  {
    slug: "smyrna-vinings",
    city: "Smyrna & Vinings",
    metaDescription:
      "Hip and knee replacement for Smyrna and Vinings residents — Dr. Sam Vojdani sees patients in Midtown Atlanta and Sandy Springs, offering anterior hip and robotic knee replacement.",
    nearestOffice: "midtown-atlanta",
    nearestOfficeLabel: "Midtown office via I-75, or Sandy Springs via I-285",
    driveNote:
      "From Smyrna/Vinings, the Midtown office is about 15–20 minutes down I-75 to the 10th/14th Street exits; the Sandy Springs office is a similar drive around I-285 East to GA-400.",
    intro: [
      "Smyrna and Vinings residents have two convenient paths to fellowship-trained joint replacement care: down I-75 to Dr. Vojdani's Midtown office, or around the Perimeter to Sandy Springs — whichever suits your side of town and schedule.",
      "Dr. Vojdani's practice covers the full range of hip and knee replacement: muscle-sparing anterior hip replacement, quadriceps-sparing and robotic-assisted knee replacement, partial knee replacement for isolated arthritis, same-day outpatient surgery for qualified candidates, and complex revision surgery.",
    ],
    localNote:
      "Patients from the Silver Comet Trail communities often ask when they can get back on the trail — for most hip and knee replacement patients, walking mileage rebuilds within weeks and cycling typically returns in the two-to-three-month window with surgeon clearance.",
  },
];

serviceAreas.push(
  {
    slug: "peachtree-corners",
    city: "Peachtree Corners",
    metaDescription:
      "Hip and knee replacement for Peachtree Corners, GA — Dr. Sam Vojdani, a Peachtree Corners native, offers anterior hip and robotic knee replacement nearby.",
    nearestOffice: "sandy-springs",
    nearestOfficeLabel: "Sandy Springs office (via GA-141 or I-285)",
    driveNote:
      "From Peachtree Corners, the Sandy Springs office on Hammond Drive is about 20 minutes — take Peachtree Industrial toward I-285 West, or GA-141 to Peachtree Dunwoody, exiting at Hammond Drive.",
    intro: [
      "Peachtree Corners holds a special place in this practice: Dr. Vojdani was born and raised here before his path led through Georgia Tech, the Medical College of Georgia, and fellowship training at Columbia University. Today he cares for hip and knee patients from his hometown at the nearby Sandy Springs office.",
      "The practice covers the full range of hip and knee replacement — minimally invasive anterior hip replacement, quadriceps-sparing and robotic-assisted knee replacement, partial knee replacement, same-day outpatient surgery, and complex revision reconstruction.",
    ],
    localNote:
      "For Peachtree Corners patients, consultations, surgery, and follow-ups all stay within a familiar 20-minute radius — with surgery performed at Total Joint Surgery Center – Atlanta, Northside Hospital Atlanta, or Meridian Mark Ambulatory Surgery Center.",
  },
  {
    slug: "duluth",
    city: "Duluth",
    metaDescription:
      "Hip and knee replacement for Duluth, GA residents — Dr. Sam Vojdani, a Duluth High School graduate, offers anterior hip and robotic knee replacement.",
    nearestOffice: "sandy-springs",
    nearestOfficeLabel: "Sandy Springs office (via Peachtree Industrial or I-85/I-285)",
    driveNote:
      "From Duluth, reach the Sandy Springs office in roughly 25–30 minutes via Peachtree Industrial Boulevard toward I-285 West, or I-85 South to I-285 West, exiting at GA-400 North / Hammond Drive.",
    intro: [
      "Duluth is where Dr. Vojdani graduated high school before earning top honors at Georgia Tech and the Medical College of Georgia — and Duluth-area patients still make up a meaningful part of his hip and knee replacement practice today.",
      "Care spans the full spectrum: evaluation and non-surgical arthritis management, minimally invasive anterior hip replacement, quadriceps-sparing and robotic-assisted knee replacement, partial knee replacement, outpatient same-day surgery, and revision of painful existing replacements.",
    ],
    localNote:
      "Many Duluth patients qualify for same-day outpatient joint replacement — surgery in the morning, recovery at home in Gwinnett by evening, with follow-up visits an easy drive around the Perimeter.",
  },
  {
    slug: "norcross",
    city: "Norcross",
    metaDescription:
      "Hip and knee replacement for Norcross, GA residents — Dr. Sam Vojdani offers anterior hip replacement and robotic knee replacement minutes away in Sandy Springs.",
    nearestOffice: "sandy-springs",
    nearestOfficeLabel: "Sandy Springs office (about 20 minutes via I-285)",
    driveNote:
      "From Norcross, the Sandy Springs office is a straightforward 20-minute drive: I-285 West to GA-400 North, Exit 5 at Hammond Drive — or surface streets via Peachtree Industrial and Windsor Parkway.",
    intro: [
      "Norcross residents dealing with hip or knee arthritis can reach fellowship-trained joint replacement care in about twenty minutes — without fighting downtown traffic. Dr. Vojdani sees patients at the Sandy Springs office just off GA-400.",
      "His practice is dedicated exclusively to hip and knee replacement: anterior approach hips that spare muscle, quadriceps-sparing and robotic-assisted knees, partial knee replacement, same-day outpatient programs, and complex revision surgery.",
    ],
    localNote:
      "Gwinnett patients often pair a Sandy Springs consultation with imaging the same day, and surgery is performed at Total Joint Surgery Center – Atlanta, Northside Hospital Atlanta, or Meridian Mark Ambulatory Surgery Center — all clustered near GA-400.",
  },
  {
    slug: "suwanee",
    city: "Suwanee",
    metaDescription:
      "Hip and knee replacement for Suwanee, GA residents — Dr. Sam Vojdani offers anterior hip replacement, robotic knee replacement, and same-day joint replacement.",
    nearestOffice: "sandy-springs",
    nearestOfficeLabel: "Sandy Springs office (via I-85 or Peachtree Industrial)",
    driveNote:
      "From Suwanee, plan on 30–35 minutes to the Sandy Springs office: I-85 South to I-285 West to GA-400 North Exit 5, or Peachtree Industrial Boulevard south through Berkeley Lake and Dunwoody.",
    intro: [
      "Suwanee's active, family-centered community is exactly who joint replacement is meant to serve — parents and grandparents who want to keep up with greenway walks, swim meets, and travel without planning around hip or knee pain.",
      "Dr. Vojdani provides the full range of care: honest evaluation (including when surgery is not yet warranted), minimally invasive anterior hip replacement, quadriceps-sparing and robotic-assisted knee replacement, partial knee replacement, outpatient same-day surgery, and revision reconstruction.",
    ],
    localNote:
      "Suwanee patients frequently choose the same-day outpatient pathway — surgery at a dedicated surgery center in the morning and home to Gwinnett by evening, with the Suwanee Creek Greenway waiting when walking mileage rebuilds.",
  },
  {
    slug: "lawrenceville",
    city: "Lawrenceville",
    metaDescription:
      "Hip and knee replacement for Lawrenceville, GA residents — Dr. Sam Vojdani offers anterior hip replacement and robotic knee replacement in metro Atlanta.",
    nearestOffice: "sandy-springs",
    nearestOfficeLabel: "Sandy Springs office (via GA-316 and I-85)",
    driveNote:
      "From Lawrenceville, the Sandy Springs office is about 35 minutes: GA-316 West to I-85 South, then I-285 West to GA-400 North, exiting at Hammond Drive.",
    intro: [
      "Lawrenceville and central Gwinnett residents weighing hip or knee replacement can consult with Dr. Vojdani — a fellowship-trained adult reconstruction specialist whose practice is devoted entirely to hip and knee replacement.",
      "Options span non-surgical arthritis care, minimally invasive anterior hip replacement, quadriceps-sparing and robotic-assisted total knee replacement, partial knee replacement for single-compartment arthritis, same-day outpatient surgery, and complex revision of painful existing implants.",
    ],
    localNote:
      "For Lawrenceville patients, the trip down GA-316 is usually worth making once for the consultation and once for surgery — much of the follow-up rhythm (therapy exercises, progress tracking) happens close to home, with office visits scheduled at sensible intervals.",
  },
  {
    slug: "cumming",
    city: "Cumming & Forsyth County",
    metaDescription:
      "Hip and knee replacement for Cumming and Forsyth County, GA — Dr. Sam Vojdani offers anterior hip replacement and robotic knee replacement down GA-400.",
    nearestOffice: "sandy-springs",
    nearestOfficeLabel: "Sandy Springs office (straight down GA-400)",
    driveNote:
      "From Cumming, the Sandy Springs office is a direct 30-minute run down GA-400 South to Exit 5 (Sandy Springs), with the office just off Hammond Drive.",
    intro: [
      "Forsyth County is one of Georgia's fastest-growing communities, and its active residents put real demands on their hips and knees. Dr. Vojdani offers Cumming-area patients fellowship-trained joint replacement care one straight highway run away.",
      "The practice covers minimally invasive anterior hip replacement, quadriceps-sparing and robotic-assisted knee replacement, partial knee replacement, outpatient same-day joint replacement, and complex revision reconstruction — plus honest guidance when surgery isn't yet the right step.",
    ],
    localNote:
      "GA-400 makes the logistics simple for Forsyth patients: consultation and follow-ups at Sandy Springs, surgery at Total Joint Surgery Center – Atlanta, Northside Hospital Atlanta, or Meridian Mark Ambulatory Surgery Center — no downtown driving at any step.",
  },
  {
    slug: "decatur",
    city: "Decatur",
    metaDescription:
      "Hip and knee replacement for Decatur, GA residents — Dr. Sam Vojdani offers anterior hip replacement and robotic knee replacement in nearby Midtown Atlanta.",
    nearestOffice: "midtown-atlanta",
    nearestOfficeLabel: "Midtown Atlanta office (about 15–20 minutes west)",
    driveNote:
      "From Decatur, the Midtown office at 1110 West Peachtree Street is roughly 15–20 minutes via Ponce de Leon Avenue or North Avenue, with MARTA an easy alternative — the office is steps from the Arts Center station.",
    intro: [
      "Decatur residents have convenient in-town access to fellowship-trained hip and knee replacement care: Dr. Vojdani's Midtown office is a short drive — or a simple MARTA ride — from the square.",
      "His practice is dedicated exclusively to hip and knee replacement: minimally invasive anterior hip replacement, quadriceps-sparing and robotic-assisted knee replacement, partial knee replacement, same-day outpatient surgery, and revision surgery for previously replaced joints.",
    ],
    localNote:
      "Decatur's walkable lifestyle is worth protecting — restaurants on the square, the PATH trails, festivals on the lawn. Restoring comfortable walking is precisely what a well-done hip or knee replacement delivers.",
  },
  {
    slug: "woodstock",
    city: "Woodstock",
    metaDescription:
      "Hip and knee replacement for Woodstock, GA residents — Dr. Sam Vojdani offers anterior hip replacement and robotic knee replacement in metro Atlanta.",
    nearestOffice: "sandy-springs",
    nearestOfficeLabel: "Sandy Springs office (via I-575 and I-285)",
    driveNote:
      "From Woodstock, plan on about 35 minutes: I-575 South to I-75 South, then I-285 East to Roswell Road or GA-400, exiting near Hammond Drive.",
    intro: [
      "Woodstock and south Cherokee residents can bring their hip and knee arthritis questions to a surgeon whose entire practice is joint replacement — with the drive to Sandy Springs often shorter than crossing metro traffic to other specialty centers.",
      "Dr. Vojdani offers minimally invasive anterior hip replacement, quadriceps-sparing and robotic-assisted knee replacement, partial knee replacement, outpatient same-day surgery, and complex revision reconstruction, alongside non-surgical arthritis care.",
    ],
    localNote:
      "Woodstock's trail network — Noonday Creek, Olde Rope Mill — is a favorite goal for recovering patients. Most walk unassisted within weeks of surgery and return to trail mileage over the following months.",
  },
  {
    slug: "kennesaw",
    city: "Kennesaw & Acworth",
    metaDescription:
      "Hip and knee replacement for Kennesaw and Acworth, GA — Dr. Sam Vojdani offers anterior hip replacement and robotic knee replacement in metro Atlanta.",
    nearestOffice: "sandy-springs",
    nearestOfficeLabel: "Sandy Springs office (via I-75 and I-285)",
    driveNote:
      "From Kennesaw or Acworth, the Sandy Springs office is roughly 35 minutes: I-75 South to I-285 East, exiting at Riverside Drive or GA-400 toward Hammond Drive.",
    intro: [
      "Kennesaw and Acworth residents considering hip or knee replacement can consult with Dr. Vojdani — board-certified, Columbia fellowship-trained, and focused exclusively on hip and knee reconstruction.",
      "The practice offers minimally invasive anterior hip replacement, quadriceps-sparing and robotic-assisted knee replacement, partial knee replacement for isolated arthritis, same-day outpatient surgery for qualified candidates, and revision surgery for implants placed elsewhere.",
    ],
    localNote:
      "From Kennesaw Mountain hikes to Lake Allatoona weekends, northwest-metro life rewards healthy joints. Patients who come to surgery active and prepared tend to reclaim those activities fastest — and same-day outpatient pathways keep recovery at home.",
  },
  {
    slug: "milton",
    city: "Milton",
    metaDescription:
      "Hip and knee replacement for Milton, GA residents — Dr. Sam Vojdani offers anterior hip replacement and robotic knee replacement down GA-400.",
    nearestOffice: "sandy-springs",
    nearestOfficeLabel: "Sandy Springs office (down GA-400)",
    driveNote:
      "From Milton, take GA-400 South from Windward Parkway or McFarland Road to Exit 5 (Sandy Springs) — about 25–30 minutes to the Hammond Drive office.",
    intro: [
      "Milton's equestrian farms, golf communities, and trail systems make it one of the metro's most active places to live — and joint pain shouldn't be what slows that down. Dr. Vojdani cares for Milton patients at the Sandy Springs office, a straight run down GA-400.",
      "His practice covers the full range of hip and knee replacement: minimally invasive anterior hips, quadriceps-sparing and robotic-assisted knees, partial knee replacement, outpatient same-day surgery, and complex revision reconstruction.",
    ],
    localNote:
      "Riders and golfers ask the same question: when can I get back to it? Most patients return to low-impact recreation in the two-to-three-month window with surgeon clearance — and the consultation is where that timeline gets personalized.",
  }
);

export function getArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
