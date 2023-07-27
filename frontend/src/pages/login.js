import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';


const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


const login = async () => {

} 

	return (
		<>
		<h1>Login</h1>
		<label for="email">Email</label>
		<input type="email" onChange={(text) => setEmail(text.target.value)} id="email" placeholder="email" />
		<label for="password">password</label>
		<input type="password" 
		onChange={(text) => setPassword(text.target.value)}
		 id="password" placeholder="password" />
		<button>Login</button>

		<Link to="/signup">
Don't have an Account? SignUp 
		</Link>
		</>

		)
}


export default Login;