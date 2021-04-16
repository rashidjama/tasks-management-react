import React, { useContext } from 'react';
import {TodoContext} from '../Contexts/TodoProvider';
import { List, Divider, Paper } from '@material-ui/core'
import Todo from './Todo';
import { ThemeContext } from '../Contexts/ThemeProvider'

export default function TodoLists() {

  const tasks = useContext(TodoContext);
  const darkMode = useContext(ThemeContext);

  const clearAllTasks = _ => {
    window.localStorage.removeItem('tasks');
    window.location.reload();
  }

  if(tasks.length > 0) {
    return (
      <div>
        <Paper className='mb-3'>
        {tasks.map(task =>
        <div key={task.id}>
          <List>
            <Todo
              key={task.id}
              id={task.id}
              task={task.task}
              completed={task.completed}
            />
         </List>
         <Divider/>
  
             {/* <!-- Modal --> */}
             <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body d-flex justify-content-between align-items-center">
                        Delete All Tasks Permanently?
                        <span>
                        <button type="button" className="btn btn-sm mr-2 btn-primary" data-bs-dismiss="modal">No</button>
                        <button type="button" className="btn btn-sm btn-danger" data-bs-dismiss="modal" onClick={clearAllTasks}>Yes</button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
        )}
        </Paper>
          { tasks.length > 1 ? <span className='d-flex justify-content-between align-items-center'>
            <a href='mailto:rashidjama5@gmail.com' target='blank' className={darkMode ? 'btn btn-outline-light btn-sm' : 'btn btn-outline-dark btn-sm'}>Feedback</a>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-danger btn-sm'>Delete All Tasks!</button></span> : <a href='mailto:rashidjama5@gmail.com' target='blank' className={darkMode ? 'btn btn-outline-light btn-sm' : 'btn btn-outline-dark btn-sm'}>Feedback</a>}
      </div>
    )
  }
  return null;
}
