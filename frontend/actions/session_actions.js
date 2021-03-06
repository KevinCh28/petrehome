import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

const receiveCurrentUser = payload => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload,
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  }
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  }
}

export const removeErrors = () => {
  return {
    type: REMOVE_SESSION_ERRORS,
  }
}

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      err => dispatch(receiveErrors(err.responseJSON))
      )
)

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()) )
)

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then( 
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
)

export const fetchUser = (userId) => dispatch => (
  APIUtil.fetchUser(userId)
    .then(
      (payload) => dispatch(receiveCurrentUser(payload)),
      err => dispatch(receiveErrors(err.responseJSON))
      )
)