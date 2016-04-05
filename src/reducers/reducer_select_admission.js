
import {SELECT_ROW, UPDATE_ROW} from '../actions/index';

export default function (state={}, action){

  switch (action.type){

    case SELECT_ROW:
      //console.log(action.payload.data);
      console.log(action.payload);
      return action.payload;

      case UPDATE_ROW:
        //console.log(action.payload.data);
        console.log(action.payload);
        return action.payload;
  }
      return state;
}
