import React, { useState } from 'react'

export default function TodoInput(props) {
  const {addTodos,todoValues,setTodoValues}=props;
  
  return (
    <header>
      <input  value={todoValues} onChange={(e)=>{
        setTodoValues(e.target.value)
      }}  placeholder="Enter Items..." />
      <button onClick={()=>{
        addTodos(todoValues)
        setTodoValues('')
      }}>Add</button>
    </header>
  )
}
