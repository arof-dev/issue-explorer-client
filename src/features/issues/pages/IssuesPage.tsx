import { useState } from 'react';
import IssueList from '../components/IssueList';
import IssuesSearch from '../components/IssuesSearch';
import s from './IssuesPage.module.scss';
import { useLazyGetPostsQuery } from '../../../app/services/issues';

const IssuesPage = () => {
  const [username, setUsername] = useState('');
  const [repo, setRepo] = useState('');
  const [fetchIssues, { data: issues, isLoading, isError }] =
    useLazyGetPostsQuery();

  return (
    <div className={s.container}>
      <IssuesSearch
        username={username}
        repo={repo}
        setUsername={setUsername}
        setRepo={setRepo}
        onSubmit={() => fetchIssues({ username, repo })}
      />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Something went wrong</div>}
      <IssueList issues={issues || []} />
    </div>
  );
};

export default IssuesPage;
