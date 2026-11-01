// Adds the site's base path (/portfolio) to links and image paths.
// Write paths as if the site lived at the root, e.g. url('/images/me.jpg'),
// and this turns them into '/portfolio/images/me.jpg'.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path; // external or relative link
  if (base && (path === base || path.startsWith(base + '/'))) return path; // already has base
  return base + path;
}
