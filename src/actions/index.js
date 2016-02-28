
import axios from 'axios';
export const SEARCH_TAG= 'SEARCH_TAG';


const ROOT_URL = `http://pacific-shore-18608.herokuapp.com/api`;

export  function searchTag(tag){
  const url = `${ROOT_URL}?tag=${tag}`;
  const request = axios.get(url);
    return{
      type: SEARCH_TAG,
      payload: request
    }
}
