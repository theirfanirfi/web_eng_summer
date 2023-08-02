import React, {useState, useEffect} from 'react';
import Config from '../frontend_config';
import {Link, useParams} from 'react-router-dom';
const SingleUser = () => {
	const [user, setUser] = useState({});

	let {id} = useParams();
	console.log('param ',id)

	useEffect(() => {
		let token = localStorage.getItem('token');
		fetch(`${Config.getBaseUrl()}user/${id}`, {
			headers: {
				"Authorization": token
			}
		})
		.then(res => res.json())
		.then(res => {
			if(res.status){
				console.log(res.user);
			setUser(res.user);
		}
		})
	}, [id])

	return (
		<>
		<h1>Single User Display Page</h1>
		<h2>Id: {user._id}</h2>
		<h2>Email: {user.email}</h2>
		<h2>Password: {user.password}</h2>
		<h2>Age: {user.age}</h2>
		</>
		)
}

export default SingleUser;