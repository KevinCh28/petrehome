import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({logout, openModal, currentUser}) => {
  const loggedOutGreeting = () => (
    <div className='nav-container'>
      <div className='nav-logo-container'>
        <Link to="/">
          <img src={window.logoURL} className='nav-logo'/>
        </Link>
      </div>
      
      <div className='nav-right'>
        <Link to="/posts" className="nav-search-icon">
          <i className="fa-solid fa-magnifying-glass fa-2x"></i>
        </Link>
        <div className='nav-fav-button-container'>
          <div onClick={() => openModal('login')} className='nav-fav-button'>
            <i className="fa-solid fa-heart fa-2x"></i>
          </div>
        </div>
        <div>
          <button onClick={() => openModal('signup')} className='nav-signup'>
            Sign Up
          </button>
          <button onClick={() => openModal('login')} className='nav-login'>
            Log In
          </button>
        </div>
      </div>
    </div>
    
  )
  const loggedInGreeting = () => (
    <div className='nav-container'>
      <div className='nav-logo-container'>
        <Link to="/">
          <img src={window.logoURL} className='nav-logo'/>
        </Link>
      </div>
      
      <div className='nav-right'>
        <Link to="/posts" className="nav-search-icon">
          <i className="fa-solid fa-magnifying-glass fa-2x"></i>
        </Link>
        <Link to="/user/profile" className="nav-search-icon">
          <i class="fa-solid fa-user fa-2x"></i>
        </Link>
        <div className='nav-fav-button-container'>
          <Link to={`/user/favorites`} className='nav-fav-button'>
            <i className="fa-solid fa-heart fa-2x"></i>
          </Link>
        </div>
        <div>
          <button onClick={() => openModal('createpost')} className='nav-login'>
            Rehome a pet
          </button>
          <button onClick={logout} className='nav-logout'>
            Log Out
          </button>
        </div>
      </div>
    </div>
  )

  return currentUser ? loggedInGreeting() : loggedOutGreeting()
}

export default Greeting;