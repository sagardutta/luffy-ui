
import {SEARCH_TAG} from '../actions/index';

export default function (state =  {},action){
  switch(action.type){
    case SEARCH_TAG :
       console.log(action.payload.data);
       return action.payload.data;
    }
  return state;
}
