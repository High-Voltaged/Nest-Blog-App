import { Post, PostsParam, PostsResponse } from '~/types/post';
import { apiSlice } from './api-slice';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostsResponse, PostsParam>({
      query: (params) => ({
        url: '/posts',
        params,
      }),
      providesTags: (result) => {
        const posts = result?.posts || [];
        return ['Post', ...posts.map(({ id }) => ({ type: 'Post' as const, id }))];
      },
    }),
    getPost: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
      providesTags: (_result, _error, arg) => [{ type: 'Post' as const, id: arg }],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = extendedApiSlice;
