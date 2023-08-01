import React, { useState } from 'react';
import './App.css';
import Effect from './Effect.js';

const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [buttonColor, setButtonColor] = useState('blue'); 

  const handleClick = () => {
    setIsClicked(!isClicked);

    
    if (isClicked) {
      setButtonColor('blue'); 
    } else {
      setButtonColor('green');
    }
  };

  return (
    <div className="app-container" style={{ backgroundColor: isClicked ? 'lightblue' : 'yellow' }}>
      <h1>Color Changing App</h1>
      <button
        className={isClicked ? 'clicked-button' : 'default-button'}
        style={{ backgroundColor: buttonColor }} 
        onClick={handleClick}
      >
        {isClicked ? 'Clicked!' : 'Click Me'}
      </button>
      <Effect/>
    </div>
  );
};

export default App;
