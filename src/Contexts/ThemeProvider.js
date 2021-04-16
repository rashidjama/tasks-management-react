import React, { createContext, useEffect, useState} from 'react'
export const ThemeContext = createContext();
export const ThemeToggleContext = createContext();

export default function ThemeProvider(props) {
  const initialBool = JSON.parse(window.localStorage.getItem('darkMode') || false);
  const [darkMode, setMode ] = useState(initialBool);

  const toggleMode = _ => setMode(!darkMode);
  useEffect(_=> {
    window.localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [ darkMode ])
  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemeToggleContext.Provider value={toggleMode}>
        {props.children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  )
}
