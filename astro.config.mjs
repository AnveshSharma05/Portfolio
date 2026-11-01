// @ts-check
import { defineConfig } from 'astro/config';

// The repository is named "Portfolio", so the site lives at /Portfolio
// (GitHub addresses are case-sensitive). If you ever rename the repository
// to AnveshSharma05.github.io, change BASE to '/'.
const BASE = '/Portfolio';
const PREFIX = BASE.replace(/\/$/, ''); // '' when BASE is '/'

// Lets you write image and link paths in project .md files as /images/...
// and automatically adds /Portfolio in front when the site is built.
function prefixBasePaths() {
  const needsPrefix = (/** @type {string} */ v) =>
    PREFIX && v.startsWith('/') && !v.startsWith('//') && v !== PREFIX && !v.startsWith(PREFIX + '/');
  const fix = (/** @type {any} */ value) => (typeof value === 'string' && needsPrefix(value) ? PREFIX + value : value);
  const walk = (/** @type {any} */ node) => {
    if (node.type === 'element' && node.properties) {
      if (node.tagName === 'img') node.properties.src = fix(node.properties.src);
      if (node.tagName === 'a') node.properties.href = fix(node.properties.href);
    }
    // Images the editor saves as raw HTML (e.g. resized images)
    if (node.type === 'raw' && typeof node.value === 'string') {
      node.value = node.value.replace(/(src|href)=(["'])(\/[^"']*)/g, (m, attr, q, path) =>
        needsPrefix(path) ? `${attr}=${q}${PREFIX}${path}` : m,
      );
    }
    (node.children || []).forEach(walk);
  };
  return (/** @type {any} */ tree) => walk(tree);
}

export default defineConfig({
  site: 'https://anveshsharma05.github.io',
  base: BASE,
  markdown: {
    rehypePlugins: [prefixBasePaths],
  },
});
