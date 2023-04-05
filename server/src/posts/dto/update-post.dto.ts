import * as Joi from 'joi';
import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import {
  CONTENT_MAX_LENGTH,
  CONTENT_MIN_LENGTH,
  TITLE_MAX_LENGTH,
  TITLE_MIN_LENGTH,
} from 'src/const/validation';

export const updatePostSchema = Joi.object({
  title: Joi.string().min(TITLE_MIN_LENGTH).max(TITLE_MAX_LENGTH),
  content: Joi.string().min(CONTENT_MIN_LENGTH).max(CONTENT_MAX_LENGTH),
});

export class UpdatePostDto extends PartialType(CreatePostDto) {}
