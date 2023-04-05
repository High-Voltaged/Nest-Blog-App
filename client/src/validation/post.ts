import { z } from 'zod';

export const createSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
});

export type TCreate = z.infer<typeof createSchema>;
export type TUpdate = z.infer<typeof updateSchema>;
