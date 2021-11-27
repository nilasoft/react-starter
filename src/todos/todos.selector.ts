import _ from 'lodash';
import { AppState } from '../app/app.model';

export const selectTodos = (state: AppState) => state.todos;

export const selectTodo = (id: string) => (state: AppState) => _.find(state.todos, ['id', id]);
