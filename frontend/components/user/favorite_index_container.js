import { connect } from "react-redux";
import FavoriteIndex from "./favorite_index"
import { fetchFavorites, deleteFavorite } from "../../actions/favorite_actions";
import { fetchPosts, userFavPosts } from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.session.id,
    favorites: Object.values(state.entities.favorites),
    posts: state.entities.posts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    // userFavPosts: (userId) => dispatch(userFavPosts(userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteIndex);