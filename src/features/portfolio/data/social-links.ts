import { Instagram } from "@hugeicons/core-free-icons"

import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 */
export const SOCIAL = {
  github: {
    title: "GitHub",
    handle: "nabilkhirom734-hub",
    href: "https://github.com/nabilkhirom734-hub",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "Nabil Khirom Saputro",
    href: "https://linkedin.com/in/Nabil Khirom Saputro",
    sameAs: true,
  },
  // dailydotdev: {
  //   title: "daily.dev",
  //   handle: "nabilkhirom734-hub",
  //   href: "https://app.daily.dev/nabilkhirom734-hub",
  //   sameAs: true,
  // },
  instagram: {
    title: "Instagram",
    handle: "nabilblikhirom7342022",
    href: "https://instagram.com/nabilblikhirom7342022",
    sameAs: true,
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
