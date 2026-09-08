export type NavKey = 'product' | 'studio' | 'journal' | 'contact' | 'privacy';

export interface NavItem {
  key: NavKey;
  label: string;
  href: string;
}

const items: Record<NavKey, NavItem> = {
  product: { key: 'product', label: 'Product', href: '/product.html' },
  studio: { key: 'studio', label: 'Studio', href: '/studio.html' },
  journal: { key: 'journal', label: 'Journal', href: '/journal/' },
  contact: { key: 'contact', label: 'Contact', href: '/contact.html' },
  privacy: { key: 'privacy', label: 'Privacy', href: '/privacy.html' },
};

export const primaryNav: NavItem[] = [items.product, items.studio, items.journal, items.contact];
export const footerNav: NavItem[] = [items.product, items.studio, items.journal, items.privacy, items.contact];
