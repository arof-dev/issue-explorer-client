import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IssuesState {
  username: string;
  repo: string;
  page: number;
}

const initialState: IssuesState = {
  username: '',
  repo: '',
  page: 1,
};

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setRepo: (state, action: PayloadAction<string>) => {
      state.repo = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setUsername, setRepo, setPage } = issuesSlice.actions;

export default issuesSlice.reducer;
