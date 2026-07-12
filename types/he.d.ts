declare module 'he' {
  export function decode(html: string, options?: object): string;
  export function encode(text: string, options?: object): string;
  export function escape(text: string): string;
  export function unescape(html: string): string;
}
