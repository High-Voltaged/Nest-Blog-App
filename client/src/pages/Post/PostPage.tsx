import { Button, Flex, Heading, VStack } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '~/components/Container/Container';
import Loader from '~/components/Loader/Loader';
import NotFound from '~/components/NotFound/NotFound';
import { useGetPostQuery } from '~/store/api/posts-slice';
import PostCard from '../Posts/PostCard';
import CommentsList from './CommentsList';
import PostUpdateMenu from './PostUpdateMenu';

const PostPage = () => {
  const { id } = useParams();
  const postId = Number(id);
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetPostQuery(postId);

  if (isLoading) {
    return <Loader />;
  }

  if (error || !data) {
    return <NotFound />;
  }

  return (
    <Container>
      <VStack alignItems="flex-start" spacing={4}>
        <Flex w="100%" justifyContent="space-between">
          <Button onClick={() => navigate('/')}>Go back</Button>
          <Heading>Post's details</Heading>
          <PostUpdateMenu post={data} />
        </Flex>
        <PostCard post={data} />
        <CommentsList postId={postId} />
      </VStack>
    </Container>
  );
};

export default PostPage;
