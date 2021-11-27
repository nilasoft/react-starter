import { DeleteFilled, LoadingOutlined } from '@ant-design/icons';
import { Button, Checkbox, message } from 'antd';
import cn from 'classnames';
import faker from 'faker';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todosAdd, todosRemove, todosToggleRequest } from './todos.action';
import { selectTodo, selectTodos } from './todos.selector';

export default function Todos(): ReactElement {

  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  function onAdd(): void {
    if (todos.length >= 5)
      message.warn('Reached max!')
    else
      dispatch(todosAdd({
        title: faker.name.title(),
        body: faker.lorem.paragraph()
      }));
  }

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} />
      ))}
      <Button type='primary' onClick={onAdd} block>Add</Button>
    </div>
  );

}

function TodoItem({ id }: { id: string }): ReactElement {

  const dispatch = useDispatch();
  const { title, body, complete } = useSelector(selectTodo(id));

  function onToggle(): void {
    dispatch(todosToggleRequest(id));
  }

  function onRemove(): void {
    dispatch(todosRemove(id));
  }

  return (
    <div className='flex items-center'>
      <div className='w-8 h-8 flex-none flex items-center justify-center'>
        {complete.status === 'request' ? (
          <LoadingOutlined className='text-lg' spin />
        ) : (
            <Checkbox checked={complete.data} onChange={onToggle} />
          )}
      </div>
      <div className='flex-1 mx-2 overflow-x-hidden'>
        <h3 className={cn({ 'line-through': complete.data })}>{title}</h3>
        <p className='truncate'>{body}</p>
      </div>
      <Button shape='circle' icon={<DeleteFilled />} onClick={onRemove} danger />
    </div>
  );

}
