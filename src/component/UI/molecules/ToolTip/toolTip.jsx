import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <a href="#">HOME</a>
  </div>
);

const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 이전 방식으로 렌더링
// ReactDOM.render(rootElement, root);

// React 18에서는 createRoot를 사용하여 렌더링
const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(rootElement);