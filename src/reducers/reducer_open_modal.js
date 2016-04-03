import {SELECT_ROW, CLOSE_MODAL} from '../actions/index';

export default function (state = false, action){

  switch(action.type){
    case SELECT_ROW :
      return true;

    case CLOSE_MODAL :
        return false;
  }
  return state;
}
