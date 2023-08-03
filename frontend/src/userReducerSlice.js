import { createSlice } from '@reduxjs/toolkit'
import Config from './frontend_config';

export const userSlice = createSlice({
	name: 'userSlice',
	initialState: {
		users: []
	},

	reducers: {
		fetchUsers: (state) => {
	
			console.log('fetchUsers');
			// state = {users: [{id: 1}]}
			console.log(state.users);
			let API_ENDPOINT = `${Config.getBaseUrl()}user/`;
			fetch(API_ENDPOINT, {
				headers:{
					"Content-Type": "application/json",
					"Authorization": ""
				}
			}).then(res => res.json())
			.then(res => {
				state = {...state , users: res.users};
				console.log(state);
				// return state;
			})
		},
	},
})

export const {fetchUsers} = userSlice.actions;
export default userSlice.reducer;

