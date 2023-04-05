import { Heading } from '@chakra-ui/react';
import Container from '~/components/Container/Container';
import PostsList from './PostsList';

const PostsPage = () => {
  return (
    <Container>
      <Heading>All the posts, published so far</Heading>
      <PostsList />
    </Container>
  );
};

export default PostsPage;
