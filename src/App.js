 // App.js
import React from 'react';
import { useDarkMode } from './component/UI/Effect/useDarkMode/useDarkMode';
import { ThemeProvider } from 'styled-components';

function App(){
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Toggle theme ={theme} toggleTheme = {toggleTheme} />
        </ThemeProvider>

    </>
  );
}

export default App;

// const App = () => {
//   const handleClick = () => {
//     alert('Button clicked!');
//   };

//   return (
//     <div className="App">
//       {/* <h1>Button Component Example</h1> */}
//       {/* <Button onClick={handleClick}>Click Me</Button> */}
//     </div>
//   );
// };

// export default App;
