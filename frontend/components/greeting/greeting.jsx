import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({logout, openModal, currentUser}) => {
  const loggedOutGreeting = () => (
    <div className='nav'>
      <div className='nav-logo-container'>
        <Link to="/" className='nav-logo'>
          <img src={window.logoURL} />
        </Link>
      </div>
      
      <nav className='nav-login-signup'>
        <div className='nav-fav-button-container'>
          <button onClick={() => openModal('login')} className='nav-fav-button'>
            <img src={window.favURL} />
          </button>
        </div>

        <button onClick={() => openModal('signup')} className='nav-signup'>Sign Up</button>
        <button onClick={() => openModal('login')} className='nav-login'>Log In</button>
      </nav>
    </div>
    
  )
  const loggedInGreeting = () => (
    <div className='nav'>
      <div className='nav-logo-container'>
        <Link to="/" className='nav-logo'>
          <img src={window.logoURL} />
        </Link>
      </div>
      
      <nav className='nav-login-signup'>
        <div className='nav-fav-button-container'>
          {/* <Link to={`/user/favorites`} className='nav-fav-button'>
            <img src={window.favURL} />
          </Link> */}
          <Link to={`/user/profile`} className='nav-fav-button'>
            <img src={window.favURL} />
          </Link>
        </div>
        
        <button onClick={() => openModal('createpost')} className='nav-login'>Rehome a pet</button>
        <button onClick={logout} className='nav-logout'>Log Out</button>
      </nav>

    </div>
  )

  return currentUser ? loggedInGreeting() : loggedOutGreeting()
}

export default Greeting;