import { Comment } from '~/types/comment';
import { apiSlice } from './api-slice';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], number>({
      query: (postId) => ({
        url: `posts/${postId}/comments`,
      }),
      providesTags: (result) => {
        const comments = result || [];
        return ['Comment', ...comments.map(({ id }) => ({ type: 'Comment' as const, id }))];
      },
    }),
  }),
});

export const { useGetCommentsQuery } = extendedApiSlice;
