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

  const trim = (str: string) => {
    return str.length < 50 || !isGridView ? str : str.slice(0, 50) + '...';
  };

  return (
    <Card
      w={isGridView ? 'auto' : '100%'}
      cursor="pointer"
      onClick={onClick}
      variant="outline"
      borderRadius="14"
      px="8"
      py="5"
    >
      <VStack alignItems="flex-start" h="100%" justifyContent="space-between" spacing="4">
        <VStack alignItems="flex-start">
          <Heading size="lg">{post.title}</Heading>
          <Text fontSize="lg">{trim(post.content)}</Text>
        </VStack>
        <Text fontSize="lg" w="100%" fontWeight="600" textAlign="right">
          {new Date(post.createdAt).toISOString().split('T')[0]}
        </Text>
      </VStack>
    </Card>
  );
};

export default PostCard;
