import { RECEIVE_MESSAGES, RECEIVE_MESSAGE, REMOVE_MESSAGE } from "../actions/message_action"
import { RECEIVE_CURRENT_USER } from "../actions/session_actions"

const messageReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_MESSAGES:
      nextState = action.messages
      return nextState
    case RECEIVE_MESSAGE:
      if (action.message !== undefined) {
        nextState[action.message.id] = action.message
      }
      return nextState
    case REMOVE_MESSAGE:
      delete nextState[action.messageId]
      return nextState
    case RECEIVE_CURRENT_USER:
      nextState = {}
      if (action.payload.messages) {
        nextState = action.payload.messages
      }
      return nextState
    default:
      return state;
  }
}

export default messageReducer;