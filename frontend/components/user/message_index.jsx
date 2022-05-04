import React from "react";
import MessageIndexItem from "./message_index_item";

class MeesageIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { messages, deleteMessage, openMessageModal } = this.props;

    return (
      <div>
        {messages.length > 0 ? (
          <div className="messages-container">
            <div className="message-amount">
              Messages ({messages.length})
            </div>
            {messages.map(message =>
              <MessageIndexItem
                key={message.id}
                message={message}
                deleteMessage={deleteMessage}
                openMessageModal={openMessageModal}
              />
            )}
          </div>
        ) : (
            <div className="message-amount">
              No messages
            </div>
        )}
      </div>
    )
  } 
}

export default MeesageIndex;