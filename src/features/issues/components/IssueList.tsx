import { Link } from 'react-router-dom';
import { Issue } from '../../../types';
import s from './IssueList.module.scss';
import { Card, Container, Grid, Text, User } from '@nextui-org/react';

export interface IssueListProps {
  issues: Issue[];
  username: string;
  repo: string;
}

const IssueList = ({ issues, username, repo }: IssueListProps) => {
  return (
    <Container md>
      <Grid.Container gap={2}>
        {issues.map((issue) => (
          <Grid key={issue.id} xs={12}>
            <Card>
              <Card.Body>
                <div className={s.issueContainer}>
                  <Link
                    to={`/issues/${username}/${repo}/${issue.number}`}
                  >{`#${issue.number}: ${issue.title}`}</Link>
                  <div className={s.issueAdditional}>
                    <User src={issue.user.avatar_url} name={issue.user.login} />
                    <Text>
                      opened {new Date(issue.created_at).toLocaleString()}
                    </Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default IssueList;
