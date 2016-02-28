
import axios from 'axios';
export const SEARCH_TAG= 'SEARCH_TAG';


const ROOT_URL = `http://www.mocky.io/v2/56d28b8b0f000048004bcdcd`;

export  function searchTag(tag){
  const url = `${ROOT_URL}?tag=${tag}`;
  const request = axios.get(url);
    return{
      type: SEARCH_TAG,
      payload: request
    }
}
