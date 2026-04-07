export type NavLink = {
  label: string;
  href: string;
  mobileOnly?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { label: 'HOME', href: '/' },
  { label: 'PROJECTS', href: '/#projects' },
  { label: 'EXPERIENCE', href: '/#experience' },
  { label: 'BLOG', href: '/blog' }
];
