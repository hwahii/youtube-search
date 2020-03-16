import axios from 'axios';
import { FETCH_SEARCH, TOGGLE_PAGE } from './types';
export const fetchSearch = searchText => async dispatch => {
	const apiKey = 'YOUR_API_KEY';
	const res = await axios.get(
		`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchText}&key=${apiKey}&maxResults=30`
	);
	dispatch({ type: FETCH_SEARCH, payload: res.data });
	dispatch({ type: TOGGLE_PAGE, payload: 1 });
};
export const togglePage = id => dispatch => {
	dispatch({ type: TOGGLE_PAGE, payload: id });
};
