import React from 'react'

export default function TodoCard(props) {
    const  {children,deleteTodos,index,editTodos} =props
  return (
           
          <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
           <button>  
          <i className="fa-solid fa-pen-to-square" onClick={()=>{
            editTodos(index)
          }}></i>
          </button>
          <button>
          <i className="fa-solid fa-trash" onClick={()=>{
            deleteTodos(index) 
          }}></i>
          </button>



          </div>
          </li>
        
  )
}
