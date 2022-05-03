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
            <h3>Messages:</h3>
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
          <div>
            No messages
          </div>
        )}
      </div>
    )
  } 
}

export default MeesageIndex;