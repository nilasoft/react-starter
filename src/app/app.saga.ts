import { SagaIterator } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import todos from '../todos/todos.saga';

export default function* (): SagaIterator {
  yield fork(todos);
}
