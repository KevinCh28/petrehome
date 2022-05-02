export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MESSAGE_MODAL = "OPEN_MESSAGE_MODAL";

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const openMessageModal = payload => {
  return {
    type: OPEN_MESSAGE_MODAL,
    payload
  };
};