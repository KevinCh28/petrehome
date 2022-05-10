import React from "react";
import { connect } from "react-redux";
import { login, removeErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'login',
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
    otherForm: (
      <div onClick={() => dispatch(openModal('signup'))} className="session-form-redirect-link">
        Sign up
      </div>
    ),
    closeModal: () => dispatch(closeModal()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)