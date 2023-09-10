import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import signUpPage from '../component/pages/Log/signUpPage/signUpPage';
import loginPage from '../component/pages/Log/loginPage/LoginPage';

const UserLog = () => {
    return (
      <Router>
        <Routes>
          <Route exact path="/">
          <Route exact path="/signUpPage" element={signUpPage} index />
          <Route exact path="/loginPage" element={loginPage} index />
          </Route>
        </Routes>
      </Router>
    );
  };
  
  export default UserLog;