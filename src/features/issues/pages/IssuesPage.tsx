import { Loading, Pagination, Text } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useLazyGetIssuesCountQuery,
  useLazyGetIssuesQuery,
} from '../../../app/services/issues';
import { RootState } from '../../../app/store';
import {
  setRepo,
  setUsername,
  setPage,
} from '../../../features/issues/issuesSlice';
import IssueList from '../components/IssueList';
import IssuesSearch from '../components/IssuesSearch';

const IssuesPage = () => {
  const dispatch = useDispatch();
  const { username, repo, page } = useSelector(
    (state: RootState) => state.issues
  );
  const [fetchIssues, { data: _issues, isError, isFetching, isLoading }] =
    useLazyGetIssuesQuery();
  const [fetchIssuesCount, { data: _issuesCount }] =
    useLazyGetIssuesCountQuery();
  const issues = !isError && !isFetching && _issues ? _issues : [];
  const issuesCount = Math.ceil((_issuesCount || 0) / 30);
  const handleSumbit = () => {
    fetchIssues({ username, repo });
    fetchIssuesCount({ username, repo });
  };
  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
    fetchIssues({ username, repo, page });
  };
  const pagination = (
    <Pagination total={issuesCount} page={page} onChange={handlePageChange} />
  );

  return (
    <>
      <IssuesSearch
        username={username}
        repo={repo}
        setUsername={(username: string) => dispatch(setUsername(username))}
        setRepo={(repo: string) => dispatch(setRepo(repo))}
        onSubmit={handleSumbit}
        isLoading={isLoading}
      />
      {isError && <Text size={36}>Repository Not Found...</Text>}
      {!!issuesCount && pagination}
      {isFetching && <Loading size='lg' />}
      <IssueList issues={issues} username={username} repo={repo} />
      {!!issuesCount && pagination}
    </>
  );
};

export default IssuesPage;
