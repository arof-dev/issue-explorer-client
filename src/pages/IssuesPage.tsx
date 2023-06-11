import { useState } from 'react';
import IssuesList from '../components/IssuesList';
import IssuesSearch from '../components/IssuesSearch';
import { Issue } from '../types';
import { api } from '../utils/api';

const IssuesPage = () => {
  const [username, setUsername] = useState('');
  const [repo, setRepo] = useState('');
  const [issues, setIssues] = useState<Issue[]>([]);
  const fetchIssues = async () => {
    const { data } = await api.get(
      `/issues/${username}/${repo}?limit=10&offset=0`
    );
    setIssues(data);
  };

  return (
    <div>
      <IssuesSearch
        username={username}
        repo={repo}
        setUsername={setUsername}
        setRepo={setRepo}
        onSubmit={fetchIssues}
      />
      <IssuesList issues={issues} />
    </div>
  );
};

export default IssuesPage;
