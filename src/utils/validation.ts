import type { FetvaResponse } from '../types';

function isValidGuidance(guidance: unknown): boolean {
  if (typeof guidance !== 'string' || guidance.trim().length === 0) {
    console.error('Invalid guidance: must be a non-empty string');
    return false;
  }
  return true;
}

function isValidVerse(verse: unknown): boolean {
  if (!verse || typeof verse !== 'object') {
    console.error('Invalid verse object:', verse);
    return false;
  }

  const v = verse as Record<string, unknown>;
  const requiredFields = ['arabic', 'turkish', 'reference', 'context'];

  for (const field of requiredFields) {
    if (typeof v[field] !== 'string' || (v[field] as string).trim().length === 0) {
      console.error(`Invalid or missing verse.${field}:`, v[field]);
      return false;
    }
  }

  // Special validation for reference format
  if (!String(v.reference).includes(':')) {
    console.error('Invalid verse.reference format:', v.reference);
    return false;
  }

  return true;
}

function isValidHadith(hadith: unknown): boolean {
  if (!hadith || typeof hadith !== 'object') {
    console.error('Invalid hadith object:', hadith);
    return false;
  }

  const h = hadith as Record<string, unknown>;
  const requiredFields = ['arabic', 'turkish', 'source', 'explanation'];

  for (const field of requiredFields) {
    if (typeof h[field] !== 'string' || (h[field] as string).trim().length === 0) {
      console.error(`Invalid or missing hadith.${field}:`, h[field]);
      return false;
    }
  }

  return true;
}

export function isValidFetvaResponse(data: unknown): data is FetvaResponse {
  try {
    if (!data || typeof data !== 'object') {
      console.error('Invalid data type:', typeof data);
      return false;
    }

    const response = data as Record<string, unknown>;

    // Validate guidance
    if (!isValidGuidance(response.guidance)) {
      return false;
    }

    // Validate verses
    if (!Array.isArray(response.verses) || response.verses.length === 0) {
      console.error('Verses must be a non-empty array');
      return false;
    }

    for (const verse of response.verses) {
      if (!isValidVerse(verse)) {
        return false;
      }
    }

    // Validate hadiths
    if (!Array.isArray(response.hadiths) || response.hadiths.length === 0) {
      console.error('Hadiths must be a non-empty array');
      return false;
    }

    for (const hadith of response.hadiths) {
      if (!isValidHadith(hadith)) {
        return false;
      }
    }

    return true;
  } catch (error) {
    console.error('Validation error:', error);
    return false;
  }
}