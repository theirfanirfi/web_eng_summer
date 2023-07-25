import React, {useState} from 'react';


const CounterComponent = (props) => {
	let [counter, setCounter] = useState(0);
	

	const incrementCounter = () => {
		setCounter(counter+10);
	}

	return (
		<>
		<h1>It is a Counter Component</h1>
		<h4>Counter: {counter}</h4>

		<button onClick={()=> incrementCounter()} >Increment counter</button>
		</>
		)
}

export default CounterComponent;