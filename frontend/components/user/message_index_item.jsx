import React from "react";

class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { message, deleteMessage, openMessageModal } = this.props;
    return (
      <div className="messages-item-container">
        <div className="message-item-header">
          <h3 className="message-author-name">From: {message.authorName}</h3>
          <div className="message-buttons">
            <div className="message-reply-delete" onClick={() => openMessageModal(['reply', message])}>
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
            <div className="message-reply-delete" onClick={() => deleteMessage(message.receiverId, message.id)}>
              <i className="fa-solid fa-circle-minus"></i>
            </div>
          </div>
        </div>
        
        <div className="message-body">{message.body}</div>
      </div>
    )
  }
}

export default MessageIndexItem