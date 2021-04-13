import React from 'react';
import { AppBar, Toolbar, Switch, Typography } from '@material-ui/core'
import useStyles from '../Styles/NavStyles';
import { withStyles } from '@material-ui/core';


function Navbar(props) {
  const { classes } = props;
  return (
    <AppBar position='static'>
      <Toolbar className={classes.nav}>
        <Typography>
          Daily Tasks App
        </Typography>
        <Switch />
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(useStyles)(Navbar)
