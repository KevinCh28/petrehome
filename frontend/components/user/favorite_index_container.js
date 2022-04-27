import { connect } from "react-redux";
import FavoriteIndex from "./favorite_index"

const mapStateToProps = (state) => {
  return {
    userId: state.session.id,
    favorites: Object.values(state.entities.favorites) || []
  }
}

export default connect(mapStateToProps, null)(FavoriteIndex);