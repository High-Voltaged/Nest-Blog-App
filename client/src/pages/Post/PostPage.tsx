import { Heading, VStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Container from '~/components/Container/Container';
import Loader from '~/components/Loader/Loader';
import NotFound from '~/components/NotFound/NotFound';
import { useGetPostQuery } from '~/store/api/posts-slice';
import PostCard from '../Posts/PostCard';
import CommentsList from './CommentsList';

const PostPage = () => {
  const { id } = useParams();
  const postId = Number(id);
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
        <Heading>Post's details</Heading>
        <PostCard post={data} />
        <CommentsList postId={postId} />
      </VStack>
    </Container>
  );
};

export default PostPage;
