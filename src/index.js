import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
// import reportWebVitals from './reportWebVitals';
import DarkOrLight from './component/UI/Effect/ThemeContext/DarkOrLight';

// import CommentList from './component/pages/Post/comment/commentList';

ReactDOM.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>,
  document.getElementById('root')  
);

// reportWebVitals();