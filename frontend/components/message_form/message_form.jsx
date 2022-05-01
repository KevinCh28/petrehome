import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      receiver_id: this.props.authorId,
      author_id: this.props.userId,
      body: "",
      author_name: this.props.authorName,
    }

    this.handleInquirySubmit = this.handleInquirySubmit.bind(this);
    this.handleReplySubmit = this.handleReplySubmit.bind(this);
  }

  handleInquirySubmit(e) {
    e.preventDefault();
    this.props.createMessage(this.state ,this.state.receiver_id)
      .then(this.props.closeModal)
  }

  handleReplySubmit(e) {
    e.preventDefault();
    const message = Object.assign({}, this.state);
    this.props.createMessage(message, this.state.receiver_id)
      .then(this.props.closeModal)
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { formType } = this.props

    return (
      <div>
        {formType === 'inquiry' ? (
          <form onSubmit={this.handleInquirySubmit}>
            <div className="session-container">
              <div onClick={this.props.closeModal} className="modal-x">X</div>
              <h3 className="session-header">START YOU INQUIRY</h3>
              <div className="session-form">
                <div className="session-form-field">
                  <input className="session-form-input" type="text" value={this.state.body} onChange={this.update("body")} />
                </div>
                <input className="session-form-submit" type="submit" value="Send" />
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={this.handleReplySubmit}>
            <div className="session-container">
              <div onClick={this.props.closeModal} className="modal-x">X</div>
              <h3 className="session-header">REPLY</h3>
              <div className="session-form">
                <div className="session-form-field">
                  <input className="session-form-input" type="text" value={this.state.body} onChange={this.update("body")} />
                </div>
                <input className="session-form-submit" type="submit" value="Send" />
              </div>
            </div>
          </form>
        )}
      </div>
    )
  }

}

export default MessageForm;