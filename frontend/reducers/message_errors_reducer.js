import { RECEIVE_CREATE_MESSAGE, RECEIVE_MESSAGE_ERRORS, REMOVE_MESSAGE_ERRORS } from "../actions/message_action";

const messagesErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CREATE_MESSAGE:
      return [];
    case RECEIVE_MESSAGE_ERRORS:
      return action.errors;
    case REMOVE_MESSAGE_ERRORS:
      return [];
    default:
      return state;
  }
}

export default messagesErrorsReducer;