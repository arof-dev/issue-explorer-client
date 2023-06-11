export interface IssuesSearchProps {
  username: string;
  repo: string;
  setUsername: (username: string) => void;
  setRepo: (repo: string) => void;
  onSubmit: () => void;
}

const IssuesSearch = ({
  username,
  repo,
  setUsername,
  setRepo,
  onSubmit,
}: IssuesSearchProps) => {
  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input value={repo} onChange={(e) => setRepo(e.target.value)} />
      <button onClick={onSubmit}>Найти</button>
    </div>
  );
};

export default IssuesSearch;
