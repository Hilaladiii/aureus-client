import { env } from "../lib/env";

export function getImageObject(key: string) {
  return `${env.NEXT_PUBLIC_STORAGE_URL}${key}`;
}
