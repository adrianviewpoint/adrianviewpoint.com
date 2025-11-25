// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    readingTime: z.string(),
    description: z.string(),
    xUrl: z.string().url().optional(),
    image: z.string().optional(), // Path to leading image, e.g., '/images/energy-tesla.jpg'
  }),
});

export const collections = { articles };