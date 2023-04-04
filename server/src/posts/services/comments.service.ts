import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { Comment } from '../entities/comment.entity';
import { PostsService } from './posts.service';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
    private postsService: PostsService,
  ) {}

  async create(postId: number, createCommentDto: CreateCommentDto) {
    const post = await this.postsService.findOne(postId);
    const comment = this.commentsRepository.create(createCommentDto);
    comment.post = post;
    return await this.commentsRepository.save(comment);
  }

  async findAll(id: number) {
    await this.postsService.findOne(id);
    return this.commentsRepository.find({
      where: {
        post: { id },
      },
    });
  }
}
