export interface SampleCardBenefit {
  name: string;
  value: number;
  reset_period: 'Monthly' | 'Annually' | 'Per Statement';
  description: string;
}

export interface SampleCreditCard {
  id: string;
  name: string;
  issuer: string;
  annual_fee: number;
  waived_for_military: boolean;
  military_benefits: string;
  signup_bonus: string;
  lounge_access: boolean;
  total_annual_perks: number;
  tier: number;
  benefits: SampleCardBenefit[];
}

export const CREDIT_CARDS: SampleCreditCard[] = [
  {
    id: '1', name: 'Amex Platinum', issuer: 'American Express', annual_fee: 695, waived_for_military: true,
    military_benefits: 'Annual fee waived under SCRA/MLA for active duty. Full $695 waived.',
    signup_bonus: '80,000 points after $8,000 spend in 6 months',
    lounge_access: true, total_annual_perks: 1500, tier: 1,
    benefits: [
      { name: 'Hotel Credit', value: 200, reset_period: 'Annually', description: '$200 at Fine Hotels & Resorts' },
      { name: 'Airline Credit', value: 200, reset_period: 'Annually', description: '$200 airline fee credit' },
      { name: 'Digital Entertainment', value: 240, reset_period: 'Annually', description: '$20/mo streaming' },
      { name: 'Walmart+ Credit', value: 155, reset_period: 'Annually', description: 'Walmart+ subscription covered' },
      { name: 'Saks Credit', value: 100, reset_period: 'Annually', description: '$50 semi-annually at Saks' },
    ],
  },
  {
    id: '2', name: 'Chase Sapphire Reserve', issuer: 'Chase', annual_fee: 550, waived_for_military: true,
    military_benefits: 'Annual fee waived under SCRA/MLA for active duty.',
    signup_bonus: '60,000 points after $4,000 spend in 3 months',
    lounge_access: true, total_annual_perks: 900, tier: 1,
    benefits: [
      { name: 'Travel Credit', value: 300, reset_period: 'Annually', description: 'Automatic $300 travel credit' },
      { name: 'Global Entry/TSA', value: 100, reset_period: 'Annually', description: 'Credit for application fee' },
      { name: 'DashPass', value: 120, reset_period: 'Annually', description: 'DoorDash DashPass subscription' },
    ],
  },
  {
    id: '3', name: 'Capital One Venture X', issuer: 'Capital One', annual_fee: 395, waived_for_military: true,
    military_benefits: 'Annual fee waived for active duty under MLA.',
    signup_bonus: '75,000 miles after $4,000 spend in 3 months',
    lounge_access: true, total_annual_perks: 700, tier: 1,
    benefits: [
      { name: 'Travel Credit', value: 300, reset_period: 'Annually', description: '$300 Capital One travel credit' },
      { name: 'Anniversary Bonus', value: 100, reset_period: 'Annually', description: '10,000 bonus miles annually' },
      { name: 'Global Entry/TSA', value: 100, reset_period: 'Annually', description: 'Application fee credit' },
    ],
  },
  {
    id: '4', name: 'Chase Sapphire Preferred', issuer: 'Chase', annual_fee: 95, waived_for_military: true,
    military_benefits: 'Annual fee waived under SCRA/MLA.',
    signup_bonus: '60,000 points after $4,000 spend in 3 months',
    lounge_access: false, total_annual_perks: 250, tier: 2,
    benefits: [
      { name: 'Hotel Credit', value: 50, reset_period: 'Annually', description: '$50 hotel credit through Chase' },
      { name: 'DashPass', value: 120, reset_period: 'Annually', description: 'DoorDash DashPass' },
    ],
  },
  {
    id: '5', name: 'USAA Cashback Rewards+', issuer: 'USAA', annual_fee: 0, waived_for_military: false,
    military_benefits: 'Designed specifically for military members. No foreign transaction fees.',
    signup_bonus: 'None',
    lounge_access: false, total_annual_perks: 120, tier: 2,
    benefits: [
      { name: 'Gas Cashback', value: 60, reset_period: 'Annually', description: '5% on first $3,000 in gas/military base purchases' },
      { name: 'Grocery Cashback', value: 60, reset_period: 'Annually', description: '2% on grocery purchases' },
    ],
  },
  {
    id: '6', name: 'Navy Federal Platinum', issuer: 'Navy Federal', annual_fee: 0, waived_for_military: false,
    military_benefits: 'Exclusively for military, veterans, and their families. Low APR options.',
    signup_bonus: 'None',
    lounge_access: false, total_annual_perks: 0, tier: 3,
    benefits: [],
  },
];
