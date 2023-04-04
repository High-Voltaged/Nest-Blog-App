import * as Joi from 'joi';

export const FilterPostsSchema = Joi.object({
  limit: Joi.number().default(10),
  page: Joi.number().default(1),
});

export class filterPostsDto {
  limit: number;
  page: number;
}
