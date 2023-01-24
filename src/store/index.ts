import { configureStore } from '@reduxjs/toolkit';
import studentsListReducer from './studentsList/slice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    students: studentsListReducer,
  },
});

export default store;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type { RootState };
