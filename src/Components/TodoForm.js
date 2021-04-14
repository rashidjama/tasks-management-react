import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {DispatchContext} from '../Contexts/TodoProvider';

export default function TodoForm() {
  const [value, setValue] = useState('');

  const dispatch = useContext(DispatchContext)

  const handleChange = e => {
    setValue(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'ADD', newTask: value})
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        margin='normal'
        label='Write your task here....'
        fullWidth
        onChange={handleChange}
        value={value}
      />
    </form>
  )
}
