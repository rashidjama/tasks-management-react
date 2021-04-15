import React from 'react'
import Navbar from './Navbar';
import { Grid } from '@material-ui/core';
import TodoProvider from '../Contexts/TodoProvider'
import TodoLists from './TodoLists';
import TodoForm from './TodoForm';
import PageContent from './PageContent';

export default function TodoApp() {
 
  return (
    <TodoProvider>
      <Navbar />
      <PageContent>
        <Grid
        container
        justify='center'
        >
          <Grid  className='mt-4' item sm={11} xs={11} md={8} lg={6}>
            <TodoForm />
              <TodoLists />
          </Grid>
        </Grid>
      </PageContent>
    </TodoProvider>
  )
}
