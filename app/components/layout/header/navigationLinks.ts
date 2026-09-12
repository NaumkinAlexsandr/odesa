export type NavLinkKey =
  | "home"
  | "attractions"
  | "history"
  | "news"
  | "events"
  | "destruction";

export interface NavigationLink {
  path: string;
  key: NavLinkKey;
}

export const navigationLinks: NavigationLink[] = [
  { path: "/", key: "home" },
  { path: "/attractions", key: "attractions" },
  { path: "/history", key: "history" },
  { path: "/news", key: "news" },
  { path: "/events", key: "events" },
  { path: "/destruction", key: "destruction" },
];
