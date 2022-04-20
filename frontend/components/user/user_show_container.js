import { connect } from "react-redux";
import UserShow from "./user_show"
import { fetchFavorites } from "../../actions/favorite_actions";
// import { userFavPosts } from "../../actions/post_actions"

const mapStateToProps = state => {
  return {
    // currentUser: state.entities.users[state.session.id],
    userId: state.session.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // userFavPosts: (userId) => dispatch(userFavPosts(userId)),
    fetchFavorites: (userId) => dispatch(fetchFavorites(userId)),
    fetchPost: postId => dispatch(fetchPost(postId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);