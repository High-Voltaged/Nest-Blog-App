import * as Joi from 'joi';

export const createPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

export class CreatePostDto {
  title: string;
  content: string;
}
