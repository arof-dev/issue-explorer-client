import { api } from './api';
import { Issue } from '../../types';

type BaseParams = {
  username: string;
  repo: string;
};

type GetIssuesParams = BaseParams & {
  page?: number;
};

type GetIssueParams = BaseParams & {
  number: number;
};

export const issuesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getIssues: builder.query<Issue[], GetIssuesParams>({
      query: ({ username, repo, page }) => ({
        url: `/issues/${username}/${repo}?limit=30&page=${page || 1}`,
        method: 'GET',
      }),
    }),
    getIssuesCount: builder.query<number, GetIssuesParams>({
      query: ({ username, repo }) => ({
        url: `/issues/${username}/${repo}/count`,
        method: 'GET',
      }),
      transformResponse: (response: { count: number }) => response.count,
    }),
    getIssue: builder.query<Issue, GetIssueParams>({
      query: ({ username, repo, number }) => ({
        url: `/issues/${username}/${repo}/${number}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useLazyGetIssuesQuery,
  useLazyGetIssuesCountQuery,
  useGetIssueQuery,
} = issuesApi;
