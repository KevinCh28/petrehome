import React from "react";
import { Link } from "react-router-dom";

const Greeting = props => {
  const sessionLinks = () => (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  )
  const loggedInGreeting = () => (
    <div>
      <h3>Welcome, {props.currentUser.username}!</h3>
      <button onClick={props.logout}>Log Out</button>
    </div>
  )

  return props.currentUser ? loggedInGreeting() : sessionLinks()
}

export default Greeting;