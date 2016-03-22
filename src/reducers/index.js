import { combineReducers } from 'redux';
import SearchResultsReducer from './reducer_search_results';
import SelectedAdmissionReducer from './reducer_selected_admission';
import {reducer as FormReducer} from 'redux-form';

const rootReducer = combineReducers({
  searchResults: SearchResultsReducer,
  form: FormReducer,
  selectedAdmission: SelectedAdmissionReducer
});

export default rootReducer;
