import { RECEIVE_MESSAGES, RECEIVE_MESSAGE, REMOVE_MESSAGE } from "../actions/message_action"

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_MESSAGES:
      nextState = action.messages
      return nextState
    case RECEIVE_MESSAGE:
      nextState[action.message.id] = action.message
      return nextState
    case REMOVE_MESSAGE:
      delete nextState[action.messageId]
      return nextState
    default:
      return state;
  }
}

export default messagesReducer;