import React, { createContext, useState} from 'react'

export const TodoContext = createContext();

export default function TodoProvider(props) {
  const initialData = [
    {task: 'keep working hard', id:1, completed: false},
    {task: 'keep working hard', id:2, completed: true}
  ];

  const [tasks, setTask] = useState(initialData)
  return (
    <TodoContext.Provider value={tasks}>
      {props.children}
    </TodoContext.Provider>
  )
}
