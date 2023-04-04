import { Controller, Get, Post, Body, UsePipes, Param } from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { JoiValidationPipe } from 'src/pipes/validation.pipe';
import { CreateCommentDto, createCommentSchema } from '../dto/create-comment.dto';
import { CommentsService } from '../services/comments.service';

@Controller('posts/:id/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(
    @Param('id') postId: string,
    @Body(new JoiValidationPipe(createCommentSchema)) createCommentDto: CreateCommentDto,
  ) {
    return this.commentsService.create(+postId, createCommentDto);
  }

  @Get()
  findAll(@Param('id') postId: string) {
    return this.commentsService.findAll(+postId);
  }
}
