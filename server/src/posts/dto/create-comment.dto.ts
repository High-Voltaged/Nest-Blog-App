import * as Joi from 'joi';
import { CONTENT_MAX_LENGTH, CONTENT_MIN_LENGTH } from 'src/const/validation';

export const createCommentSchema = Joi.object({
  content: Joi.string().min(CONTENT_MIN_LENGTH).max(CONTENT_MAX_LENGTH).required(),
});

export class CreateCommentDto {
  content: string;
}
