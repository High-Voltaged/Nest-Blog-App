import { Button, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import Container from '~/components/Container/Container';
import CreatePostForm from './CreatePostForm';
import PostsList from './PostsList';

const PostsPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container>
      <Flex alignItems="center" justifyContent="space-between" w="100%">
        <Heading>All the posts, published so far</Heading>
        <Button onClick={onOpen} colorScheme="blue" variant="outline">
          Add a new post
        </Button>
        <CreatePostForm isOpen={isOpen} onClose={onClose} />
      </Flex>
      <PostsList />
    </Container>
  );
};

export default PostsPage;
