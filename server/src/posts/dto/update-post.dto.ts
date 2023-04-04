import * as Joi from 'joi';
import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

export const updatePostSchema = Joi.object({
  title: Joi.string(),
  content: Joi.string(),
});

export class UpdatePostDto extends PartialType(CreatePostDto) {}
