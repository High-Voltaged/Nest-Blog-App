import { Comment } from '~/types/comment';
import { TCreate } from '~/validation/comment';
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
    createComment: builder.mutation<Comment, TCreate & { postId: number }>({
      query: ({ postId, ...body }) => ({
        url: `/posts/${postId}/comments`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Comment'],
    }),
  }),
});

export const { useGetCommentsQuery, useCreateCommentMutation } = extendedApiSlice;
