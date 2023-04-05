import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  Query,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { CreatePostDto, createPostSchema } from '../dto/create-post.dto';
import { UpdatePostDto, updatePostSchema } from '../dto/update-post.dto';
import { JoiValidationPipe } from 'src/pipes/validation.pipe';
import { filterPostsDto, FilterPostsSchema } from '../dto/query-posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(createPostSchema))
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll(@Query(new JoiValidationPipe(FilterPostsSchema)) query: filterPostsDto) {
    return this.postsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new JoiValidationPipe(updatePostSchema)) updatePostDto: UpdatePostDto,
  ) {
    return this.postsService.update(+id, updatePostDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
