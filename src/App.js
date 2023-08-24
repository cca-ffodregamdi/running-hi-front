//App.js

import React from 'react';
import { useDarkMode } from './component/UI/Effect/useDarkMode/useDarkMode';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes'; 
import GlobalStyles from './GlobalStyles'; 
import Toggle from './Toggle';

function App(){
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles /> 
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
