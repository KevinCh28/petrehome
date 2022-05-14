import { RECEIVE_POST, RECEIVE_POST_ERRORS, REMOVE_POST_ERRORS } from "../actions/post_actions";

const postErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POST:
      return [];
    case RECEIVE_POST_ERRORS:
      if (action.errors) {
        return action.errors;
      } else {
        return [];
      }
    case REMOVE_POST_ERRORS:
      return [];
    default:
      return state;
  }
}

export default postErrorsReducer;