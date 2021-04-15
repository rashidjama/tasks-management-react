import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {DispatchContext} from '../Contexts/TodoProvider';

export default function TodoEditForm({id, task, toggle}) {
  const [value, setValue] = useState(task);

  const dispatch = useContext(DispatchContext)

  const handleChange = e => {
    setValue(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'EDIT', id:id, updatedItem: value});
    toggle();
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        margin='normal'
        label='Edit your task...'
        fullWidth
        onChange={handleChange}
        value={value}
        autoFocus
      />
    </form>
  )
}