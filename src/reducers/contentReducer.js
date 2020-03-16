import { FETCH_SEARCH } from '../actions/types';

export default function(state = {}, action) {
	console.log('contentReducer: action', action);
	switch (action.type) {
		case FETCH_SEARCH:
			return action.payload || false;
		default:
			return state;
	}
}
