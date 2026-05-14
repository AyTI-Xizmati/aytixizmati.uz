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
    service: z.enum(['sayt', 'erp', 'crm', 'bot', 'mobil', 'support', 'other']).optional(),
    faqItems: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = { blog };
