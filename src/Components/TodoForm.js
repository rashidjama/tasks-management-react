import React, { useContext, useState } from 'react';
import {DispatchContext} from '../Contexts/TodoProvider';
import { ThemeContext } from '../Contexts/ThemeProvider';
import { Snackbar} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';


function TodoForm() {
  
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  const dispatch = useContext(DispatchContext);
  const darkMode = useContext(ThemeContext);

  const handleChange = e => {
    setValue(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    if(value.length > 30) {
      setOpen(true);
    } else {
      dispatch({type: 'ADD', newTask: value});
      setValue('')
    }
  }

  const handleClose = _=> setOpen(false);

  return (
   <>
     <form onSubmit={handleSubmit} className='input-group mb-2'>
        <input
        placeholder='Write your task here....'
        onChange={handleChange}
        value={value}
        className='form-control'
        required
      />
      <button className={darkMode ? 'btn btn-outline-light ml-1' : 'btn btn-outline-dark ml-1'}>Add Task</button>
    </form>

    <Snackbar open={open} autoHideDuration={4000} onClose=      {handleClose}
    anchorOrigin={{ vertical: 'top', horizontal:'right' }}
    >
      <Alert onClose={handleClose} severity="warning">
        Input Must be 30 characters or less!
      </Alert>
    </Snackbar>
   </>
  )
}
export default TodoForm;
