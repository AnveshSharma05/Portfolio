import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every file in src/content/projects becomes a project page.
// The schema is forgiving on purpose: if a field is left empty in the editor,
// the site still builds and falls back to a sensible default.
const text = (fallback: string) =>
  z.string().nullish().transform((v) => (v && v.trim() ? v : fallback));
const optionalText = z
  .string()
  .nullish()
  .transform((v) => (v && v.trim() ? v : undefined));

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: text('Untitled project'),
    category: text('Project'),
    summary: text(''),
    image: text('/images/projects/untitled-project.svg'),
    imageAlt: text(''),
    // Which home page section: projects, in-progress or work (anything else counts as projects)
    section: z
      .string()
      .nullish()
      .transform((v) => (v === 'in-progress' || v === 'work' ? v : 'projects')),
    order: z.coerce.number().nullish().transform((v) => (typeof v === 'number' && !Number.isNaN(v) ? v : 100)),
    role: optionalText,
    team: optionalText,
    timeline: optionalText,
    tools: optionalText,
  }),
});

export const collections = { projects };
