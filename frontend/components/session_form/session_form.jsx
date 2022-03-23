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
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleDemo(e) {
    e.preventDefault();
    const user = {email: "demo@mail.com", password: "password"};
    this.props.processForm(user).then(this.props.closeModal);
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
            <div>
              <div onClick={this.props.closeModal}>X</div>
              {this.renderErrors()}
              <h3>Sign up</h3>
              <label>First name
                <input type="text" value={this.state.first_name} onChange={this.update("first_name")}/>
              </label>
              <br />
              <label>Last name
                <input type="text" value={this.state.last_name} onChange={this.update("last_name")}/>
              </label>
              <br />
              <label>Email
                <input type="text" value={this.state.email} onChange={this.update("email")}/>
              </label>
              <br />
              <label>ZIP code
                <input type="text" value={this.state.zip_code} onChange={this.update("zip_code")}/>
              </label>
              <br />
              <label>Password
                <input type="password" value={this.state.password} onChange={this.update("password")}/>
              </label>
              <br />
              <input type="submit" value={formType}/>
              <br />
              Already have an account? {this.props.otherForm}
            </div>
          ) : (
            <div>
              <div onClick={this.props.closeModal}>X</div>
              {this.renderErrors()}
              <h3>Log in</h3>
              <label>Email
                <input type="text" value={this.state.email} onChange={this.update("email")}/>
              </label>
              <br />
              <label>Password
                <input type="password" value={this.state.password} onChange={this.update("password")}/>
              </label>
              <br />
              <input type="submit" value={formType}/>
              <br />
              Need an account? {this.props.otherForm}
              <br />
              <button onClick={this.handleDemo}>DEMO</button>
            </div>
          )}

        </form>
      </div>
    )
  }

}

export default SessionForm;