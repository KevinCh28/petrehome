import { combineReducers } from "redux";
import userReducer from "./users_reducer";
import postsReducer from "./posts.reducer";
import favoritesReducer from "./favorites_reducer";

const entitiesReducer = combineReducers({
  users: userReducer,
  posts: postsReducer,
  favorites: favoritesReducer,
})

export default entitiesReducer;