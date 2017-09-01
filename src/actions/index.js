import axios from 'axios';
const ROOT_URL = 'http://localhost:3090';
import { AUTH_USER, AUTH_ERROR } from './types';
import { browserHistory } from 'react-router';



export function signInUser({email, password}) {

  return function (dispatch) {

    // submit email and password to server
    axios.post(`${ROOT_URL}/signin`, {email, password})
      .then(response => {

        localStorage.setItem('token', response.data.token)
        browserHistory.push('/feature')
        dispatch({ type: AUTH_USER })
      })
      .catch(() => {
        dispatch(authError('Bad login info'))

      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
