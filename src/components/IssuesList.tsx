import { Issue } from '../types';

export interface IssuesListProps {
  issues: Issue[];
}

const IssuesList = ({ issues }: IssuesListProps) => {
  return <div>{issues.map((issue) => `${issue.id}: ${issue.title}\n`)}</div>;
};

export default IssuesList;
