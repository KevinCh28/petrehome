import { connect } from "react-redux";
import { fetchPost } from "../../actions/post_actions";
import PostShow from "./post_show";
import { createFavorite, deleteFavorite } from "../../actions/favorite_actions";
import { openModal, closeModal } from "../../actions/modal_actions";


const mapStateToProps = (state, ownProps) => {
  return {
    post: state.entities.posts[ownProps.match.params.postId],
    userId: state.session.id,
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: postId => dispatch(fetchPost(postId)),
    createFavorite: (userId, post) => dispatch(createFavorite(userId, post)),
    deleteFavorite: (userId, favoriteId) => dispatch(deleteFavorite(userId, favoriteId)),
    openModal: modal => dispatch(openModal(modal)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);