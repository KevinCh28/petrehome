import { connect } from "react-redux";
import EditPostForm from './edit_post_form';
import { editPost, fetchPost, removeErrors } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  return {
    formType: "editpost",
    post: Object.values(state.entities.posts)[0],
    ownerId: state.session.id,
    errors: state.errors.posts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editPost: (postId, post) => dispatch(editPost(postId, post)),
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);