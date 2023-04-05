import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import DrawerWrapper from '~/components/Drawer/DrawerWrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import useRequestHandler from '~/hooks/use-request-handler';
import { useCreateCommentMutation } from '~/store/api/comments-slice';
import { TCreate } from '~/validation/comment';
import { createSchema } from '~/validation/comment';

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
  postId: number;
};

const CreateCommentForm = ({ isOpen, onClose, postId }: PropsType) => {
  const [create, { isLoading }] = useCreateCommentMutation();

  const { handler: createHandler } = useRequestHandler<TCreate & { postId: number }>({
    f: create,
    successMsg: "You've successfully created a comment",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TCreate>({
    resolver: zodResolver(createSchema),
  });

  const onSubmit = async (data: TCreate) => {
    await createHandler({ ...data, postId });
    reset();
  };

  return (
    <DrawerWrapper title="Create a new comment" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="4">
          <FormControl isInvalid={!!errors.content}>
            <FormLabel htmlFor="content">Content</FormLabel>
            <Textarea id="content" placeholder="Your content" {...register('content')} />
            <FormErrorMessage>{errors.content && errors.content.message}</FormErrorMessage>
          </FormControl>
          <Button type="submit" w="200px" colorScheme="blue" isLoading={isLoading}>
            Submit
          </Button>
        </VStack>
      </form>
    </DrawerWrapper>
  );
};

export default CreateCommentForm;
