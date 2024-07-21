import React from 'react'
import { memo } from 'react'
const Todos = ({ todos, addTodo }) => {
  return (
    <>
      <h2>My Todos</h2>
      {
        todos.map((todo, index) => {
          return <p key={index}> {todo}</p>

        })
      }
      <button onClick={()=> addTodo(8)}>Add Todo</button>

    </>
  )
}

export default memo(Todos); 