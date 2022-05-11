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
          <div>
            <button onClick={() => openMessageModal(['reply', message])}>
              Reply
            </button>
            <button onClick={() => deleteMessage(message.receiverId, message.id)}>
              Delete
            </button>
          </div>
        </div>
        
        <div className="message-body">{message.body}</div>
      </div>
    )
  }
}

export default MessageIndexItem