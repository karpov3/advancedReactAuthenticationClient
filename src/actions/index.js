import axios from 'axios';
const ROOT_URL = 'http://localhost:3090';
import * as ActionTypes from './types';




export function signInUser({email, password}) {

  return function (dispatch) {

    // submit email and password to server
    axios.post(`${ROOT_URL}/signin`, {email, password});


  }
}
