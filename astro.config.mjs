// @ts-check
import { defineConfig } from 'astro/config';

const BASE = '/portfolio';

// Lets you write image and link paths in project .md files as /images/...
// and automatically adds /portfolio in front when the site is built.
function prefixBasePaths() {
  const fix = (/** @type {any} */ value) =>
    typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') && !value.startsWith(BASE + '/')
      ? BASE + value
      : value;
  const walk = (/** @type {any} */ node) => {
    if (node.type === 'element' && node.properties) {
      if (node.tagName === 'img') node.properties.src = fix(node.properties.src);
      if (node.tagName === 'a') node.properties.href = fix(node.properties.href);
    }
    (node.children || []).forEach(walk);
  };
  return (/** @type {any} */ tree) => walk(tree);
}

export default defineConfig({
  site: 'https://anveshsharma05.github.io',
  // The repository is named "portfolio", so the site lives at /portfolio.
  // If you ever rename the repository to AnveshSharma05.github.io, change this to '/'.
  base: BASE,
  markdown: {
    rehypePlugins: [prefixBasePaths],
  },
});
