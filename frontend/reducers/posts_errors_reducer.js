import { RECEIVE_CREATE_POST, RECEIVE_POST_ERRORS, REMOVE_POST_ERRORS } from "../actions/post_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CREATE_POST:
      return [];
    case RECEIVE_POST_ERRORS:
      debugger
      return action.errors;
    case REMOVE_POST_ERRORS:
      return [];
    default:
      return state;
  }
}

export default sessionErrorsReducer;