export interface Article {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  category: 'Financial' | 'Travel' | 'Entertainment' | 'Shopping' | 'Finance' | 'Lifestyle' | 'Career' | 'Health';
  proRequired: boolean;
  proStepCount?: number;
  sections: ArticleSection[];
}

export interface ArticleSection {
  heading: string;
  content: string;
  highlightedAmounts?: string[];
}

export interface CreditCard {
  id: string;
  name: string;
  issuer: string;
  annual_fee: number;
  waived_for_military: boolean;
  military_benefits: string;
  military_specific: boolean;
  signup_bonus: string;
  travel_credit: number;
  lounge_access: boolean;
  total_annual_perks: number;
  eligibility: string;
  how_to_apply: string;
  affiliate_url: string;
  image_url: string;
  tier: number;
  status: string;
  credit_card_benefits: CardBenefit[];
}

export interface CardBenefit {
  id: string;
  credit_card_id: string;
  name: string;
  description: string;
  value: number;
  reset_period: 'Monthly' | 'Annually' | 'Per Statement';
}

export interface AirportLounge {
  id: string;
  airport_code: string;
  airport_name: string;
  city: string;
  state: string;
  country: string;
  lounge_name: string;
  lounge_type: string;
  terminal: string;
  hours: string;
  amenities: string[];
  military_eligible: boolean;
  military_description: string;
  credit_card_access: string[];
  priority_pass_access: boolean;
  website_url: string;
  status: string;
}

export interface MilitaryHotel {
  id: string;
  name: string;
  hotel_type: string;
  city: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
  website: string;
  phone: string;
  description: string;
  eligibility: string;
  status: string;
}

export interface StateBenefit {
  id: string;
  code: string;
  name: string;
  official_website: string;
  benefits: StateBenefitCategory[];
}

export interface StateBenefitCategory {
  category: string;
  icon: string;
  items: { title: string; description: string }[];
}

export interface UserProfile {
  id: string;
  email: string;
  subscription_status: 'free' | 'trial' | 'pro';
  trial_end_date?: string;
  stripe_customer_id?: string;
  is_active_duty: boolean;
}

export interface TSPData {
  currentBalance: number;
  baseBalance: number;
  trackingStartDate: string;
  contributionPercent: number;
  payGrade: string;
  yearsOfService: number;
  expectedReturn: number;
  fundAllocations: { C: number; F: number; G: number; I: number; S: number; L: number };
  selectedLFund?: string;
}

export interface MilitaryPayConfig {
  payGrade: string;
  yearsOfService: number;
  hasDependents: boolean;
  bahZipCode: string;
}

export type SubscriptionStatus = 'free' | 'trial' | 'pro';
