import { OPEN_MODAL, CLOSE_MODAL, OPEN_MESSAGE_MODAL } from "../actions/modal_actions"

const modalReducer = (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    case OPEN_MESSAGE_MODAL:
      return action.payload;
    default:
      return state;
  }

}

export default modalReducer;