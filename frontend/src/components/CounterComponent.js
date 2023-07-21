import React, {useState} from 'react';


const CounterComponent = (props) => {
	let {tvStatus, mycounter, myIncrementCounterFunction, hardCodedValue} = props;

	return (
		<>
		<h1>It is a Counter Component</h1>
		<h4>TV Status: {tvStatus}  {hardCodedValue}</h4>


		{tvStatus ?

		<button onClick={()=> myIncrementCounterFunction(mycounter+1)} >Increment counter</button>
		:  <h1 style={{color: 'red'}}>TV is OFF. Pease turn it on.</h1>
	}
		</>
		)
}

export default CounterComponent;