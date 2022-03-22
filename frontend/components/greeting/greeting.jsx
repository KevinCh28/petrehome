import React from "react";
import { Link } from "react-router-dom";

const Greeting = props => {
  const loggedOutGreeting = () => (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  )
  const loggedInGreeting = () => (
    <div>
      <h3>Welcome, {props.currentUser.email}!</h3>
      <button onClick={props.logout}>Log Out</button>
    </div>
  )

  return props.currentUser ? loggedInGreeting() : loggedOutGreeting()
}

export default Greeting;