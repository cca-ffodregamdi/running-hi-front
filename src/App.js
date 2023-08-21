 // App.js
import React from 'react';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <h1>Button Component Example</h1>
      {/* <Button onClick={handleClick}>Click Me</Button> */}
    </div>
  );
};

export default App;
