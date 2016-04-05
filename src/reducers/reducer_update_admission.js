
import {UPDATE_ADMISSION} from '../actions/index';

export default function (state={}, action){

  switch (action.type){

    case UPDATE_ADMISSION:
      //console.log(action.payload.data);
      return action.payload;
  }
      return state;
}
