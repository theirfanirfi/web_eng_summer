import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Config from '../frontend_config';


const SignUp = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

const signup = async () => {
	const URL = `${Config.getBaseUrl()}auth/signup`;
	fetch(URL, {
		method: 'POST',
		body: JSON.stringify({
			email: email,
			password: password
		}),
		headers: {
			"Content-Type": "application/json"
		}
	})
	.then(res => res.json())
	.then(res => {
		if(res.status){
			localStorage.setItem('token', res.token);
			navigate("/home");
		}else {
			alert(res.message);
		}
	})
} 


	return (
		<>
		<h1>SignUp</h1>
		<label for="email">Email</label>
		<input type="email" onChange={(text) => setEmail(text.target.value)} id="email" placeholder="email" />
		<label for="password">password</label>
		<input type="password" 
		onChange={(text) => setPassword(text.target.value)}
		 id="password" placeholder="password" />
		<button onClick={()=> signup()}>SignUp</button>

				<Link to="/">
Already have an Account? Login 
		</Link>
		</>

		)
}


export default SignUp;