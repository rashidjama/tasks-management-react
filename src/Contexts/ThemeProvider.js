import React, { createContext, useState} from 'react'
export const ThemeContext = createContext();
export const ThemeToggleContext = createContext();
export default function ThemeProvider(props) {
  const [darkMode, setMode ] = useState(false);

  const toggleMode = _ => setMode(!darkMode)
  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemeToggleContext.Provider value={toggleMode}>
        {props.children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  )
}
