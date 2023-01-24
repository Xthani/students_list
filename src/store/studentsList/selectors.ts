import { RootState } from '../index';

export const selectStudents = (state: RootState) => state.students.students;
