import { api } from './api';
import { Logs } from '../../types';

export const logsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLogs: builder.query<Logs[], void>({
      query: () => ({
        url: '/logs',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetLogsQuery } = logsApi;
