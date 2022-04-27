import React from "react";
import MessageIndexItem from "./message_index_item";

class MeesageIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { messages, deleteMessage, openModal } = this.props;

    return (
      <div>
        {messages.length > 0 ? (
          <div>Messages:
            <ul>
              {messages.map(message =>
                <MessageIndexItem
                  key={message.id}
                  message={message}
                  deleteMessage={deleteMessage}
                  openModal={openModal}
                />
              )}
            </ul>
          </div>
        ) : (
          <div>
            No new messages
          </div>
        )}
      </div>
    )
  } 
}

export default MeesageIndex;