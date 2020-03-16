import { combineReducers } from 'redux';
import contentReducer from './contentReducer';
import pageNumberReducer from './pageNumberReducer';

export default combineReducers({
	content: contentReducer,
	pageNum: pageNumberReducer
});
