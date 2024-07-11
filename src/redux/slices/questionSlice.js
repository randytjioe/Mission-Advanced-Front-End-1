import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getQuestions, createAnswer, voteAnswer } from '../../services/api/qaApi';

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async (courseId) => {
    const response = await getQuestions(courseId);
    return response.data;
  }
);

export const addAnswer = createAsyncThunk(
  'questions/addAnswer',
  async ({ questionId, content }) => {
    const response = await createAnswer(questionId, content);
    return response.data;
  }
);

export const vote = createAsyncThunk(
  'questions/vote',
  async ({ answerId, voteType }) => {
    const response = await voteAnswer(answerId, voteType);
    return response.data;
  }
);

const questionSlice = createSlice({
  name: 'questions',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addAnswer.fulfilled, (state, action) => {
        const questionIndex = state.items.findIndex(q => q.id === action.payload.questionId);
        if (questionIndex !== -1) {
          state.items[questionIndex].answers.push(action.payload);
        }
      })
      .addCase(vote.fulfilled, (state, action) => {
        const { questionId, answerId } = action.payload;
        const questionIndex = state.items.findIndex(q => q.id === questionId);
        if (questionIndex !== -1) {
          const answerIndex = state.items[questionIndex].answers.findIndex(a => a.id === answerId);
          if (answerIndex !== -1) {
            state.items[questionIndex].answers[answerIndex] = action.payload;
          }
        }
      });
  },
});

export default questionSlice.reducer;