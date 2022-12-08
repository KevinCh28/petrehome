import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import Splash from "./splash/splash";
import Modal from "./modal/modal";
import Footer from "./footer/footer"

import Checklist from "./articles/checklist";
import Covid19 from "./articles/covid_19";
import PetAdoptionFaqs from "./articles/pet_adoption_faqs";
import Dogs from "./articles/dogs"
import DogsNutrition from "./articles/dogs_nutrition"
import DogsAge from "./articles/dogs_age"
import DogsSpayNeuter from "./articles/dogs_spay_neuter"
import Cats from "./articles/cats"
import CatsAge from "./articles/cats_age"
import CatsSpayNeuter from "./articles/cats_spay_neuter"

import GreetingContainer from "./greeting/greeting_container";
import PostIndexContainer from "./posts/post_index_container"
// import PostIndex from "./posts/post_index"
import PostShowContainer from "./posts/post_show_container";
import PostFormContainer from "./posts/post_form_container";
import UserShowContainer from "./user/user_show_container";
import UserFavoriteContainer from "./user/user_favorites_container";

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
      {/* <Route exact path="/posts" component={PostIndex} /> */}
      <ProtectedRoute exact path="/user/favorites" component={UserFavoriteContainer} />
      <ProtectedRoute exact path="/user/profile" component={UserShowContainer} />
      <Route exact path="/dogs/dogs-nutrition" component={DogsNutrition} />
      <Route exact path="/dogs/dogs-age" component={DogsAge} />
      <Route exact path="/dogs/dogs-spay-neuter" component={DogsSpayNeuter} />
      <Route exact path="/dogs" component={Dogs} />
      <Route exact path="/cats/cats-age" component={CatsAge} />
      <Route exact path="/cats/cats-spay-neuter" component={CatsSpayNeuter} />
      <Route exact path="/cats" component={Cats} />
      <Route exact path="/checklist" component={Checklist} />
      <Route exact path="/covid-19" component={Covid19} />
      <Route exact path="/pet-adoption-faqs" component={PetAdoptionFaqs} />
      <Route exact path="/" component={Splash} />

    </Switch>
    <Footer />

  </div>
);

export default App;