import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import Splash from "./splash/splash";
import Modal from "./modal/modal";
import Footer from "./footer/footer"

import Dogs from "./about_pages/dogs"
import DogsNutrition from "./about_pages/dogs_nutrition"
import DogsAge from "./about_pages/dogs_age"
import DogsSpayNeuter from "./about_pages/dogs_spay_neuter"

import Cats from "./about_pages/cats"
import CatsAge from "./about_pages/cats_age"
import CatsSpayNeuter from "./about_pages/cats_spay_neuter"

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
      <ProtectedRoute exact path="/user/profile" component={UserShowContainer} />
      <Route exact path="/dogs/dogs-nutrition" component={DogsNutrition} />
      <Route exact path="/dogs/dogs-age" component={DogsAge} />
      <Route exact path="/dogs/dogs-spay-neuter" component={DogsSpayNeuter} />
      <Route exact path="/dogs" component={Dogs} />
      <Route exact path="/cats/cats-age" component={CatsAge} />
      <Route exact path="/cats/cats-spay-neuter" component={CatsSpayNeuter} />
      <Route exact path="/cats" component={Cats} />
      <Route exact path="/" component={Splash} />

    </Switch>
    <Footer />

  </div>
);

export default App;