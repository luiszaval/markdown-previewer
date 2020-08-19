import {USER_INPUT} from './constants.js';


export const changeInput = (input)=>({
	type: USER_INPUT,
	input,
})