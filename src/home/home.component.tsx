import React, { ReactElement, useEffect, useState } from 'react';
import Todos from '../todos/todos.component';
import { Card } from 'antd';

export default function Home(): ReactElement {

  return (
    <div className='h-full flex items-center justify-center overflow-y-auto'>
      <Card className='w-1/2'>
        <Counter />
        <Todos />
      </Card>
    </div>
  );

}

function Counter(): ReactElement {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className='text-center'>{counter}</h1>
  );

}
