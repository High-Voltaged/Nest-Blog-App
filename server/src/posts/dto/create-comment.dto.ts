import * as Joi from 'joi';

export const createCommentSchema = Joi.object({
  content: Joi.string().required(),
});

export class CreateCommentDto {
  content: string;
}
