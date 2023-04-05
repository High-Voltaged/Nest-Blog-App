import { z } from 'zod';
import { CONTENT_MAX_LENGTH, CONTENT_MIN_LENGTH } from '~/const/validation';

export const createSchema = z.object({
  content: z.string().min(CONTENT_MIN_LENGTH).max(CONTENT_MAX_LENGTH),
});

export type TCreate = z.infer<typeof createSchema>;
