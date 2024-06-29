import React from 'react';
import TodoCard from './todoCard';

export default function TodoList(props) {
   const {todos}=props

  return (
    <div className='main'>
      {todos.map((todo, todoIndex) => (
        <TodoCard {...props} key={todoIndex} index={todoIndex}>
          <p>{todo}</p>
        </TodoCard>
      ))}
    </div>
  );
}
