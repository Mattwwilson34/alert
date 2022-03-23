import './App.css';
import React, { useState, useEffect } from 'react';
import Alert from '../Alert/Alert';

const App = () => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClicked(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [clicked]);

  const handleClick = () => setClicked(true);

  return (
    <div>
      <button onClick={handleClick} setClicked={setClicked}>
        Click for message
      </button>
      {clicked && <Alert />}
    </div>
  );
};

export default App;
