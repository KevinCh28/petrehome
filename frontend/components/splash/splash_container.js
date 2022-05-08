import { connect } from "react-redux";
import Splash from "./splash";

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