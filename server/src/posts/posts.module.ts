import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsController } from './controllers/comments.controller';
import { Post } from './entities/post.entity';
import { PostsController } from './controllers/posts.controller';
import { PostsService } from './services/posts.service';
import { CommentsService } from './services/comments.service';
import { Comment } from './entities/comment.entity';
import { SeedingService } from './services/seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Comment])],
  controllers: [PostsController, CommentsController],
  providers: [PostsService, CommentsService, SeedingService],
  exports: [SeedingService],
})
export class PostsModule {}
