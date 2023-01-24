import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from './initialState';
import { TStudentsList } from './types';

const studentsListSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    updateStudentsList: (state, action: PayloadAction<TStudentsList[] | null>) => {
      state.students = action.payload;
    },
  },
});

export const { updateStudentsList } = studentsListSlice.actions;
export default studentsListSlice.reducer;
