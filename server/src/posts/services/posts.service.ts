import { HttpCode, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getPageParams } from 'src/utils/pagination';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dto/create-post.dto';
import { filterPostsDto } from '../dto/query-posts.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostDto) {
    const post = this.postsRepository.create(createPostDto);
    return this.postsRepository.save(post);
  }

  async findAll(filterPostsDto?: filterPostsDto) {
    const { page, limit } = filterPostsDto;
    const { skip, take } = getPageParams(page, limit);
    const [posts, count] = await this.postsRepository.findAndCount({
      skip,
      take,
      order: { createdAt: 'desc' },
    });
    return { posts, count };
  }

  async findOne(id: number) {
    const post = await this.postsRepository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException(`The post with the id ${id} does not exist.`);
    }
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.findOne(id);
    this.postsRepository.merge(post, updatePostDto);
    return this.postsRepository.save(post);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(id: number) {
    await this.findOne(id);
    await this.postsRepository.delete(id);
  }
}
