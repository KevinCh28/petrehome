import { connect } from "react-redux";
import FavoriteIndex from "./favorite_index"
import { fetchFavorites, deleteFavorite } from "../../actions/favorite_actions";

const mapStateToProps = state => {
  
  return {
    userId: state.session.id,
    favorites: Object.values(state.entities.favorites),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFavorites: userId => dispatch(fetchFavorites(userId)),
    deleteFavorite: (userId, favoriteId) => dispatch(deleteFavorite(userId, favoriteId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteIndex);