import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().default('AyTi Xizmati'),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['uz', 'ru', 'en']).default('uz'),
  }),
});

export const collections = { blog };
