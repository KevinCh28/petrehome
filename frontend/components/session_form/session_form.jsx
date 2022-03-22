import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const nextState = Object.assign({}, this.state);
    this.props.processForm(nextState);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const { errors, formType, navLink } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Welcome to Pet Rehome!
          <br />
          Please {formType} or {navLink}
          <div>
            <label>email: 
              <input type="text" value={this.state.email} onChange={this.update("email")}/>
            </label>
            <br />
            <label>Password: 
              <input type="password" value={this.state.password} onChange={this.update("password")}/>
            </label>
            
            <br />
            <input type="submit" value={formType}/>
          </div>
        </form>
      </div>
    )
  }

}

export default SessionForm;