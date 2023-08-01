import React, { useState, useEffect } from 'react';

const EffectComponent = () => {
  const [count, setCount] = useState(0);

 
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  
  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>UseEffect Example</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default EffectComponent;
