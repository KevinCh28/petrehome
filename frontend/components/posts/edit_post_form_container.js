import { connect } from "react-redux";
import EditPostForm from './edit_post_form';
import { editPost, fetchPost } from "../../actions/post_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {

  return {
    formType: "editpost",
    post: Object.values(state.entities.posts)[0],
    ownerId: state.session.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editPost: (postId, post) => dispatch(editPost(postId, post)),
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);