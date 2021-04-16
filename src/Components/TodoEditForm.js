import React, { useContext, useState } from 'react';
import {DispatchContext} from '../Contexts/TodoProvider';
import { Snackbar} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

export default function TodoEditForm({id, task, toggle}) {
  const [value, setValue] = useState(task);
  const [open, setOpen] = useState(false);

  const dispatch = useContext(DispatchContext)

  const handleChange = e => {
    setValue(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    if(value.length > 30) {
      setOpen(true)
    } else {
      dispatch({type: 'EDIT', id:id, updatedItem: value});
    toggle();
    }
  }

  const handleClose = _=> setOpen(false);

  return (
    <>
      <form onSubmit={handleSubmit} className='input-group'>
        <input
          onChange={handleChange}
          value={value}
          autoFocus
          className='form-control'
        />
        <button className='btn btn-sm btn-success ml-1'>Save</button>
        <button type='button' className='btn btn-sm mx-1 btn-danger' onClick={toggle}>Cancel</button>
     </form>
     <Snackbar open={open} autoHideDuration={4000} onClose=      {handleClose}
    anchorOrigin={{ vertical: 'top', horizontal:'right' }}
    >
      <Alert onClose={handleClose} severity="warning">
        Input must be 30 characters or less!
      </Alert>
    </Snackbar>
    </>
  )
}