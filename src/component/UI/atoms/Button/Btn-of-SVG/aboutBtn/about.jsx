import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <div>
       <a href="#">ABOUT</a>
    </div>
);

const root = document.getElementById('root');

const appRoot = ReactDOM.createRoot(root);
appRoot.render(<App />);