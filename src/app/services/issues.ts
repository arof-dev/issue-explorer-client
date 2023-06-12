import { api } from './api';
import { Issue } from '../../types';

type GetPostsParams = {
  username: string;
  repo: string;
};

export const issuesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Issue[], GetPostsParams>({
      query: ({ username, repo }) => ({
        url: `/issues/${username}/${repo}?limit=10&offset=0`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPostsQuery, useLazyGetPostsQuery } = issuesApi;
