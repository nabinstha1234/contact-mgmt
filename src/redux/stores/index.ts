import { createStore } from "redux";
import { ThunkAction, Action } from '@reduxjs/toolkit';
import combineReducers from '../reducers';

export const store = createStore(combineReducers)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
