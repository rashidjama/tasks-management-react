import React, { createContext, useReducer} from 'react';
import TodoReducer from '../Reducers/TodoReducer';

export const TodoContext = createContext();
export const DispatchContext = createContext();

export default function TodoProvider(props) {
  const initialData = [
    {task: 'keep working hard', id:1, completed: false},
    {task: 'I hate deployment', id:2, completed: true},
    {task: 'funny is react', id:3, completed: false}
  ];

  const [tasks, dispatch] = useReducer(TodoReducer, initialData)
  return (
    <TodoContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  )
}
