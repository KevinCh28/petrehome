import { connect } from "react-redux";
import FavoriteIndex from "./favorite_index"
import { fetchFavorites, deleteFavorite } from "../../actions/favorite_actions";
import { fetchPosts } from "../../actions/post_actions";

const mapStateToProps = state => {
  return {
    userId: state.session.id,
    favorites: Object.values(state.entities.favorites),
    // posts: Object.values(state.entities.posts)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFavorites: userId => dispatch(fetchFavorites(userId)),
    fetchPosts : () => dispatch(fetchPosts()),
    deleteFavorite: (userId, favoriteId) => dispatch(deleteFavorite(userId, favoriteId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteIndex);