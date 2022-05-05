import { combineReducers } from "redux";
import userReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import favoritesReducer from "./favorites_reducer";
import messageReducer from "./messages_reducer";

const entitiesReducer = combineReducers({
  users: userReducer,
  posts: postsReducer,
  favorites: favoritesReducer,
  messages: messageReducer,
})

export default entitiesReducer;