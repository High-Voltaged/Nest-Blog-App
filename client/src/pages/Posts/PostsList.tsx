import { SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import Loader from '~/components/Loader/Loader';
import NotFound from '~/components/NotFound/NotFound';
import Pagination from '~/components/Pagination/Pagination';
import { useGetPostsQuery } from '~/store/api/posts-slice';
import PostCard from './PostCard';

const PostsList = () => {
  const postsLimit = 8;
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetPostsQuery({
    limit: postsLimit,
    page,
  });
  const pagesCount = data?.count ? Math.ceil(data?.count / postsLimit) : 0;

  const postCards = data?.posts.length ? (
    data.posts.map((p) => <PostCard key={p.id} post={p} />)
  ) : (
    <NotFound />
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SimpleGrid minChildWidth="300px" mt="14" spacing={{ base: '20px', md: '30px' }}>
            {postCards}
          </SimpleGrid>
          <Pagination pagesCount={pagesCount} currentPage={page} onPageChange={setPage} />
        </>
      )}
    </>
  );
};

export default PostsList;