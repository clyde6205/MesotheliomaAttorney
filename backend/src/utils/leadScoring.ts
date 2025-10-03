export type LeadInput = {
  exposureLevel: 'low' | 'medium' | 'high';
  urgency: 'low' | 'medium' | 'high';
  location: string;
};

export function scoreLead(lead: LeadInput): number {
  let score = 0;

  switch (lead.exposureLevel) {
    case 'low':
      score += 10;
      break;
    case 'medium':
      score += 30;
      break;
    case 'high':
      score += 50;
      break;
  }

  switch (lead.urgency) {
    case 'low':
      score += 10;
      break;
    case 'medium':
      score += 25;
      break;
    case 'high':
      score += 40;
      break;
  }

  if (lead.location.toLowerCase().includes('florida')) {
    score += 20;
  }

  return score;
}
