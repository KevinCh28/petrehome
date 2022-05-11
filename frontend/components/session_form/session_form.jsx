import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      zip_code: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(this.props.closeModal);
  }

  handleDemo(e) {
    e.preventDefault();
    const user = {email: "demo@mail.com", password: "password"};
    this.props.processForm(user)
      .then(this.props.closeModal);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
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
    const { errors, formType, navLink } = this.props;

    return (
      <div>
        
        <form onSubmit={this.handleSubmit}>
          {formType === 'signup' ? (
            <div className="session-container">
              <div onClick={this.props.closeModal} className="modal-x">X</div>
              {this.renderErrors()}
              <h3 className="session-header">Sign up</h3>
              <div className="session-form">
                <div className="session-form-field">
                  <label className="session-form-text">First name</label>
                  <input className="session-form-input" type="text" value={this.state.first_name} onChange={this.update("first_name")}/>
                </div>

                <div className="session-form-field">
                  <label className="session-form-text">Last name</label>
                  <input className="session-form-input" type="text" value={this.state.last_name} onChange={this.update("last_name")}/>
                </div>

                <div className="session-form-field">
                  <label className="session-form-text">Email</label>
                  <input className="session-form-input" type="text" value={this.state.email} onChange={this.update("email")}/>
                </div>

                <div className="session-form-field">
                  <label className="session-form-text">ZIP code</label>
                  <input className="session-form-input" type="text" value={this.state.zip_code} onChange={this.update("zip_code")}/>
                </div>

                <div className="session-form-field">
                  <label className="session-form-text">Password</label>
                  <input className="session-form-input" type="password" value={this.state.password} onChange={this.update("password")}/>
                </div>

                <input className="session-form-submit" type="submit" value="SIGN UP"/>
              </div>

              <div className="session-form-redirect">
                <div>Already have an account?</div>
                {this.props.otherForm}
              </div>

            </div>
          ) : (
            <div className="session-container">
              <div onClick={this.props.closeModal} className="modal-x">X</div>
              {this.renderErrors()}
              <h3 className="session-header">Log in</h3>
              <div className="session-form">
                <div className="session-form-field">
                  <div className="session-form-text">Email</div>
                  <input className="session-form-input" type="email" value={this.state.email} onChange={this.update("email")} />
                </div>
                
                <div className="session-form-field">
                  <div className="session-form-text">Password</div>
                  <input className="session-form-input" type="password" value={this.state.password} onChange={this.update("password")}/>
                </div>
                
                <input className="session-form-submit" type="submit" value="LOG IN"/>
              </div>
              
              <div className="session-form-redirect">
                <div>Too lazy?</div>
                <div className="session-form-redirect-link" onClick={this.handleDemo}>Demo</div>
              </div>
              
              <div className="session-form-redirect">
                <div>Need an account?</div>
                {this.props.otherForm} 
              </div>
            </div>
          )}

        </form>
      </div>
    )
  }

}

export default SessionForm;