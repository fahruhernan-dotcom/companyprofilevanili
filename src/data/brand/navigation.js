/**
 * ESSENCE INDONESIA — NAVIGATION ARCHITECTURE
 * Minimal, quiet-luxury information architecture.
 */

export const navigationItems = [
  {
    id: 'origins',
    label: 'Origins',
    href: '#origins',
    subItems: [
      { id: 'vanilla', label: 'Vanilla', href: '#vanilla' },
      { id: 'coffee', label: 'Coffee', href: '#coffee' }
    ]
  },
  {
    id: 'quality',
    label: 'Quality',
    href: '#quality'
  },
  {
    id: 'about',
    label: 'About',
    href: '#about'
  },
  {
    id: 'for-buyers',
    label: 'For Buyers',
    href: '#for-buyers'
  }
];

export const ctaAction = {
  label: 'Inquiry',
  icon: 'arrow-up-right',
  href: '#inquiry',
  modalTrigger: true
};

export default {
  navigationItems,
  ctaAction
};
