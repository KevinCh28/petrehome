import { connect } from 'react-redux';
import { logout}  from '../../actions/session_actions';
import Greeting from './greeting'

const mapStateTopProps = ({ session, entities: {users}}) => {
  return {
    currentUser: users[session.id],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(Greeting)