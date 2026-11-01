import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every file in src/content/projects becomes a project page.
// These are the fields each project file can have at the top.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),            // e.g. Hardware, Design, Software
    summary: z.string(),             // one sentence shown on the project page
    image: z.string(),               // path inside /public, e.g. /images/projects/lymphsense.jpg
    imageAlt: z.string().default(''),
    proudest: z.boolean().default(false), // true = shows in "Proudest projects" at the bottom
    order: z.number().default(100),  // lower numbers appear first
    role: z.string().optional(),
    team: z.string().optional(),
    timeline: z.string().optional(),
    tools: z.string().optional(),
  }),
});

export const collections = { projects };
