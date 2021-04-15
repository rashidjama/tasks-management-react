import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {DispatchContext} from '../Contexts/TodoProvider';
import { ThemeContext } from '../Contexts/ThemeProvider';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  textField: {
    border: '2px sold red'
  }
}))
function TodoForm() {
  const classes = useStyles();
  
  const [value, setValue] = useState('');

  const dispatch = useContext(DispatchContext);
  const darkMode = useContext(ThemeContext);

  const handleChange = e => {
    setValue(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'ADD', newTask: value});
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        margin='normal'
        label='Write your task here....'
        fullWidth
        onChange={handleChange}
        value={value}
        variant='outlined'
        className={classes.textField}
      />
    </form>
  )
}
export default TodoForm;
