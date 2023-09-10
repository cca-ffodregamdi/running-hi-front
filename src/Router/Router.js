import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import signUpPage from './src/component/pages/Log/signUpPage/signUpPage';
import loginPage from './src/component/pages/Log/loginPage/loginPage';

const AppRouter = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/signUpPage" component={signUpPage} />
          <Route exact path="/loginPage" component={loginPage} />
        </Switch>
      </Router>
    );
  };
  
  export default AppRouter;