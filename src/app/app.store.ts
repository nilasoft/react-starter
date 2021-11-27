import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import _ from 'lodash';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from './app.reducer';
import saga from './app.saga';

const defaultMiddleware = getDefaultMiddleware({ thunk: false });
const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer,
  middleware: _.filter([
    ...defaultMiddleware,
    sagaMiddleware,
    process.env.NODE_ENV === 'development' && logger
  ])
});

sagaMiddleware.run(saga);
