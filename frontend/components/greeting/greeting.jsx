import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({logout, openModal, currentUser}) => {
  const loggedOutGreeting = () => (
    <div>
      <div>
        <Link to="/">LOGO</Link>
      </div>
      <nav>
        <button onClick={() => openModal('login')}>Log In</button>
        <button onClick={() => openModal('signup')}>Sign Up</button>
      </nav>
    </div>
    
  )
  const loggedInGreeting = () => (
    <div>
      <div>
        <Link to="/">LOGO</Link>
      </div>
      <button onClick={logout}>Log Out</button>
    </div>
  )

  return currentUser ? loggedInGreeting() : loggedOutGreeting()
}

export default Greeting;