import { Lang } from "@/type/interface";

const supportedLangs: readonly Lang[] = ["ua","ru","en"];

export function getCleanLang(lang: string): Lang {
  const normalized = lang.trim().toLowerCase();

  return supportedLangs.includes(normalized as Lang)
    ? (normalized as Lang)
    : "en";
}
