import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      zipCode: "",
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
                  <input className="session-form-input" type="text" value={this.state.firstName} onChange={this.update("firstName")}/>
                </div>

                <div className="session-form-field">
                  <label className="session-form-text">Last name</label>
                  <input className="session-form-input" type="text" value={this.state.lastName} onChange={this.update("lastName")}/>
                </div>

                <div className="session-form-field">
                  <label className="session-form-text">Email</label>
                  <input className="session-form-input" type="text" value={this.state.email} onChange={this.update("email")}/>
                </div>

                <div className="session-form-field">
                  <label className="session-form-text">ZIP code</label>
                  <input className="session-form-input" type="text" value={this.state.zipCode} onChange={this.update("zipCode")}/>
                </div>

                <div className="session-form-field">
                  <label className="session-form-text">Password</label>
                  <input className="session-form-input" type="password" value={this.state.password} onChange={this.update("password")}/>
                </div>

                <input className="session-form-submit" type="submit" value="SIGN UP"/>
              </div>

              <div className="session-form-redirect">
                Already have an account?  {this.props.otherForm}
                {/* <a href={this.props.otherForm} className="session-form-redirect-link">Log in</a> */}
              </div>

            </div>
          ) : (
            <div className="session-container">
              <div onClick={this.props.closeModal} className="modal-x">X</div>
              {this.renderErrors()}
              <h3 className="session-header">Log in</h3>
              <div className="session-form">
                <div className="session-form-field">
                  <label className="session-form-text">Email</label>
                  <input className="session-form-input" type="text" value={this.state.email} onChange={this.update("email")}/>
                </div>

                <div className="session-form-field">
                  <label className="session-form-text">Password</label>
                  <input className="session-form-input" type="password" value={this.state.password} onChange={this.update("password")}/>
                </div>
                
                <input className="session-form-submit" type="submit" value="LOG IN"/>
              </div>
              
              <div className="session-form-redirect">
                  Need an account?  {this.props.otherForm} 
                  {/* <a href={this.props.otherForm} className="session-form-redirect-link">Sign up</a> */}
              </div>

              <button className="login-form-demo" onClick={this.handleDemo}>DEMO</button>
            </div>
          )}

        </form>
      </div>
    )
  }

}

export default SessionForm;