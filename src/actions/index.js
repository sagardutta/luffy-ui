
import axios from 'axios';
export const SEARCH_TAG= 'SEARCH_TAG';
export const CREATE_ADMISSION = 'CREATE_ADMISSION';
export const NEXT_PAGE='NEXT_PAGE';


//const ROOT_URL = `https://pacific-shore-18608.herokuapp.com/api`;
const ROOT_URL = `http://localhost:3000/api`;

export  function searchTag(tag){
  const url = `${ROOT_URL}?tag=${tag}&page=1&limit=1`;
  const request = axios.get(url);
    return{
      type: SEARCH_TAG,
      payload: request
    }
}

export function nextPageOfResults(term, page){
  const url = `${ROOT_URL}?tag=${term}&page=${page}&limit=1`;
  const request = axios.get(url);
    return{
      type: SEARCH_TAG,
      payload: request
    }
}

export function createAdmission(props){
  props.category = 'admission';

  props.tags = props.tags.split(",");
  const request = axios.post(`${ROOT_URL}`, props)
  console.log('inside create admission action');
  return{
    type: CREATE_ADMISSION,
    payload: request
  }

}
