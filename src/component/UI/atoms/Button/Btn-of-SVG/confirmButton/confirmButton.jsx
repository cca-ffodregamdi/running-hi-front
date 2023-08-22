import React from 'react';
import ReactDOM from 'react-dom';
import{ ReactComponent as confirmButton } from './component/UI/atoms/Button/confirmButton/confirmButton.svg';

const App = () => {
  return(
  <div>
      <confirmButton fill="blue"/>
  </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
