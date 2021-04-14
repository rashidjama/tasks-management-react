import React, { createContext, useState} from 'react'

export const TodoContext = createContext();

export default function TodoProvider(props) {
  const initialData = [
    {task: 'keep working hard', id:1, completed: false},
    {task: 'I hate deployment', id:2, completed: true},
    {task: 'funny is react', id:3, completed: false}
  ];

  const [tasks, setTask] = useState(initialData)
  return (
    <TodoContext.Provider value={tasks}>
      {props.children}
    </TodoContext.Provider>
  )
}
