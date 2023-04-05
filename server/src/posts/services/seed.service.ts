import { Injectable } from '@nestjs/common';
import { postSeeds } from 'src/seeds/posts.seed';
import { EntityManager } from 'typeorm';
import { Post } from '../entities/post.entity';
import { PostsService } from './posts.service';

@Injectable()
export class SeedingService {
  constructor(
    private readonly entityManager: EntityManager,
    private readonly postsService: PostsService,
  ) {}

  async seed() {
    const found = await this.postsService.findAll();
    if (found.count !== 0) {
      return;
    }
    const posts = this.entityManager.save(Post, postSeeds);
    await Promise.all([posts]);
  }
}
