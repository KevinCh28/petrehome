import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

import { login, signup, logout } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {

  //testing start
  // window.login = login
  // window.signup = signup
  // window.logout = logout
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  //testing end

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();

    // testing start
    window.login = login
    window.signup = signup
    window.logout = logout
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // testing end
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root)
})