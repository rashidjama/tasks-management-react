import React, { useContext } from 'react';
import { AppBar, Toolbar, Switch, Typography } from '@material-ui/core'
import useStyles from '../Styles/NavStyles';
import { withStyles } from '@material-ui/core';
import { ThemeContext} from '../Contexts/ThemeProvider';
import { ThemeToggleContext } from '../Contexts/ThemeProvider';

let img = 'https://cdn2.iconfinder.com/data/icons/svg-business-icons/512/tasks-512.png'
function Navbar(props) {
  const { classes } = props;

  const darkMode = useContext(ThemeContext);
  const themeToggle = useContext(ThemeToggleContext);
  return (
    <AppBar position='static' color={darkMode ? 'default' : 'primary'}>
      <Toolbar className={classes.nav}>
        <Typography>
          <img src={img} alt='logo' style={{height: '30px', marginBottom: '10px'}}/> Daily Tasks App
        </Typography>
        <Switch onClick={themeToggle}/>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(useStyles)(Navbar)
