import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // Meta description.
    description: z.string(),
    // Line shown under the title on the journal index; falls back to description.
    summary: z.string().optional(),
    // Shorter line for link previews; falls back to description.
    ogDescription: z.string().optional(),
    // Position among posts published on the same day; lower comes first.
    order: z.number().int().default(0),
  }),
});

export const collections = { journal };
