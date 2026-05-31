import type { Article } from '../types';

export const articles: Article[] = [
  {
    id: '1a2b3c4d-0001-0000-0000-000000000001',
    emoji: '🎓',
    title: 'The GI Bill Hybrid Student Strategy',
    subtitle: 'How choosing the right school zip code could be worth $140,000 more in housing allowance.',
    category: 'Financial',
    proRequired: true,
    proStepCount: 4,
    sections: [
      {
        heading: 'The Housing Allowance Secret',
        content: 'The Post-9/11 GI Bill pays your housing allowance based on the zip code of the school — not where you live. This single fact can be worth tens of thousands of dollars over a degree.',
        highlightedAmounts: ['$140,000'],
      },
      {
        heading: 'How to Exploit It Legally',
        content: 'If you enroll at a school in a high cost-of-living city (NYC, San Francisco, DC) you get their BAH rate — even if you take classes online from another state. The key: enroll in at least one in-person credit.',
        highlightedAmounts: ['$4,200/month'],
      },
      {
        heading: 'The Numbers',
        content: 'NYC-based school BAH rate for E-5 with dependents: ~$4,200/month. Rural school rate: ~$1,100/month. Over 36 months that gap is $111,600. Add the difference over a full degree and you exceed $140,000.',
        highlightedAmounts: ['$4,200/month', '$1,100/month', '$111,600'],
      },
      {
        heading: 'Which Schools Qualify',
        content: 'Look for accredited universities in high-BAH zip codes that offer hybrid programs. Columbia, NYU, American University, George Washington, and USC all qualify. Confirm they accept GI Bill before enrolling.',
      },
    ],
  },
  {
    id: '1a2b3c4d-0002-0000-0000-000000000002',
    emoji: '💸',
    title: 'How To Stop Paying State Income Tax On Active Duty',
    subtitle: 'Change your state residency and keep thousands more every year.',
    category: 'Financial',
    proRequired: false,
    sections: [
      {
        heading: 'The Legal Domicile Loophole',
        content: 'Active duty military members can maintain their legal domicile (home of record) in a state they no longer live in. If you originally joined from Texas, Florida, or another no-income-tax state, you may still owe zero state income tax.',
        highlightedAmounts: ['$0 state tax'],
      },
      {
        heading: 'The 9 No-Tax States',
        content: 'Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, Wyoming — all have no state income tax. If you can establish domicile in any of these before or during service, you pay nothing.',
      },
      {
        heading: 'How to Establish Domicile',
        content: 'Get a driver\'s license, register a vehicle, open a bank account, and file a DD Form 2058 (State of Legal Residence) declaring your chosen state. Do this once and it holds for your career.',
      },
      {
        heading: 'How Much You Save',
        content: 'An E-6 earning $55,000/yr in a state with 5% income tax saves $2,750/year. Over a 20-year career that\'s $55,000+ in kept income — not counting pay raises.',
        highlightedAmounts: ['$2,750/year', '$55,000+'],
      },
    ],
  },
  {
    id: '1a2b3c4d-0003-0000-0000-000000000003',
    emoji: '👕',
    title: 'The VA Clothing Allowance Nobody Knows About',
    subtitle: 'How to get paid almost $1,000 a year just for replacing your clothes.',
    category: 'Financial',
    proRequired: false,
    sections: [
      {
        heading: 'What Is It',
        content: 'The VA Clothing Allowance pays veterans an annual stipend if their service-connected disability (or medication for it) damages or wears out their clothing faster than normal.',
        highlightedAmounts: ['$972/year'],
      },
      {
        heading: 'Who Qualifies',
        content: 'You qualify if your prosthetic/orthopedic device (brace, prosthetic limb, wheelchair) damages your clothing, OR if your medication (like a skin cream for eczema or psoriasis) stains or wears out fabric.',
      },
      {
        heading: 'How to Apply',
        content: 'Submit VA Form 10-8678 to your nearest VA medical center by August 1 each year. It\'s a one-page form. If approved, payment comes as a lump sum once a year.',
      },
      {
        heading: 'The Math',
        content: 'Current rate: $972.37 annually (2026 rate). If you have multiple qualifying conditions, you may receive multiple allowances — up to $1,944.74/year.',
        highlightedAmounts: ['$972.37', '$1,944.74/year'],
      },
    ],
  },
  {
    id: '1a2b3c4d-0004-0000-0000-000000000004',
    emoji: '🏨',
    title: '3 Nicest Hotels Owned By The Military',
    subtitle: 'How your military ID unlocks luxury hotels in Germany, Tokyo, and Disney for cheap.',
    category: 'Travel',
    proRequired: false,
    sections: [
      {
        heading: 'Edelweiss Lodge — Garmisch, Germany',
        content: 'Nestled at the base of the Alps. Rooms that go for $600+/night commercially are $89–$140/night for active duty. Ski-in/ski-out access to Zugspitze (Germany\'s highest peak). Open to all active duty, retirees, and their families.',
        highlightedAmounts: ['$89–$140/night'],
      },
      {
        heading: 'New Sanno Hotel — Tokyo, Japan',
        content: 'The only foreign-owned hotel in central Tokyo. Located in Minami-Azabu, a 5-star neighborhood. Rooms: $80–$120/night vs. $400+ commercially. An off-the-radar gem for PACAF families.',
        highlightedAmounts: ['$80–$120/night'],
      },
      {
        heading: 'Shades of Green — Walt Disney World, FL',
        content: 'On Disney property. Literally inside the resort. Military rates: $109–$155/night. Standard Disney hotel guests pay $400–$700. Includes free Disney transportation and the same amenities.',
        highlightedAmounts: ['$109–$155/night'],
      },
    ],
  },
  {
    id: '1a2b3c4d-0005-0000-0000-000000000005',
    emoji: '⚡',
    title: 'The VR&E Fast Track Loophole',
    subtitle: 'How the VA is planning to completely destroy the biggest delay in your rehab plan.',
    category: 'Career',
    proRequired: true,
    proStepCount: 3,
    sections: [
      {
        heading: 'What Is VR&E',
        content: 'Vocational Rehabilitation & Employment (Chapter 31) pays for your education AND living expenses — and unlike GI Bill, there\'s no time limit. You can use it after GI Bill or instead of it.',
      },
      {
        heading: 'The Current Bottleneck',
        content: 'The #1 complaint: waiting 3–6 months just for an initial appointment with a VA counselor. During that time, you get nothing. The VA has been piloting an automated intake system to cut this to under 2 weeks.',
      },
      {
        heading: 'The Subsistence Allowance',
        content: 'While in VR&E, you receive a monthly subsistence allowance ON TOP of your disability pay. For full-time training: $793–$1,516/month depending on dependents. This stacks with other income.',
        highlightedAmounts: ['$793–$1,516/month'],
      },
    ],
  },
  {
    id: '1a2b3c4d-0006-0000-0000-000000000006',
    emoji: '🎓',
    title: 'The $20,000 School Loophole',
    subtitle: 'How a 10% disability rating unlocks $5,000 a year for your kid\'s education.',
    category: 'Financial',
    proRequired: true,
    proStepCount: 3,
    sections: [
      {
        heading: 'Chapter 35 — Dependents Educational Assistance',
        content: 'If you have a 10% or higher VA disability rating, your spouse and kids may qualify for DEA (Chapter 35), which pays up to $1,341/month for up to 45 months of full-time education.',
        highlightedAmounts: ['$1,341/month'],
      },
      {
        heading: 'Who Qualifies',
        content: 'Spouses of veterans with a permanent and total (P&T) rating. Children ages 18–26. Surviving dependents of veterans who died from service-connected causes.',
      },
      {
        heading: 'The Math',
        content: '$1,341/month × 12 months = $16,092/year per dependent. Over a 4-year degree: $60,000+ per child. This is separate from any state-level tuition waiver they may also qualify for.',
        highlightedAmounts: ['$16,092/year', '$60,000+'],
      },
    ],
  },
  {
    id: '1a2b3c4d-0007-0000-0000-000000000007',
    emoji: '💰',
    title: 'The $200,000 Family Payday',
    subtitle: 'How dependents of 100% P&T veterans can get paid $1,574 a month for school.',
    category: 'Financial',
    proRequired: true,
    proStepCount: 5,
    sections: [
      {
        heading: 'The Hidden Dependency Stack',
        content: 'Veterans with a 100% P&T rating can stack DEA benefits, state tuition waivers, and Fry Scholarship for surviving spouses. When stacked properly the total per dependent can exceed $200,000 over a degree.',
        highlightedAmounts: ['$200,000'],
      },
      {
        heading: 'Fry Scholarship',
        content: 'Children and spouses of service members who died in the line of duty get the full Post-9/11 GI Bill, including tuition, housing, and books. Housing allowance alone: up to $4,200/month.',
        highlightedAmounts: ['$4,200/month'],
      },
      {
        heading: 'State-Level Waivers',
        content: '35+ states offer free in-state tuition to dependents of 100% P&T veterans. Combine that with federal benefits and many families pay nothing out of pocket.',
      },
    ],
  },
  {
    id: '1a2b3c4d-0008-0000-0000-000000000008',
    emoji: '📱',
    title: 'Half-Price Streaming?!',
    subtitle: 'Netflix who? Save 50% on these apps forever.',
    category: 'Entertainment',
    proRequired: false,
    sections: [
      {
        heading: 'Hulu — 25% Off',
        content: 'Active duty military and their families get Hulu (With Ads) for $1.99/month vs. the standard $7.99. Verify through ID.me.',
        highlightedAmounts: ['$1.99/month'],
      },
      {
        heading: 'YouTube Premium — Up to 50% Off',
        content: 'Military members can get YouTube Premium through Google\'s military discount program for ~$6.99/month vs. $13.99.',
        highlightedAmounts: ['$6.99/month'],
      },
      {
        heading: 'Spotify — Military Discount',
        content: 'Spotify offers a 50% discount for active duty members through the SheerID verification system. Spotify Premium drops to $4.99/month.',
        highlightedAmounts: ['$4.99/month'],
      },
      {
        heading: 'How to Claim',
        content: 'Most discounts verify through ID.me, SheerID, or GovX ID. Have your CAC or military orders ready. Discounts typically re-verify annually.',
      },
    ],
  },
  {
    id: '1a2b3c4d-0009-0000-0000-000000000009',
    emoji: '🏰',
    title: 'Disney\'s Secret Military Hotel',
    subtitle: 'On Disney property. Military prices. Yes, really.',
    category: 'Travel',
    proRequired: false,
    sections: [
      {
        heading: 'Shades of Green — The Full Story',
        content: 'Shades of Green is an Armed Forces Recreation Center located inside Walt Disney World Resort in Orlando. It\'s literally on the monorail loop. Civilian guests cannot book here.',
      },
      {
        heading: 'Rates By Pay Grade',
        content: 'E1–E5: $109/night. E6–E9/WO1–WO3: $130/night. WO4–CW5/O1–O3: $145/night. O4–O10: $155/night. Retirees also eligible. Compare to nearby Disney hotels at $350–$700+.',
        highlightedAmounts: ['$109/night', '$130/night', '$145/night', '$155/night'],
      },
      {
        heading: 'What\'s Included',
        content: 'Free Disney transportation (buses, monorail, boats). Free resort parking. Pools, restaurants, fitness center. Disney park tickets often discounted through the resort as well.',
      },
    ],
  },
  {
    id: '1a2b3c4d-0010-0000-0000-000000000010',
    emoji: '⛷️',
    title: '$109 for a $2,000/Night Ski Resort',
    subtitle: 'America\'s #1 ski resort. 95% off for military.',
    category: 'Travel',
    proRequired: true,
    proStepCount: 2,
    sections: [
      {
        heading: 'The Resort',
        content: 'Vail Mountain Resort area, Colorado — consistently rated #1 in North America. Peak season condos run $2,000+/night. AFRC Vail offers units from $109/night for active duty, retirees, and DoD civilians.',
        highlightedAmounts: ['$109/night'],
      },
      {
        heading: 'How to Book',
        content: 'Book through the Armed Forces Recreation Center (AFRC) system at shadesofgreen.org or the respective AFRC property. Openings fill up months in advance — book 6–9 months early for peak ski season.',
      },
      {
        heading: 'Other AFRC Properties',
        content: 'The AFRC network includes Edelweiss (Germany), Cape Henry Inn (Virginia Beach), Hale Koa Hotel (Waikiki, Hawaii), and Shades of Green (Disney World). All at 70–95% off civilian rates.',
        highlightedAmounts: ['70–95% off'],
      },
    ],
  },
  {
    id: '1a2b3c4d-0011-0000-0000-000000000011',
    emoji: '🚢',
    title: 'Military Cruise Discounts You\'re Ignoring',
    subtitle: 'How to get a 7-night cruise for under $500 per person.',
    category: 'Travel',
    proRequired: false,
    sections: [
      {
        heading: 'The Discounts',
        content: 'Royal Caribbean, Carnival, Norwegian, and Celebrity Cruises all offer 10–30% military discounts verified through ID.me or GovX. On a $1,400 cruise, that\'s up to $420 back.',
        highlightedAmounts: ['$420 back'],
      },
      {
        heading: 'The NMFA Cruise Deals',
        content: 'The National Military Family Association negotiates additional cruise discounts not available to the public. Rates can go as low as $399 per person for 7-night Caribbean cruises.',
        highlightedAmounts: ['$399 per person'],
      },
    ],
  },
  {
    id: '1a2b3c4d-0012-0000-0000-000000000012',
    emoji: '🎰',
    title: 'The Vegas Military Rate You\'re Missing',
    subtitle: 'How to stay on the Strip for under $50/night.',
    category: 'Travel',
    proRequired: false,
    sections: [
      {
        heading: 'Government Rate Hotels',
        content: 'Most major Las Vegas Strip hotels publish a government/military rate that\'s 40–60% below the lowest public rate. Show your CAC or military ID at check-in. No advance verification needed at most properties.',
        highlightedAmounts: ['40–60% below'],
      },
      {
        heading: 'The Best Deals',
        content: 'Wyndham Grand, Marriott, and Hilton properties on or near the Strip regularly offer government rates under $60/night, even on weekends. MGM Resorts has a dedicated military rate desk.',
        highlightedAmounts: ['$60/night'],
      },
    ],
  },
  {
    id: '1a2b3c4d-0013-0000-0000-000000000013',
    emoji: '🌴',
    title: 'Hale Koa Hotel: Waikiki for $90/Night',
    subtitle: 'Beachfront Waikiki for military. Civilians literally can\'t book here.',
    category: 'Travel',
    proRequired: false,
    sections: [
      {
        heading: 'The Property',
        content: 'Hale Koa is an Armed Forces Recreation Center hotel located on prime Waikiki beachfront. Beachfront rooms at nearby civilian hotels run $500–$900/night.',
      },
      {
        heading: 'Military Rates',
        content: 'Junior enlisted rates start at $88/night. Senior enlisted and officers pay $110–$185/night. All rooms have ocean or garden views. Includes pool, beach access, multiple restaurants.',
        highlightedAmounts: ['$88/night', '$110–$185/night'],
      },
    ],
  },
  {
    id: '1a2b3c4d-0014-0000-0000-000000000014',
    emoji: '🏦',
    title: 'The SCRA Interest Rate Cap',
    subtitle: 'How to legally cap ALL your pre-service debt at 6% interest.',
    category: 'Financial',
    proRequired: false,
    sections: [
      {
        heading: 'What Is SCRA',
        content: 'The Servicemembers Civil Relief Act (SCRA) caps interest rates on debts you had BEFORE entering active duty — credit cards, car loans, mortgages, student loans — at 6% APR.',
        highlightedAmounts: ['6% APR'],
      },
      {
        heading: 'How to Apply',
        content: 'Send a written request to each lender with a copy of your orders. The rate reduction is retroactive to the first day of active duty. Lenders must comply within 180 days of your request.',
      },
      {
        heading: 'How Much You Save',
        content: 'A $20,000 credit card balance at 24% APR becomes 6% — saving $3,600/year in interest. Do this for every pre-service debt.',
        highlightedAmounts: ['$3,600/year'],
      },
    ],
  },
  {
    id: '1a2b3c4d-0015-0000-0000-000000000015',
    emoji: '🏠',
    title: 'VA Loan: The Zero-Down Wealth Builder',
    subtitle: 'How to use your VA loan benefit to build a real estate portfolio.',
    category: 'Financial',
    proRequired: true,
    proStepCount: 6,
    sections: [
      {
        heading: 'The Basics',
        content: 'VA loans require zero down payment, no PMI, and competitive interest rates. On a $400,000 home, no down payment + no PMI saves you $80,000+ vs. a conventional loan.',
        highlightedAmounts: ['$80,000+'],
      },
      {
        heading: 'The House-Hacking Strategy',
        content: 'Buy a multi-unit property (duplex, triplex, or fourplex) with your VA loan. Live in one unit, rent out the others. Rental income often covers your entire mortgage payment.',
      },
      {
        heading: 'Restoring Entitlement',
        content: 'Once you sell or pay off a VA-financed property, your entitlement restores. You can use a VA loan multiple times throughout your career. With proper timing, you can build a 3–4 property portfolio over a 20-year career.',
      },
    ],
  },
  {
    id: '1a2b3c4d-0016-0000-0000-000000000016',
    emoji: '📊',
    title: 'TSP Millionaire Blueprint',
    subtitle: 'The exact allocation that turned 20 years of service into $1.2M.',
    category: 'Financial',
    proRequired: true,
    proStepCount: 4,
    sections: [
      {
        heading: 'The Power of the TSP Match',
        content: 'Under BRS, the government matches up to 5% of your base pay. That\'s free money — contribute at least 5% or you\'re leaving money on the table. An E-5 at 5% match gets ~$2,400/year free.',
        highlightedAmounts: ['$2,400/year free'],
      },
      {
        heading: 'The Aggressive Allocation',
        content: '80% C Fund (S&P 500 index) + 20% S Fund (small-cap index). This mirrors a total US market strategy. Historical 30-year average return: 10.3%/year.',
        highlightedAmounts: ['10.3%/year'],
      },
      {
        heading: 'The Math',
        content: 'Contributing $300/month starting at age 20, with 5% match, at 10% average return: at age 40 (20-year career) = $228,000. Leave it invested at retirement and at age 60 it grows to $1.2M without another contribution.',
        highlightedAmounts: ['$228,000', '$1.2M'],
      },
    ],
  },
  {
    id: '1a2b3c4d-0017-0000-0000-000000000017',
    emoji: '💳',
    title: 'The Amex Platinum Military Hack',
    subtitle: 'How to get a $695/year card completely free as military.',
    category: 'Financial',
    proRequired: false,
    sections: [
      {
        heading: 'SCRA & MLA on Amex',
        content: 'American Express waives the annual fee on ALL personal card products — including the $695 Platinum — for active duty service members under SCRA and MLA. Apply, get approved, then submit your military status.',
        highlightedAmounts: ['$695 waived'],
      },
      {
        heading: 'The Annual Perks',
        content: '$200 hotel credit + $240 digital entertainment credit + $200 airline fee credit + $155 Walmart+ credit + $100 Saks credit + lounge access (Centurion + Priority Pass + Delta SkyClubs) = $1,500+ annual value.',
        highlightedAmounts: ['$1,500+ annual value'],
      },
      {
        heading: 'How to Apply',
        content: 'Apply at americanexpress.com. After approval, call the number on the back or submit proof of service through the AmEx military benefits portal. Fee waiver typically posts within 1 billing cycle.',
      },
    ],
  },
  {
    id: '1a2b3c4d-0018-0000-0000-000000000018',
    emoji: '💳',
    title: 'Chase Sapphire Reserve — Free for Military',
    subtitle: 'The $550/year travel card with $300 travel credit, free for military.',
    category: 'Financial',
    proRequired: false,
    sections: [
      {
        heading: 'The Fee Waiver',
        content: 'Under SCRA/MLA, Chase waives the $550 annual fee on the Sapphire Reserve for active duty service members. Net value of benefits: ~$900+/year.',
        highlightedAmounts: ['$550 waived', '$900+/year'],
      },
      {
        heading: 'Key Benefits',
        content: '$300 annual travel credit (automatic) + Priority Pass Select lounge access + 3x points on travel and dining + DoorDash DashPass + Global Entry/TSA PreCheck credit ($100).',
        highlightedAmounts: ['$300 annual travel credit'],
      },
    ],
  },
  {
    id: '1a2b3c4d-0019-0000-0000-000000000019',
    emoji: '🦺',
    title: 'SGLI: Are You Over or Underinsured?',
    subtitle: 'The $400,000 life insurance most troops set and forget for 20 years.',
    category: 'Financial',
    proRequired: false,
    sections: [
      {
        heading: 'What Is SGLI',
        content: 'Servicemembers Group Life Insurance provides up to $500,000 of term life coverage for $30/month. This is one of the best rates available anywhere — $500K of coverage for under $1/day.',
        highlightedAmounts: ['$500,000', '$30/month'],
      },
      {
        heading: 'The Common Mistake',
        content: 'Most service members sign up at E-1 with $400,000 coverage and never update it after getting married, having kids, or buying a house. Upgrade to $500,000 as soon as you have dependents.',
        highlightedAmounts: ['$500,000'],
      },
      {
        heading: 'VGLI After Separation',
        content: 'Veterans Group Life Insurance allows you to convert SGLI without a medical exam within 1 year and 120 days of separation. Do this before any other coverage. Rates rise with age.',
      },
    ],
  },
  {
    id: '1a2b3c4d-0020-0000-0000-000000000020',
    emoji: '🏥',
    title: 'TRICARE: What You\'re Not Using',
    subtitle: 'Mental health, vision, dental, and prescriptions most troops ignore.',
    category: 'Health',
    proRequired: false,
    sections: [
      {
        heading: 'Mental Health Benefits',
        content: 'TRICARE covers individual and group therapy with zero copay for active duty. Spouses and dependents: $0–$25 per visit depending on your plan. No referral required for mental health services.',
        highlightedAmounts: ['$0 copay'],
      },
      {
        heading: 'TRICARE Pharmacy',
        content: 'Prescriptions filled at an MTF (Military Treatment Facility) are free. Mail-order prescriptions through TRICARE Pharmacy Home Delivery: $0 for generic, $14 for brand-name for 90-day supply.',
        highlightedAmounts: ['$0 for generic'],
      },
      {
        heading: 'Vision and Dental',
        content: 'Active duty gets free annual eye exams. Dental: enrolled members pay $0–$13 per cleaning. The Federal Dental and Vision Insurance Program (FEDVIP) offers low-cost supplemental plans for retirees and family members.',
      },
    ],
  },
  {
    id: '1a2b3c4d-0021-0000-0000-000000000021',
    emoji: '🎒',
    title: 'The GEAR Program: Free College Gear',
    subtitle: 'How to claim school supplies, backpacks, and laptops for free.',
    category: 'Shopping',
    proRequired: false,
    sections: [
      {
        heading: 'What Is GEAR',
        content: 'The GEAR (GI Bill Education Advancement Resources) program provides qualifying student veterans with school supplies and equipment at no cost through participating institutions and VSO partners.',
      },
      {
        heading: 'What You Can Get',
        content: 'Laptops, tablets, backpacks, calculators, textbooks, and school supplies. Value varies by school partnership. Some schools provide a one-time $500–$1,000 equipment stipend on top of GI Bill benefits.',
        highlightedAmounts: ['$500–$1,000'],
      },
    ],
  },
  {
    id: '1a2b3c4d-0022-0000-0000-000000000022',
    emoji: '🚗',
    title: 'Car Buying as Military: Never Pay MSRP',
    subtitle: 'How to get fleet pricing, SCRA protection, and dealer fee waivers.',
    category: 'Shopping',
    proRequired: false,
    sections: [
      {
        heading: 'Military Pricing Programs',
        content: 'Ford, GM, Chrysler, Toyota, and Honda all offer military-exclusive pricing below invoice through programs like Ford Military Appreciation, GM Military Discount, and FCA Military Affiliate Rewards.',
      },
      {
        heading: 'SCRA on Auto Loans',
        content: 'Pre-service auto loans cap at 6% APR under SCRA. Some manufacturers (Ford Motor Credit, GM Financial) also waive late fees and offer payment deferrals during deployment.',
        highlightedAmounts: ['6% APR cap'],
      },
      {
        heading: 'The Lemon Law Loophole',
        content: 'Active duty members who PCS and can\'t take their new car can rescind the contract under the Soldiers and Sailors Relief Act provisions in most state lemon laws. Check your state\'s specific protections.',
      },
    ],
  },
  {
    id: '1a2b3c4d-0023-0000-0000-000000000023',
    emoji: '📦',
    title: 'Amazon Prime: Free for a Year',
    subtitle: 'How to get 12 months of Prime free through military discount programs.',
    category: 'Shopping',
    proRequired: false,
    sections: [
      {
        heading: 'The Program',
        content: 'Amazon offers a 6-month free Prime trial to active duty members, followed by 50% off the annual membership fee ($69/year vs. $139). Verify through SheerID.',
        highlightedAmounts: ['$69/year'],
      },
      {
        heading: 'What It Includes',
        content: 'All standard Prime benefits: 2-day shipping, Prime Video, Prime Music, Prime Reading, Amazon Photos unlimited storage, and gaming benefits through Prime Gaming.',
      },
    ],
  },
  {
    id: '1a2b3c4d-0024-0000-0000-000000000024',
    emoji: '🏋️',
    title: 'Free Gym Memberships While on Orders',
    subtitle: 'Planet Fitness, LA Fitness, and 24 Hour Fitness — who really honors military.',
    category: 'Health',
    proRequired: false,
    sections: [
      {
        heading: 'On-Base Access',
        content: 'All base gyms (Fitness Centers) are free for active duty. While TDY or PCS in transit, you retain access to installation gyms at your current duty station.',
      },
      {
        heading: 'Off-Base Options',
        content: 'Planet Fitness: $10/month standard membership with no military discount, but their $25/month Black Card is available at many MCCS-affiliated locations for $10. LA Fitness offers 50% off monthly dues with valid military ID.',
      },
      {
        heading: 'YMCA — Active Military Free',
        content: 'The YMCA\'s Military Outreach Initiative provides free memberships to active duty service members and their families through hundreds of participating YMCAs. Apply at your nearest YMCA facility.',
        highlightedAmounts: ['Free membership'],
      },
    ],
  },
  {
    id: '1a2b3c4d-0025-0000-0000-000000000025',
    emoji: '📚',
    title: 'Free College Credits Before You Separate',
    subtitle: 'How to finish a degree on the government\'s dime while still in uniform.',
    category: 'Career',
    proRequired: true,
    proStepCount: 4,
    sections: [
      {
        heading: 'Tuition Assistance (TA)',
        content: 'All branches offer Tuition Assistance covering $250/credit hour, up to $4,500/year for active duty. This is separate from and stackable with GI Bill. Use TA first, save GI Bill for post-service.',
        highlightedAmounts: ['$4,500/year'],
      },
      {
        heading: 'CLEP and DSST Exams',
        content: 'Pass a CLEP or DSST exam and earn 3–12 college credits for $89/exam. On-base education centers waive the exam fee for active duty. This is the fastest way to knock out gen-ed requirements.',
        highlightedAmounts: ['$89/exam'],
      },
      {
        heading: 'Military Credit Evaluation',
        content: 'AARTS, SMART, or CCAF transcripts convert your military training to college credits. The average military member enters college with 15–30 pre-approved credits. Request yours before enrolling anywhere.',
        highlightedAmounts: ['15–30 pre-approved credits'],
      },
    ],
  },
];

export const getArticleById = (id: string): Article | undefined =>
  articles.find(a => a.id === id);

export const getRecentArticles = (n = 3): Article[] =>
  articles.slice(0, n);
