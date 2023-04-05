import { Card, Heading, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Post } from '~/types/post';

type PropsType = {
  post: Post;
  isGridView?: boolean;
};

const PostCard = ({ post, isGridView = false }: PropsType) => {
  const navigate = useNavigate();

  const onClick = !isGridView ? undefined : () => navigate(`/posts/${post.id}`);

  return (
    <Card
      w="100%"
      cursor="pointer"
      onClick={onClick}
      variant="outline"
      borderRadius="14"
      px="8"
      py="5"
    >
      <VStack alignItems="flex-start" spacing="4">
        <Heading size="lg">{post.title}</Heading>
        <Text fontSize="lg">{post.content}</Text>
      </VStack>
    </Card>
  );
};

export default PostCard;
