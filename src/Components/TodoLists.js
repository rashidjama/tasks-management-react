import React, { useContext } from 'react';
import {TodoContext} from '../Contexts/TodoProvider';
import { List } from '@material-ui/core'
import Todo from './Todo';

export default function TodoLists() {

  const tasks = useContext(TodoContext);
  return (
    <div>
      {tasks.map(task => 
       <List>
        <Todo
          id={task.id}
          task={task.task}
          completed={task.completed}
        />
       </List>
      )}
    </div>
  )
}
