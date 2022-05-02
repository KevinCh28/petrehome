import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { createMessage } from "../../actions/message_action";
import MessageForm from "./message_form";

const mapStateToProps = (state) => {
  return {
    formType: "reply",
    userId: state.session.id,
    authorName: state.entities.users[state.session.id].firstName,
    message: state.ui.modal[1],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createMessage: (userId) => dispatch(createMessage(userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);