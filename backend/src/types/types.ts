export type LeadInput = {
  exposureLevel: 'low' | 'medium' | 'high';
  urgency: 'low' | 'medium' | 'high';
  location: string;
};

export type EncryptedPayload = {
  encrypted: string;
  iv: string;
  tag: string;
};

export type UserSession = {
  userId: string;
  token: string;
  expiresAt: string;
};
