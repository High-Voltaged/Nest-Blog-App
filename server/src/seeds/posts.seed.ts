import { CreateCommentDto } from 'src/posts/dto/create-comment.dto';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';
import { commentSeeds } from './comments.seed';

type PostWithComments = CreatePostDto & { comments: CreateCommentDto[] };

export const postSeeds: PostWithComments[] = [
  {
    title: 'First post',
    content: 'This is the content of the first post',
    comments: [commentSeeds[0]],
  },
  {
    title: 'Second post',
    content: 'This is the content of the second post',
    comments: [commentSeeds[1]],
  },
  {
    title: 'Third post',
    content: 'This is the content of the third post',
    comments: [commentSeeds[2]],
  },
  {
    title: 'Fourth post',
    content: 'This is the content of the fourth post',
    comments: [commentSeeds[3]],
  },
  {
    title: 'Fifth post',
    content: 'This is the content of the fifth post',
    comments: [commentSeeds[4]],
  },
  {
    title: 'Sixth post',
    content: 'This is the content of the sixth post',
    comments: [commentSeeds[5]],
  },
  {
    title: 'Seventh post',
    content: 'This is the content of the seventh post',
    comments: [commentSeeds[6]],
  },
  {
    title: 'Eighth post',
    content: 'This is the content of the eighth post',
    comments: [commentSeeds[7]],
  },
  {
    title: 'Nineth post',
    content: 'This is the content of the nineth post',
    comments: [commentSeeds[8]],
  },
  {
    title: 'Tenth post',
    content: 'This is the content of the tenth post',
    comments: [commentSeeds[9]],
  },
];
