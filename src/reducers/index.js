import { combineReducers } from 'redux';
import SearchResultsReducer from './reducer_search_results';

const rootReducer = combineReducers({
  searchResults: SearchResultsReducer
});

export default rootReducer;
