import React, {useState, useEffect} from 'react';
import Photo from './Photo';

const PHOTOS_ENDPOINT = "https://jsonplaceholder.typicode.com/photos";

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
	}
}
const DisplayPhotos = (props) => {
	const [photos, setPhotos] = useState([])


	useEffect(() => {
		
		fetch(PHOTOS_ENDPOINT).then(res => res.json())
		.then(res => setPhotos(res.slice(0,10)));
	}, [])


	return (
		<div className={styles.container}>
		<h1>Photos</h1>

		{
			photos.map((item, index) => {
				return <Photo item={item} />
			})
		}


		</div>

		)
}

export default DisplayPhotos
