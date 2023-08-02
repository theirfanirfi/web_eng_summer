import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Config from '../frontend_config';


const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigation = useNavigate();


const login = () => {

	let URL = `${Config.getBaseUrl()}auth/login`;
	fetch(URL, {
		method: 'POST',
		body: JSON.stringify({email: email, password: password}),
		headers: {
			"Content-Type": "application/json"
		}
	})
	.then(res => res.json())
	.then(res => {
		if(res.status){
			localStorage.setItem('token', res.token);
			navigation("/home");
		}else {
			alert(res.message);
		}
		console.log(res);
	})

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
		<button onClick={()=> login()}>Login</button>

		<Link to="/signup">
Don't have an Account? SignUp 
		</Link>
		</>

		)
}


export default Login;