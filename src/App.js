import React from 'react';
import { Suspense } from 'react';
import { Routes, BrowserRouter, Route} from 'react-router-dom';
import Main from './Darkmode/components/Main';
import Sub from './Darkmode/components/Sub';
import { ThemeProvider } from './Darkmode/context/themeProvider';
import { GlobalStyle } from './Darkmode/theme/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Suspense fallback={<div>...loading</div>}>
          <Routes>
            <Route exact path="/" component={Main}/>
            <Route exact path="/sub" component={Sub}/>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;