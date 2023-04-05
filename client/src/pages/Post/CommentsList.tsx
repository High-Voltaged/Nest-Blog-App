import { Heading, VStack } from '@chakra-ui/react';
import Loader from '~/components/Loader/Loader';
import NotFound from '~/components/NotFound/NotFound';
import useCustomToast from '~/hooks/use-custom-toast';
import { useGetCommentsQuery } from '~/store/api/comments-slice';
import CommentCard from './CommentCard';

type PropsType = {
  postId: number;
};

const CommentsList = ({ postId }: PropsType) => {
  const { data: comments, error, isLoading } = useGetCommentsQuery(postId);
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
    <>
      <VStack w="100%" alignItems="flex-start" px="20" py="4">
        <Heading size="lg">Comments</Heading>
        <VStack w="100%" spacing={3} alignItems="flex-start">
          {commentCards}
        </VStack>
      </VStack>
    </>
  );
};

export default CommentsList;
