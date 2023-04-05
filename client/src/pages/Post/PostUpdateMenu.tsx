import { Button, ButtonGroup, useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import useCustomToast from '~/hooks/use-custom-toast';
import useRequestHandler from '~/hooks/use-request-handler';
import { useDeletePostMutation } from '~/store/api/posts-slice';
import { Post } from '~/types/post';
import UpdatePostForm from './UpdatePostForm';

type PropsType = {
  post: Post;
};

const PostUpdateMenu = ({ post }: PropsType) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();
  const [remove, { isLoading }] = useDeletePostMutation();

  const { handler: removeHandler } = useRequestHandler<number>({
    f: remove,
    successMsg: 'You have successfully removed the post.',
  });

  const onRemoveClick = async () => {
    await removeHandler(post.id);
    navigate('/');
  };

  return (
    <>
      <ButtonGroup isAttached>
        <Button colorScheme="blue" onClick={onOpen}>
          Update
        </Button>
        <Button isLoading={isLoading} colorScheme="red" variant="outline" onClick={onRemoveClick}>
          Remove
        </Button>
      </ButtonGroup>
      <UpdatePostForm isOpen={isOpen} onClose={onClose} post={post} />
    </>
  );
};

export default PostUpdateMenu;
