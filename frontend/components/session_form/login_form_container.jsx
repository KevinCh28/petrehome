import { connect } from "react-redux";
import { login, removeErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";
import React from "react";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'login',
    // navLink: <Link to="/signup">signup</Link>,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)