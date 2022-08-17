import './App.css';
import P from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';

const Button = React.memo(({ incrementButton }) => {
  console.log('filho renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>
});

Button.propTypes = {
  incrementButton: P.func,
}


function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((counter) => counter + num); 
  },[]);

  console.log('pai renderizou!');
  return (
    <div className='App'>
      <h1>Contador 1: {counter}</h1>
      <Button incrementButton={incrementCounter}>+</Button>
    </div> 
  )
}

export default App;
