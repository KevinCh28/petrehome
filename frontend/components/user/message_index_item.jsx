import React from "react";

class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { message, deleteMessage, openModal } = this.props;
    return (
      <li>
        <div>
          <h3>{message.authorName}</h3>
          <h3>{message.body}</h3>
          <button onClick={() => openModal('reply')}>
            reply
          </button>
          <button onClick={() => deleteMessage(message.receiverId, message.id)}>
            delete
          </button>
        </div>
      </li>
    )
    
  }
}

export default MessageIndexItem