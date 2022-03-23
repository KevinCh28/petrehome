import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

import Splash from "./splash/splash";
import Modal from "./modal/modal";

import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import PostIndexContainer from "./posts/post_index_container"
import GreetingContainer from "./greeting/greeting_container";
import PostShowContainer from "./posts/post_show_container";


const App = () => (
  <div>
    <Modal />
    <header>
      <GreetingContainer />
    </header>

    <Switch>
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
      <Route exact path="/posts/:postId" component={PostShowContainer} />
      <Route exact path="/posts" component={PostIndexContainer} />
      <Route exact path="/" component={Splash} />
    </Switch>
    

  </div>
);

export default App;