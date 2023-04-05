import { Button, FormControl, FormErrorMessage, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import DrawerWrapper from '~/components/Drawer/DrawerWrapper';
import { TUpdate, updateSchema } from '~/validation/post';
import { zodResolver } from '@hookform/resolvers/zod';
import useRequestHandler from '~/hooks/use-request-handler';
import { useUpdatePostMutation } from '~/store/api/posts-slice';
import { Post } from '~/types/post';

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
  post: Post;
};

const UpdatePostForm = ({ isOpen, onClose, post }: PropsType) => {
  const { id, ...defaultValues } = post;
  const [update, { isLoading }] = useUpdatePostMutation();

  const { handler: updateHandler } = useRequestHandler<TUpdate & { id: number }>({
    f: update,
    successMsg: "You've successfully updated a post",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUpdate>({
    resolver: zodResolver(updateSchema),
    defaultValues,
  });

  const onSubmit = async (data: TUpdate) => {
    await updateHandler({ ...data, id });
  };

  return (
    <DrawerWrapper title="Update this post" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="4">
          <FormControl isInvalid={!!errors.title}>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input id="title" placeholder="Your title" {...register('title')} />
            <FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.content}>
            <FormLabel htmlFor="content">Content</FormLabel>
            <Input id="content" placeholder="Your content" {...register('content')} />
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

export default UpdatePostForm;
