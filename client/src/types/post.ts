export type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
};

export type PostsResponse = {
  posts: Post[];
  count: number;
};

export type PostsParam = {
  page?: number;
  limit?: number;
};
