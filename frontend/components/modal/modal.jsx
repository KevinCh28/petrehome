import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import PostFormContainer from '../posts/post_form_container';
import EditPostContainer from '../posts/edit_post_form_container';
import ReplyMessageContainer from '../message_form/reply_form_container';
import InquiryMessageContainer from '../message_form/inquiry_form_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  if (modal.length === 2) {
    switch (modal[0]) {
      case 'reply':
        component = <ReplyMessageContainer message={modal[1]}/>;
        break;
      default:
        return null;
    }
  } else {
    switch (modal) {
      case 'login':
        component = <LoginFormContainer />;
        break;
      case 'signup':
        component = <SignupFormContainer />;
        break;
      case 'createpost':
        component = <PostFormContainer />;
        break;
      case 'editpost':
        component = <EditPostContainer />;
        break;
      case 'inquiry':
        component = <InquiryMessageContainer />;
        break;
      default:
        return null;
    }
  }
  return (
    <div className="modal-main">
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    </div>
    
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);