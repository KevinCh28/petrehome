import { connect } from "react-redux";
import UserShow from "./user_show"
import { fetchFavorites } from "../../actions/favorite_actions";
import { userFavPosts } from "../../actions/post_actions"

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    // userFavs: Object.values(state.entities.favorites.postId)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // userFavPosts: (id) => dispatch(userFavPosts(id)),
    fetchFavorites: (userId) => dispatch(fetchFavorites(userId)),
    fetchPost: postId => dispatch(fetchPost(postId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);