import React from 'react'
import Navbar from './Navbar';
import { Paper, Grid } from '@material-ui/core';
import TodoProvider from '../Contexts/TodoProvider'
import TodoLists from './TodoLists';

export default function TodoApp() {
  return (
    <TodoProvider>
      <Navbar />
        <Grid
        container
        justify='center'
        >
          <Grid item sm={11} xs={11} md={8} lg={6}>
            <Paper className='mt-5 p-3'>
              <TodoLists />
            </Paper>
          </Grid>
        </Grid>
    </TodoProvider>
  )
}
