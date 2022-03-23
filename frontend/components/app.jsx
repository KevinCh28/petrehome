import React from "react";
import { Route, Switch } from "react-router-dom";

import Splash from "./splash/splash";
import Modal from "./modal/modal";

import GreetingContainer from "./greeting/greeting_container";
import PostIndexContainer from "./posts/post_index_container"
import PostShowContainer from "./posts/post_show_container";


const App = () => (
  <div>
    <Modal />
    <header>
      <GreetingContainer />
    </header>

    <Switch>
      <Route exact path="/posts/:postId" component={PostShowContainer} />
      <Route exact path="/posts" component={PostIndexContainer} />
      <Route exact path="/" component={Splash} />
    </Switch>
    

  </div>
);

export default App;