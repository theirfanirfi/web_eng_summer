import React, {useState, useEffect} from 'react';
import Config from '../frontend_config';
import {Link} from 'react-router-dom';
const Home = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		let token = localStorage.getItem('token');
		fetch(`${Config.getBaseUrl()}user/`, {
			headers: {
				"Authorization": token
			}
		})
		.then(res => res.json())
		.then(res => {
			setUsers(res.users);
		})
	})

	return (
		<>
		<h1>Welcome Home</h1>
		<ol>

		{
			users.map((user, index) => {
				return (
				<li>
				<Link to="/">{user.email}</Link>
				</li>
				)
			})
		}


		</ol>
		</>
		)
}

export default Home;