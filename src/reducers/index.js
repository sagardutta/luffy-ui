import { combineReducers } from 'redux';
import SearchResultsReducer from './reducer_search_results';
import {reducer as FormReducer} from 'redux-form';

const rootReducer = combineReducers({
  searchResults: SearchResultsReducer,
  form: FormReducer
});

export default rootReducer;
