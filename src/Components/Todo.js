import React from 'react';
import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@material-ui/core';

export default function Todo({ id, task, completed}) {
  return (
    <ListItem>
      <Checkbox checked={completed}/>
      <ListItemText>{task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton size='small'>
          <span>Edit</span>
        </IconButton>
        <IconButton size='small'>
        <span>Del</span>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
