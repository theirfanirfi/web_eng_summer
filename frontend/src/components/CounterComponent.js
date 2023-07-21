import React, {useState} from 'react';


const CounterComponent = (props) => {
	let {tvStatus, hardCodedValue} = props;

	const [counter, setCounter] = useState(0);

	return (
		<>
		<h1>It is a Counter Component</h1>
		<h4>TV Status: {tvStatus}  {hardCodedValue}</h4>

		<h3>Counter is: {counter}</h3>
		{tvStatus == 'on' ?

		<button onClick={() => setCounter(counter+1)}>Increment counter</button>
		:  <h1 style={{color: 'red'}}>TV is OFF. Pease turn it on.</h1>
	}
		</>
		)
}

export default CounterComponent;