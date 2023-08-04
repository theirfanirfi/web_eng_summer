import { createSlice } from '@reduxjs/toolkit'
import Config from './frontend_config';

export const userSlice = createSlice({
	name: 'users',
	initialState: {
		users: 0
	},

	reducers: {
		incrementUser: (state) => {
			state.users +=1
		},

		decrementUser: (state) => {
			state.users -=1
		},

		incrementByNumber: (state, action) => {
			console.log(action);
			state.users += action.payload
		}

	},
})

export const {incrementUser, decrementUser, incrementByNumber} = userSlice.actions;
export default userSlice.reducer;

