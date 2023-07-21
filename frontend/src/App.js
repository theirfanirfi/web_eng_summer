import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';

import CounterComponent from './components/CounterComponent';

const App = () => {
  const [tvStatus, setTvStatus] = useState(false);
  const [counter, setCounter] = useState(0);


  const incrementCounter = (value) => {
   console.log('vlaue is ', value);
    setCounter(value);
  }

  return (
    <>
    {console.log('tv status ', tvStatus)}

    <h1>Parent Componet</h1>
    <button onClick={() => setTvStatus(!tvStatus)}>Change TV Status: {tvStatus ? 'off' : 'on' }</button>

    <CounterComponent tvStatus={tvStatus}
    mycounter={counter}
    myIncrementCounterFunction={incrementCounter}
     hardCodedValue='@@@@@@@@@' />

        <h3>Counter is: {counter}</h3>
    
    
    </>
    )
}


export default App;
