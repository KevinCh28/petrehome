import * as APIUtil from "../util/message_util"

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

const receiveMessages = messages => {
  return {
    type: RECEIVE_MESSAGES,
    messages,
  }
}

const receiveMessage = message => {
  return {
    type: RECEIVE_MESSAGE,
    message,
  }
}

const removeMessage = messageId => {
  return {
    type: REMOVE_MESSAGE,
    messageId
  }
}

export const fetchMessages = userId => dispatch => {
  return APIUtil.fetchMessages(userId)
    .then(messages => dispatch(receiveMessages(messages)))
}

export const createMessage = (message, userId) => dispatch => {
  return APIUtil.createMessage(message, userId)
    .then(message => dispatch(receiveMessage(message)))
}

export const deleteMessage = (userId, messageId) => dispatch => {
  return APIUtil.deleteMessage(userId, messageId)
    .then(() => dispatch(removeMessage(messageId)))
}