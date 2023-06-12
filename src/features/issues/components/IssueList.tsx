import { Link } from 'react-router-dom';
import { Issue } from '../../../types';
import s from './IssueList.module.scss';

export interface IssueListProps {
  issues: Issue[];
}

const IssueList = ({ issues }: IssueListProps) => {
  return (
    <ul className={s.issueList}>
      {issues.map((issue) => (
        <li key={issue.id} className={s.issueListItem}>
          <div className={s.issueMain}>
            <img
              src={issue.user.avatar_url}
              alt={issue.user.login}
              className={s.userAvatar}
            />
            <Link to={`/issues/${issue.number}`}>{issue.title}</Link>
          </div>
          <span className={s.issueAdditional}>
            #{issue.number} opened{' '}
            {new Date(issue.created_at).toLocaleDateString()} by{' '}
            {issue.user.login}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default IssueList;
