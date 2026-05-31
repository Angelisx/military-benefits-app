// 2026 Military Base Pay Tables (monthly, USD)
// Indexed by [payGrade][yearsOfServiceBracket]
// yearsOfService brackets: <2, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40

export const PAY_GRADES = [
  'E-1','E-2','E-3','E-4','E-5','E-6','E-7','E-8','E-9',
  'W-1','W-2','W-3','W-4','W-5',
  'O-1','O-2','O-3','O-4','O-5','O-6','O-7','O-8','O-9','O-10',
];

// Years of service brackets for lookup
const YOS = [0,2,3,4,6,8,10,12,14,16,18,20];

// Base pay table (monthly) — 2026 rates
// Each array: pay at YOS brackets above
export const BASE_PAY: Record<string, number[]> = {
  'E-1': [1917,1917,1917,1917,1917,1917,1917,1917,1917,1917,1917,1917],
  'E-2': [2149,2149,2149,2149,2149,2149,2149,2149,2149,2149,2149,2149],
  'E-3': [2259,2403,2521,2521,2521,2521,2521,2521,2521,2521,2521,2521],
  'E-4': [2503,2638,2740,2855,3044,3044,3044,3044,3044,3044,3044,3044],
  'E-5': [2721,2903,2989,3091,3288,3437,3581,3581,3581,3581,3581,3581],
  'E-6': [2978,3262,3347,3428,3618,3798,4021,4140,4248,4248,4248,4248],
  'E-7': [3444,3755,3868,3955,4137,4359,4560,4700,4853,5010,5169,5323],
  'E-8': [4957,5148,5238,5377,5558,5716,5882,6063,6218,6373,6478,6627],
  'E-9': [6055,6276,6390,6526,6706,6900,7105,7323,7536,7754,7972,8190],
  'W-1': [3578,3854,3977,4099,4322,4548,4763,4992,5138,5344,5508,5682],
  'W-2': [4092,4555,4641,4724,4952,5178,5404,5632,5860,6035,6209,6384],
  'W-3': [4741,5094,5229,5318,5545,5777,6006,6282,6509,6694,6876,7062],
  'W-4': [5208,5664,5793,5924,6105,6323,6553,6843,7131,7368,7558,7752],
  'W-5': [7374,7374,7574,7574,7774,7974,8174,8374,8574,8774,8974,9174],
  'O-1': [3637,3782,4538,4538,4538,4538,4538,4538,4538,4538,4538,4538],
  'O-2': [4185,4759,5484,5636,5779,5779,5779,5779,5779,5779,5779,5779],
  'O-3': [4861,5499,5928,6452,6719,6981,7094,7094,7094,7094,7094,7094],
  'O-4': [5534,6406,6837,7296,7648,7839,8073,8289,8490,8490,8490,8490],
  'O-5': [6463,7282,7773,8135,8421,8700,8700,9204,9429,9564,9696,9696],
  'O-6': [7758,8529,9088,9088,9149,9482,9525,9525,9845,10293,10559,10559],
  'O-7': [9870,10315,10503,10690,10983,11273,11559,11846,12141,12554,12868,13072],
  'O-8': [12182,12588,12801,13027,13330,13688,14047,14369,14694,15018,15344,15669],
  'O-9': [14654,14966,15177,15390,15684,16105,16390,16827,17151,17475,17800,18124],
  'O-10':[16975,16975,16975,16975,16975,16975,16975,16975,16975,16975,16975,16975],
};

// BAH rates by pay grade (E-5 with dependents as reference, monthly)
// These are average rates — actual varies significantly by duty station
export const BAH_WITH_DEPENDENTS: Record<string, number> = {
  'E-1': 1200, 'E-2': 1250, 'E-3': 1300, 'E-4': 1450, 'E-5': 1650,
  'E-6': 1800, 'E-7': 1950, 'E-8': 2100, 'E-9': 2250,
  'W-1': 1800, 'W-2': 1950, 'W-3': 2100, 'W-4': 2250, 'W-5': 2400,
  'O-1': 1800, 'O-2': 1950, 'O-3': 2200, 'O-4': 2450, 'O-5': 2700,
  'O-6': 2950, 'O-7': 3200, 'O-8': 3450, 'O-9': 3700, 'O-10': 3950,
};

export const BAH_WITHOUT_DEPENDENTS: Record<string, number> = {
  'E-1': 900, 'E-2': 950, 'E-3': 1000, 'E-4': 1100, 'E-5': 1250,
  'E-6': 1400, 'E-7': 1550, 'E-8': 1700, 'E-9': 1850,
  'W-1': 1450, 'W-2': 1600, 'W-3': 1750, 'W-4': 1900, 'W-5': 2050,
  'O-1': 1450, 'O-2': 1600, 'O-3': 1800, 'O-4': 2050, 'O-5': 2300,
  'O-6': 2550, 'O-7': 2800, 'O-8': 3050, 'O-9': 3300, 'O-10': 3550,
};

// BAS (fixed regardless of grade/dependents)
export const BAS_ENLISTED = 462.57;
export const BAS_OFFICER = 318.98;

export function getBasePay(grade: string, yos: number): number {
  const table = BASE_PAY[grade];
  if (!table) return 0;
  let idx = 0;
  for (let i = 0; i < YOS.length; i++) {
    if (yos >= YOS[i]) idx = i;
  }
  return table[idx];
}

export function getBAS(grade: string): number {
  return grade.startsWith('O') || grade.startsWith('W') ? BAS_OFFICER : BAS_ENLISTED;
}

export function getBAH(grade: string, hasDependents: boolean): number {
  return hasDependents ? (BAH_WITH_DEPENDENTS[grade] ?? 0) : (BAH_WITHOUT_DEPENDENTS[grade] ?? 0);
}

export function getTotalPay(grade: string, yos: number, hasDependents: boolean) {
  const base = getBasePay(grade, yos);
  const bah = getBAH(grade, hasDependents);
  const bas = getBAS(grade);
  return { base, bah, bas, total: base + bah + bas };
}
