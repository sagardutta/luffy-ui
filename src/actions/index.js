
import axios from 'axios';
export const SEARCH_TAG= 'SEARCH_TAG';
export const CREATE_ADMISSION = 'CREATE_ADMISSION';
export const NEXT_PAGE='NEXT_PAGE';
export const EDIT_ENTRY='EDIT_ENTRY';

const PAGE_SIZE = 10;
//const ROOT_URL = `https://pacific-shore-18608.herokuapp.com/api`;
const ROOT_URL = `http://localhost:3000/api`;

export  function searchTag(tag){
  const url = `${ROOT_URL}?tag=${tag}&page=1&limit=${PAGE_SIZE}`;
  const request = axios.get(url);
    return{
      type: SEARCH_TAG,
      payload: request
    }
}

export function nextPageOfResults(term, page){
  const url = `${ROOT_URL}?tag=${term}&page=${page}&limit=${PAGE_SIZE}`;
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

export function editEntry(id){
  const request = axios.get(`${ROOT_URL}/${id}`)
  return{
    type:EDIT_ENTRY,
    payload: request
  }
}
