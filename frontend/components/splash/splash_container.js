import { connect } from "react-redux";
import Splash from "./splash";

const mapStateTopProps = ({ session, entities: {users} }) => {
  return {
    currentUser: users[session.id],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // logout: () => dispatch(logout())
  }
}

export default connect(mapStateTopProps, null)(Splash)