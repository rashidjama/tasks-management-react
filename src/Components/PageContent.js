import React, { useContext } from 'react';
import {ThemeContext} from '../Contexts/ThemeProvider';


export default function PageContent(props) {
  const darkMode = useContext(ThemeContext);
  const styles = {
    width: '100vw',
    height: '100vh',
    backgroundColor: darkMode ? '#222' : '#fff'
  }
  return (
       <div style={styles}>
        {props.children}
      </div>
  )
}
