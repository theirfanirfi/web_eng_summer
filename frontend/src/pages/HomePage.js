import React, {useState, useEffect} from 'react';
import Config from '../frontend_config';
import {Link} from 'react-router-dom';
import {incrementUser, decrementUser, incrementByNumber} from '../userReducerSlice';
import {addProduct, getProductById, deleteProductByIndex} from '../productReducer';

import { useSelector, useDispatch } from 'react-redux'



const Home = (props) => {
const products = useSelector((state) => state.products.products);
const [pname, setPname] = useState('');

useEffect(()=>{

},[props]);

const dispatch = useDispatch();

	return (
		<>
		<h1>HomePage</h1>
		<input type="text" placeholder="Product Name" 
		value={pname}
		onChange={(text) => setPname(text.target.value)} 
		/>
		<button onClick={() => {
			dispatch(addProduct(pname));
			setPname('');
		}}>Add</button>

		<ol>
		{
			products.map((p, index) => {
				return <li>{p.name}  <button onClick={() => 
				dispatch(deleteProductByIndex(index))
			}>Delete</button></li>
			})
		}
		</ol>

		</>
		)
}

export default Home;