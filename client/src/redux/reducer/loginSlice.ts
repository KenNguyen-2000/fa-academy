import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {},
  reducers: {
    login: (state, action) => {
      return state;
    },
  },
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;
