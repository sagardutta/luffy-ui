import { combineReducers } from 'redux';
import SearchResultsReducer from './reducer_search_results';
import SelectedAdmissionReducer from './reducer_selected_admission';
import SelectAdmissionReducer from './reducer_select_admission';
import OpenModalReducer from './reducer_open_modal';
import {reducer as FormReducer} from 'redux-form';

const rootReducer = combineReducers({
  searchResults: SearchResultsReducer,
  form: FormReducer,
  selectedAdmission: SelectedAdmissionReducer,
  selectedRow : SelectAdmissionReducer,
  isModalOpen : OpenModalReducer
});

export default rootReducer;
