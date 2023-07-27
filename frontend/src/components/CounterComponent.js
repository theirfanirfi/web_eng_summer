import React, {useState, useEffect} from 'react';
import Photo from './Photo';

const PHOTOS_ENDPOINT = "https://jsonplaceholder.typicode.com/photos/";
const CounterComponent = (props) => {
	let [item, setItem] = useState({});


	useEffect(()=>{

		fetch(PHOTOS_ENDPOINT+`/${props.photoId}`)
		.then(res => res.json())
		.then(res => setItem(res));

	}, [props.photoId]);

	return (
		<Photo item={item} />
		)
}

export default CounterComponent;