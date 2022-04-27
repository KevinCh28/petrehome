import { connect } from "react-redux";
import UserShow from "./user_show"
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

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);