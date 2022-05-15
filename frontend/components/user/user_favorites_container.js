import { connect } from "react-redux";
import UserFavorite from "./user_favorites"
import { fetchUser } from "../../actions/session_actions";

const mapStateToProps = state => {
  return {
    userId: state.session.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFavorite);