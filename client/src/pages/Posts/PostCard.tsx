import { Card, Heading, Text, VStack } from '@chakra-ui/react';
import { Post } from '~/types/post';

type PropsType = {
  post: Post;
};

const PostCard = ({ post }: PropsType) => {
  return (
    <Card variant="outline" borderRadius="14" px="8" py="5">
      <VStack alignItems="flex-start" spacing="4">
        <Heading size="lg">{post.title}</Heading>
        <Text fontSize="lg">{post.content}</Text>
      </VStack>
    </Card>
  );
};

export default PostCard;
