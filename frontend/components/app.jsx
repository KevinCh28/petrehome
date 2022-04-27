import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import Splash from "./splash/splash";
import Modal from "./modal/modal";
import Footer from "./footer/footer"

import GreetingContainer from "./greeting/greeting_container";
import PostIndexContainer from "./posts/post_index_container"
import PostShowContainer from "./posts/post_show_container";
import PostFormContainer from "./posts/post_form_container";
import UserShowContainer from "./user/user_show_container";

const App = () => (
  <div>
    <Modal />
    <header>
      <GreetingContainer />
    </header>

    <Switch>
      <ProtectedRoute exact path="/posts/new" component={PostFormContainer} />
      <Route exact path="/posts/:postId" component={PostShowContainer} />
      <Route exact path="/posts" component={PostIndexContainer} />
      {/* <Route exact path="/user/favorites" component={UserShowContainer} /> */}
      <ProtectedRoute exact path="/user/profile" component={UserShowContainer} />
      <Route exact path="/" component={Splash} />

    </Switch>
    <Footer />

  </div>
);

export default App;