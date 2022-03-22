import React from "react";
import { Link } from "react-router-dom";

const Greeting = props => {
  const loggedOutGreeting = () => (
    <div>
      <div>
        <Link to="/">LOGO</Link>
      </div>
      <nav>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </div>
    
  )
  const loggedInGreeting = () => (
    <div>
      <div>
        <Link to="/">LOGO</Link>
      </div>
      <button onClick={props.logout}>Log Out</button>
    </div>
  )

  return props.currentUser ? loggedInGreeting() : loggedOutGreeting()
}

export default Greeting;