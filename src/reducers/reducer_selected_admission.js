
import {EDIT_ENTRY} from '../actions/index';

export default function (state={}, action){

  switch (action.type){

    case EDIT_ENTRY:
      //console.log(action.payload.data);
      return action.payload.data;
  }
      return state;
}
