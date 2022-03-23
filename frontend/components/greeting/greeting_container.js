import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout}  from '../../actions/session_actions';
import Greeting from './greeting'

const mapStateTopProps = ({ session, entities: {users} }) => {
  return {
    currentUser: users[session.id],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(Greeting)