import React, { createContext, useEffect, useReducer} from 'react';
import TodoReducer from '../Reducers/TodoReducer';

export const TodoContext = createContext();
export const DispatchContext = createContext();

export default function TodoProvider(props) {
  const initialData = JSON.parse(window.localStorage.getItem('tasks') || '[]');
  const [tasks, dispatch] = useReducer(TodoReducer, initialData)
  useEffect(_=> {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  return (
    <TodoContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  )
}
