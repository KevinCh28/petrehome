import { connect } from "react-redux";
import { createMessage, deleteMessage } from "../../actions/message_action"
import MeesageIndex from "./message_index";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  return {
    userId: state.session.id,
    messages: Object.values(state.entities.messages),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteMessage: (userId, messageId) => dispatch(deleteMessage(userId, messageId)),
    openModal: payload => dispatch(openModal(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeesageIndex);