import React, {useState, useEffect} from 'react';
import Config from '../frontend_config';
import {Link} from 'react-router-dom';
import {fetchUsers} from '../userReducerSlice';

import { useSelector, useDispatch } from 'react-redux'



const Home = () => {
const users = useSelector((state) => state.users.users);

const dispatch = useDispatch();

	return (
		<>
		<h1>HomePage</h1>
		<ol>
		{users.map((user, index) => {
			console.log(user);
			return <li>{user.email}</li>
		})}
		</ol>

		<button onClick={()=> dispatch(fetchUsers())}>Click me</button>
		</>
		)
}

export default Home;