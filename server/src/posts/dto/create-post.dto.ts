import * as Joi from 'joi';
import {
  CONTENT_MAX_LENGTH,
  CONTENT_MIN_LENGTH,
  TITLE_MAX_LENGTH,
  TITLE_MIN_LENGTH,
} from 'src/const/validation';

export const createPostSchema = Joi.object({
  title: Joi.string().min(TITLE_MIN_LENGTH).max(TITLE_MAX_LENGTH).required(),
  content: Joi.string().min(CONTENT_MIN_LENGTH).max(CONTENT_MAX_LENGTH).required(),
});

export class CreatePostDto {
  title: string;
  content: string;
}
