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
    const message = {
      receiver_id: this.props.message.authorId,
      author_id: this.props.userId,
      body: this.state.body,
      author_name: this.props.authorName}
      
    this.props.createMessage(message, this.props.message.authorId)
      .then(this.props.closeModal)
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  componentWillUnmount() {
    this.props.removeErrors()
  }

  render() {
    const { formType } = this.props

    return (
      <div>
        {formType === 'inquiry' ? (
          <form onSubmit={this.handleInquirySubmit}>
            <div className="message-form-container">
              <div onClick={this.props.closeModal} className="modal-x">X</div>
              <h3 className="message-form-header">START YOUR INQUIRY</h3>
              <div className="message-form-form">
                <div className="message-form-field">
                  <textarea className="message-form-input"
                    value={this.state.body}
                    onChange={this.update("body")}>
                  </textarea>
                </div>
                <input className="message-form-submit" type="submit" value="Send" />
                {this.renderErrors()}
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={this.handleReplySubmit}>
            <div className="message-form-container">
              <div onClick={this.props.closeModal} className="modal-x">X</div>
                <h3 className="message-form-header">Reply to, {this.props.message.authorName}</h3>
              <div className="message-form">
                <div className="message-form-field">
                  <textarea className="message-form-input" 
                    value={this.state.body} 
                    onChange={this.update("body")}>
                  </textarea>
                </div>
                <input className="message-form-submit" type="submit" value="Send" />
                  {this.renderErrors()}
              </div>
            </div>
          </form>
        )}
      </div>
    )
  }

}

export default MessageForm;