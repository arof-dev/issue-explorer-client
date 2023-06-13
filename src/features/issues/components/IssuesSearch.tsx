import { Container, Card, Input, Button } from '@nextui-org/react';
import s from './IssuesSearch.module.scss';

export interface IssuesSearchProps {
  username: string;
  repo: string;
  setUsername: (username: string) => void;
  setRepo: (repo: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const IssuesSearch = ({
  username,
  repo,
  setUsername,
  setRepo,
  onSubmit,
  isLoading,
}: IssuesSearchProps) => {
  return (
    <Container sm>
      <Card>
        <Card.Body>
          <div className={s.searchForm}>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              bordered
              labelPlaceholder='GitHub Username'
            />
            <Input
              value={repo}
              onChange={(e) => setRepo(e.target.value)}
              fullWidth
              bordered
              labelPlaceholder='GutHub Repo Name'
            />
            <Button
              onClick={onSubmit}
              color='gradient'
              shadow
              className={s.button}
              disabled={isLoading || !username || !repo}
            >
              Find Issues
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default IssuesSearch;
