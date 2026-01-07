import { HeadlineData } from '@/types/common.interface';

export const toHeadlineArray = (headline?: HeadlineData | HeadlineData[]): HeadlineData[] => {
  if (!headline) return [];

  // already an array → return as-is
  if (Array.isArray(headline)) return headline;

  // single object → wrap in array
  return [headline];
};
