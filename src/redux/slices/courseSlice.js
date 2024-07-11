import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCourses } from '../../services/api/courseApi';

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const response = await getCourses();
    return response.data;
  }
);

const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default courseSlice.reducer;