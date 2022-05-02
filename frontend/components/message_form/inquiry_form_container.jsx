import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { createMessage } from "../../actions/message_action";
import MessageForm from "./message_form";

const mapStateToProps = (state) => {
  console.log(state)
  return {
    formType: "inquiry",
    userId: state.session.id,
    authorId: Object.values(state.entities.posts)[0].authorId || "",
    authorName: state.entities.users[state.session.id].firstName,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createMessage: (message, userId) => dispatch(createMessage(message, userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);