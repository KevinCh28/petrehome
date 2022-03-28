import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form'

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);