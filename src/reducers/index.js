import { combineReducers } from 'redux';
import SearchResultsReducer from './reducer_search_results';
import SelectAdmissionReducer from './reducer_select_admission';
import OpenModalReducer from './reducer_open_modal';
import {reducer as FormReducer} from 'redux-form';

const rootReducer = combineReducers({
  searchResults: SearchResultsReducer,
  form: FormReducer,
  selectedRow : SelectAdmissionReducer,
  isModalOpen : OpenModalReducer
});

export default rootReducer;
