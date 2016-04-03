
import axios from 'axios';
export const SEARCH_TAG= 'SEARCH_TAG';
export const CREATE_ADMISSION = 'CREATE_ADMISSION';
export const NEXT_PAGE='NEXT_PAGE';
export const EDIT_ENTRY='EDIT_ENTRY';
export const UPDATE_ADMISSION = 'UPDATE_ADMISSION';
export const DELETE_ADMISSION = 'DELETE_ADMISSION';
export const SELECT_ROW = 'SELECT_ROW';
export const CLOSE_MODAL = 'CLOSE_MODAL';

const PAGE_SIZE = 10;
 const ROOT_URL = `https://pacific-shore-18608.herokuapp.com/api`;

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
  console.log(props);
  //props.tags = props.tags.split(",");
  const request = axios.post(`${ROOT_URL}`, props)
  console.log('inside create admission action');
  return{
    type: CREATE_ADMISSION,
    payload: request
  }

}

export function updateAdmission(id,props){
  props.category = 'admission';


  const request = axios.put(`${ROOT_URL}/${id}`, props)
  console.log('inside update admission action');
  return{
    type: UPDATE_ADMISSION,
    payload: request
  }

}

export function deleteAdmission(id){

  const request = axios.delete(`${ROOT_URL}/${id}`)
  console.log('inside delete admission action');
  return{
    type: DELETE_ADMISSION,
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

export function selectRow(result){
  return{
    type: SELECT_ROW,
    payload: result
  };
}

export function closeModal(){
  return{
    type: CLOSE_MODAL,
    payload: false
  };
}
