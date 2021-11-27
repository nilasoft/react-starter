import { PayloadAction } from '@reduxjs/toolkit';
import store from './app.store';

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type FailureAction<P = void> = PayloadAction<P, string, void, string>;

export type AsyncStatus = 'request' | 'cancel' | 'success' | 'failure';

export interface AsyncState<T, S = AsyncStatus, E = string> {

  status?: S;

  data?: T;

  error?: E;

}
