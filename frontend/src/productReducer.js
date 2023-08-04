import {createSlice} from '@reduxjs/toolkit'
export const productReducer = createSlice({
	name: 'productReducer',
	initialState: {
		products: [

			{id: 1, name: 'Markers'},
			{id: 2, name: 'mobile'},
			{id: 3, name: 'Projector'},
			{id: 4, name: 'Laptop'},
			{id: 5, name: 'Duster'},
			{id: 6, name: 'WhiteBoard'},
			]
	},

	reducers: {
		addProduct: (state, action) => {
			let obj = {id: state.products.length, name: action.payload}

			state.products = [...state.products, obj ];
		},
		getProductById: (state, action) => {
			return state.products.find(product => product.id == action.payload)
		},
		deleteProductByIndex: (state, action) => {
			state.products.splice(action.payload,1);
		}
	}
});

export const {addProduct, getProductById, deleteProductByIndex} = productReducer.actions
export default productReducer.reducer;