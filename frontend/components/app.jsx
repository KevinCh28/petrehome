import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Link, Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from "../util/route_util";
import Splash from "./splash/splash";

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={Splash}></Route>
    </Switch>
    

  </div>
);

export default App;