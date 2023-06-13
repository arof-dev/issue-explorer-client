import { Link, useParams } from 'react-router-dom';
import { useGetIssueQuery } from '../../../app/services/issues';
import { Badge, Card, Container, Loading, Text } from '@nextui-org/react';
import s from './IssuePage.module.scss';

const IssuePage = () => {
  const { username, repo, number } = useParams();
  const { data: issue, isLoading } = useGetIssueQuery({
    username: username as string,
    repo: repo as string,
    number: Number(number as string),
  });

  if (!issue && !isLoading) {
    return <Text size={36}>Issue not found</Text>;
  } else if (!issue && isLoading) {
    return (
      <div className={s.container}>
        <Loading size='xl' />
      </div>
    );
  }

  if (!issue) {
    return null;
  }

  return (
    <div className={s.container}>
      <Container>
        <Card>
          <Card.Header>
            <div className={s.header}>
              <Link to={`/`}>Back</Link>
              <Text h1>
                {isLoading ? 'Loading...' : `#${issue.number}: ${issue.title}`}
              </Text>
              <Badge>{issue.state}</Badge>
              <div>
                {issue.labels.map((label) => (
                  <Badge css={{ backgroundColor: `#${label.color}` }}>
                    {label.name}
                  </Badge>
                ))}
              </div>
            </div>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            {isLoading && <Loading size='xl' />}
            {issue.body
              ?.split('\n')
              .map((row) =>
                row && row.trim() !== '' ? <Text>{row}</Text> : <br />
              )}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default IssuePage;
