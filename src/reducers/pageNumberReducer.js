import { TOGGLE_PAGE } from '../actions/types';

export default function(state = 0, action) {
	switch (action.type) {
		case TOGGLE_PAGE:
			return action.payload;
		default:
			return state;
	}
}
