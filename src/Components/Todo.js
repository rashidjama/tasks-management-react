import React, { useContext, useState } from 'react';
import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import {DispatchContext} from '../Contexts/TodoProvider'
import TodoEditForm from './TodoEditForm';

export default function Todo({ id, task, completed}) {
  const [isEditing, toggleEditForm] = useState(false);
  const dispatch = useContext(DispatchContext);

  const toggle = _ => toggleEditForm(!isEditing);
 if(isEditing){
   return <TodoEditForm task={task} id={id} toggle={toggle}/>
 } else {
  return (
    <ListItem>
      <Checkbox checked={completed}/>
      <ListItemText>{task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton color='primary' onClick={toggle}>
        <span>&#9997;</span>
        </IconButton>
        <IconButton size='small' color='secondary' onClick={_=> dispatch({type: 'REMOVE', id:id})}>
        <span>&#10005;</span>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
 }
}
