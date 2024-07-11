import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout } from '../../services/api/authApi';

export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials) => {
    const response = await login(credentials);
    return response.data;
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async () => {
    await logout();
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.currentUser = null;
      });
  },
});

export default userSlice.reducer;