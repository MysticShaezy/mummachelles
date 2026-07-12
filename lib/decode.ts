import { decode } from "he";

/**
 * Decodes HTML entities from WordPress REST API rendered fields.
 * e.g. "I&#8217;m" → "I'm"
 */
export function decodeEntities(str: string): string {
  return decode(str);
}
