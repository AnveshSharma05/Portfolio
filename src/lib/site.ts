// Home page text, contact links and theme colors.
// Edit them in Pages CMS under "Home page & settings", or directly in src/data/site.json.
import data from '../data/site.json';

const defaults = {
  name: 'Anvesh Sharma',
  intro_heading: "Hello, I'm Anvesh.",
  intro_text: '',
  pointer_text: '',
  pointer_link: 'Skip to them',
  pointer_target: 'resume',
  photo: '/images/portrait.svg',
  photo_caption: '',
  projects_heading: 'Projects',
  projects_description: '',
  in_progress_heading: 'Projects in Progress',
  in_progress_description: '',
  work_heading: 'Projects at Work',
  work_description: '',
  contact_heading: "Let's build something.",
  contact_text: '',
  email: '',
  linkedin: '',
  resume: '',
  seo_description: '',
  color_gold: '#d9b45b',
  color_purple: '#8a63d2',
  color_background: '#08070b',
};

type Site = typeof defaults;
const raw = data as Partial<Record<keyof Site, string | null>>;

// Use the saved value unless it's empty, then fall back to the default.
export const site = Object.fromEntries(
  Object.entries(defaults).map(([k, v]) => {
    const val = raw[k as keyof Site];
    return [k, typeof val === 'string' && val.trim() ? val.trim() : v];
  }),
) as Site;

// Only accept real hex colors so a typo can't break the page styling.
export const safeColor = (value: string, fallback: string) =>
  /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value) ? value : fallback;
