import { connect } from 'react-redux';
import { createPost, removeErrors } from '../../actions/post_actions';
import PostForm from './post_form'
import { closeModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    errors: state.errors.posts,
    currentUser: state.entities.users[state.session.id],
    formType: 'createpost',
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));