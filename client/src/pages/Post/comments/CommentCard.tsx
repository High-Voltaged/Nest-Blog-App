import { Card, Text, VStack } from '@chakra-ui/react';
import { Comment } from '~/types/comment';

type PropsType = {
  comment: Comment;
};

const CommentCard = ({ comment }: PropsType) => {
  return (
    <Card variant="filled" w="100%" borderRadius="10" px="8" py="5">
      <VStack alignItems="flex-start" spacing="4">
        <Text fontSize="lg">{comment.content}</Text>
      </VStack>
    </Card>
  );
};

export default CommentCard;
