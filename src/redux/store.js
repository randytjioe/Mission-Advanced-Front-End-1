import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './slices/courseSlice';
import questionReducer from './slices/questionSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    questions: questionReducer,
    user: userReducer,
  },
});
