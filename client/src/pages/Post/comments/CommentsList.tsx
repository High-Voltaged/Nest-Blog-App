import { Button, Flex, Heading, useDisclosure, VStack } from '@chakra-ui/react';
import Loader from '~/components/Loader/Loader';
import NotFound from '~/components/NotFound/NotFound';
import useCustomToast from '~/hooks/use-custom-toast';
import { useGetCommentsQuery } from '~/store/api/comments-slice';
import CommentCard from './CommentCard';
import CreateCommentForm from './CreateCommentForm';

type PropsType = {
  postId: number;
};

const CommentsList = ({ postId }: PropsType) => {
  const { data: comments, error, isLoading } = useGetCommentsQuery(postId);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toast } = useCustomToast();

  if (isLoading) {
    return <Loader isFullScreen={false} />;
  }

  const commentCards = comments?.length ? (
    comments.map((c) => <CommentCard key={c.id} comment={c} />)
  ) : (
    <NotFound />
  );

  if (error) {
    toast((error as any).message || (error as any).data.message, 'error');
  }

  return (
    <VStack w="100%" alignItems="flex-start" px="20" py="4">
      <Flex alignItems="center" justifyContent="space-between" w="100%">
        <Heading size="lg">Comments</Heading>
        <Button onClick={onOpen} colorScheme="blue">
          Add a new comment
        </Button>
        <CreateCommentForm postId={postId} isOpen={isOpen} onClose={onClose} />
      </Flex>
      <VStack w="100%" spacing={3} alignItems="flex-start">
        {commentCards}
      </VStack>
    </VStack>
  );
};

export default CommentsList;
