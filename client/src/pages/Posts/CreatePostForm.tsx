import { Button, FormControl, FormErrorMessage, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import DrawerWrapper from '~/components/Drawer/DrawerWrapper';
import { createSchema, TCreate } from '~/validation/post';
import { zodResolver } from '@hookform/resolvers/zod';
import useRequestHandler from '~/hooks/use-request-handler';
import { useCreatePostMutation } from '~/store/api/posts-slice';

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
};

const CreatePostForm = ({ isOpen, onClose }: PropsType) => {
  const [create, { isLoading }] = useCreatePostMutation();

  const { handler: createHandler } = useRequestHandler<TCreate>({
    f: create,
    successMsg: "You've successfully created a post",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreate>({
    resolver: zodResolver(createSchema),
  });

  return (
    <DrawerWrapper title="Create a new post" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(createHandler)}>
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

export default CreatePostForm;
