import { z } from 'zod';
import {
  CONTENT_MAX_LENGTH,
  CONTENT_MIN_LENGTH,
  TITLE_MAX_LENGTH,
  TITLE_MIN_LENGTH,
} from '~/const/validation';

export const createSchema = z.object({
  title: z.string().min(TITLE_MIN_LENGTH).max(TITLE_MAX_LENGTH),
  content: z.string().min(CONTENT_MIN_LENGTH).max(CONTENT_MAX_LENGTH),
});

export const updateSchema = z.object({
  title: z.string().min(TITLE_MIN_LENGTH).max(TITLE_MAX_LENGTH).optional(),
  content: z.string().min(CONTENT_MIN_LENGTH).max(CONTENT_MAX_LENGTH).optional(),
});

export type TCreate = z.infer<typeof createSchema>;
export type TUpdate = z.infer<typeof updateSchema>;
