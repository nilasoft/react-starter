import { createAction, PrepareAction } from '@reduxjs/toolkit';
import faker from 'faker';
import { Todo } from './todos.model';

export const todosAdd = createAction<PrepareAction<Todo>>(
  'todos/add',
  (todo: Partial<Todo>) => ({
    payload: {
      id: faker.random.uuid(),
      title: todo.title,
      body: todo.body,
      complete: {
        status: 'success',
        data: false
      }
    }
  })
);

export const todosToggleRequest = createAction<string>('todos/toggle/request');

export const todosToggleSuccess = createAction<string>('todos/toggle/success');

export const todosRemove = createAction<string>('todos/remove');
