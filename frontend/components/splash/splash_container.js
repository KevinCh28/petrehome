import { connect } from "react-redux";
import Splash from "./splash";
// import { fetchPosts } from "../../actions/post_actions";

const mapStateTopProps = (state) => {
  return {
    currentUser: state.entities.users[session.id],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchPosts: (filter) => dispatch(fetchPosts(filter)),
  }
}

export default connect(mapStateTopProps, null)(Splash)