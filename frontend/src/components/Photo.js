import React from 'react';

const Photo = (props) => {
	const [item, setItem] = useState(false);
	let {item} = props
	return (
			
		<div className="item">
		<img src={item.url} style={{width: 200, height: 200}} />
		<h3>{item.title}</h3>
		</div>
				
		)
}

export default Photo;