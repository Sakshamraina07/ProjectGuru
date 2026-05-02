// Site-wide configuration — edit here to update everywhere
export const SITE = {
  name: 'ProjectGuru',
  tagline: 'Final Year Project Mentorship for Indian Students',
  description: 'India\'s most trusted final year project mentorship for BTech, BCA, MCA students. 1:1 mentor, viva prep, full support till submission.',
  url: 'https://projectguru.in',
  email: 'hello@projectguru.in',

  // Telegram Bot (for automated lead capture)
  telegramBot: 'projectguru07_bot',

  // Personal Telegram (for direct contact, optional)
  telegramPersonal: 'your_personal_username', // change this if you want

  defaultMessage: 'Hi! I want to book a free consultation for my final year project.',
};

export const SOCIAL = {
  instagram: 'https://instagram.com/projectguru',
  linkedin: 'https://linkedin.com/company/projectguru',
  youtube: 'https://youtube.com/@projectguru',
  twitter: 'https://twitter.com/projectguru',
  telegram: `https://t.me/${SITE.telegramBot}`,
};

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const STATS = {
  studentsHelped: '2,000+',
  rating: '4.9/5',
  vivaSuccessRate: '95%',
};

// Helper: Generate Telegram bot link with a tracking parameter
// The 'start' parameter helps you track WHERE the lead came from
export const getTelegramLink = (source = 'website') => {
  return `https://t.me/${SITE.telegramBot}?start=${source}`;
};