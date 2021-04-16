import React, { useContext, useState } from 'react';
import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import {Button, Modal} from 'react-bootstrap';
import {DispatchContext} from '../Contexts/TodoProvider';
import TodoEditForm from './TodoEditForm';
import '../Styles/Todo.css';

export default function Todo({ id, task, completed}) {
  const [isEditing, toggleEditForm] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useContext(DispatchContext);

  const toggle = _ => toggleEditForm(!isEditing);
  
  
 if(isEditing){
   return <TodoEditForm task={task} id={id} toggle={toggle}/>
 } else {
  return (
    <>
    <ListItem>
      <Checkbox className='pl-0' onClick={_=> dispatch({type: 'ToggleTodo', id:id, completed: completed})} checked={completed}/>
      <ListItemText className={completed ? 'Completed': ''}>{task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton color='primary' size="small" onClick={toggle}>
        <span>&#9997;</span>
        </IconButton>
        <IconButton className='ml-3 pr-0' size='small' color='secondary' onClick={handleShow}>
        <span>&#10005;</span>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>

    <Modal show={show} onHide={handleClose} >
        <Modal.Body className='d-flex justify-content-between align-items-center'> Delete This Task Permanently? 
          <span>
          <Button className='mr-2' variant="success" onClick={handleClose}>
            No
            </Button>
            <Button variant="danger" onClick={_=> dispatch({type: 'REMOVE', id:id})}>
            Yes
            </Button>
          </span>
        </Modal.Body>
         
      </Modal>
    </>
  )
 }
}
