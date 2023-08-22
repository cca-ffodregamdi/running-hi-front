import React from 'react';
import ReactDOM from 'react-dom';
import{ ReactComponent as checkButton } from './component/UI/atoms/Button/checkButton/checkButton.svg';

const App = () => {
  return(
  <div>
      <checkButton fill="blue"/>
  </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
