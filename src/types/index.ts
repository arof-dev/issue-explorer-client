export interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  state: State;
  locked: boolean;
  assignee: User | null;
  assignees: User[];
  milestone: null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: null;
  author_association: AuthorAssociation;
  active_lock_reason: null;
  draft?: boolean;
  pull_request?: PullRequest;
  body: null | string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: null | string;
  labels: Label[];
}

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
}

export type Type = 'User';

export type AuthorAssociation =
  | 'NONE'
  | 'CONTRIBUTOR'
  | 'MEMBER'
  | 'COLLABORATOR';

export interface PullRequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  merged_at: null;
}

export interface Reactions {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export interface Label {
  name: string;
  color: string;
}

export type State = 'open';

export interface Logs {
  _id: string;
  ip: string;
  datetime: string;
  method: 'getIssues' | 'getIssuesCount' | 'getIssue';
}
