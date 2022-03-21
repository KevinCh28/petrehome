import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

import { login, signup, logout } from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  //testing start
  window.login = login
  window.signup = signup
  window.logout = logout
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //testing end


  ReactDOM.render(<Root store={store} />, root)
})