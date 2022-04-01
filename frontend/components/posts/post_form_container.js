import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form'
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    formType: 'createpost',
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);