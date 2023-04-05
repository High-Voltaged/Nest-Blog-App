import { z } from 'zod';

export const createSchema = z.object({
  content: z.string(),
});

export type TCreate = z.infer<typeof createSchema>;
