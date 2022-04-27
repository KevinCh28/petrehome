import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      receiver_id: this.props.authorId,
      author_id: this.props.userId,
      body: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = Object.assign({}, this.state);
    const userId = this.props.authorId
    this.props.createMessage(message ,userId)
      .then(this.props.closeModal)
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { formType } = this.props

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {formType === 'inquiry' ? (
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
          ) : (
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
          )}
        </form>
      </div>
    )
  }

}

export default MessageForm;