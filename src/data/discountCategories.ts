export interface DiscountCategory {
  id: string;
  name: string;
  icon: string;
  query: string; // Google Places type or keyword
}

export const discountCategories: DiscountCategory[] = [
  { id: 'restaurants', name: 'Restaurants', icon: '🍽️', query: 'restaurant' },
  { id: 'retail', name: 'Retail', icon: '🛍️', query: 'store' },
  { id: 'gas', name: 'Gas Stations', icon: '⛽', query: 'gas_station' },
  { id: 'hotels', name: 'Hotels', icon: '🏨', query: 'lodging' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎭', query: 'entertainment' },
  { id: 'auto', name: 'Auto Services', icon: '🔧', query: 'car_repair' },
  { id: 'grocery', name: 'Grocery', icon: '🛒', query: 'grocery_or_supermarket' },
  { id: 'gym', name: 'Fitness', icon: '💪', query: 'gym' },
  { id: 'pharmacy', name: 'Pharmacy', icon: '💊', query: 'pharmacy' },
  { id: 'haircut', name: 'Haircuts', icon: '✂️', query: 'hair_care' },
];

export const freeLocationCategories: DiscountCategory[] = [
  { id: 'commissary', name: 'Commissary', icon: '🏪', query: 'commissary military' },
  { id: 'px', name: 'PX / BX', icon: '🏬', query: 'post exchange military' },
  { id: 'clinic', name: 'Military Clinic', icon: '🏥', query: 'military clinic' },
  { id: 'gym_base', name: 'Base Gym', icon: '🏋️', query: 'military fitness center' },
  { id: 'chapel', name: 'Chapel', icon: '⛪', query: 'military chapel' },
  { id: 'legal', name: 'Legal Office', icon: '⚖️', query: 'military legal' },
  { id: 'finance', name: 'Finance Office', icon: '💰', query: 'military finance' },
  { id: 'recreation', name: 'Recreation', icon: '🎱', query: 'military recreation center' },
];
