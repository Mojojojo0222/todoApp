import TodoList from "./component/todoList";
import TodoInput from "./component/todoInput"
import { useEffect, useState } from "react";

function App() {
    const [todos,setTodos]=useState([]);
    const [todoValues,setTodoValues]=useState('')

    function persistData(newlist){
      localStorage.setItem('todos',JSON.stringify({todos:newlist}))
    }
    function addTodos(newTodos){
      const newTodoList=[...todos,newTodos]
      persistData(newTodoList);
      setTodos(newTodoList);
    }
    function deleteTodos(index){
      const newTodoList=todos.filter((todo,todoIndex)=>{
        return todoIndex!==index;
      })
      persistData(newTodoList);
      setTodos(newTodoList);
    }
    
    function editTodos(index){
      const editTodoValue=todos[index];
      setTodoValues(editTodoValue);
      persistData(newTodoList);
      deleteTodos(index);
    }
    useEffect(()=>{
      if(!localStorage){
        return
      }
      let localTodos=localStorage.getItem('todos')
      if(!localTodos){
        return
      }
      localTodos=JSON.parse(localTodos).todos
      setTodos(localTodos)
    },[])
  return (
    
    <>
      <TodoInput todoValues={todoValues} setTodoValues={setTodoValues} addTodos={addTodos} />
      <TodoList editTodos={editTodos} deleteTodos={deleteTodos} todos={todos}/>
      </>
    
  )
}

export default App
